import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';
import { postList } from '../../Data';
import Pagination from 'react-js-pagination';
import './Paging.css'
import CustomDatePicker from "./DatePicker";
import { FaSearch } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import './textInput.css';

const PostList = props => {
    const [ dataList, setDataList ] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [postPerPage] = useState(10);
    const [tempList, setTempList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const indexOfLastPost = page*postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    useEffect(() => {
        setDataList(postList);
        setTempList(postList);
    }, [tempList])

    useEffect(() => {
        setCurrentPosts(dataList.slice(indexOfFirstPost, indexOfLastPost));
    }, [indexOfFirstPost, indexOfLastPost, page, dataList])

    const dateToString = (date) => {
        return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0')
    }

    const handlePageChange = (page) => {
        setPage(page);
    };

    const handleTitleClick = (item) => {
        const updatedList = currentPosts.map((post) => {    
            if (post.no === item.no) {
                if(localStorage.getItem(item.no) != null){
                    const temp = parseInt(localStorage.getItem(item.no), 10);
                    localStorage.removeItem(item.no);
                    localStorage.setItem(item.no, temp+1);
                }
                else{
                    localStorage.setItem(item.no, item.readCount+1);
                }
            }
            return post;
        });
        setDataList(updatedList);
    };

    const handleSearchClick = () => {
        const filteredData = dataList.filter((item) => {
            return item.createDate >= dateToString(startDate) && item.createDate <= dateToString(endDate);
        });
        setDataList(filteredData);
    };

    const handleReturnClick = () => {
        setDataList(tempList);
        setInputValue('');
    };

    const handleTextInputSearch = () => {
        const filteredData = tempList.filter((item) => {
            return item.title.includes(inputValue);
        })
        setDataList(filteredData);
    };

    const handleTextInput = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <>
        <div className = "input-bar">
            <input type="text" className="text-input" placeholder="내용을 입력해주세요." value={inputValue} onChange={handleTextInput}/>
            <button className="text-button" onClick={handleTextInputSearch}>검색</button>
        </div>
        <div className="search-bar">
            <CustomDatePicker selectedDate={startDate} setSelectedDate={setStartDate} />
            <span className="date-separator"><b>~</b></span>
            <CustomDatePicker selectedDate={endDate} setSelectedDate={setEndDate} />

            <button className="button" disabled={startDate > endDate} onClick={handleSearchClick}>
            <FaSearch className="icon" />
            </button>
            <button className="button" onClick={handleReturnClick}>
            <GrPowerReset className="icon"/>
            </button>
        </div>
        <CommonTable headersName={['글번호', '구분', '제목', '작성자', '등록일자', '조회수']}>
        {
            currentPosts ? currentPosts.map((item, index) => {
                if(localStorage.getItem(item.no) != null){
                    item.readCount = localStorage.getItem(item.no);
                }
                return (
                    <CommonTableRow key={index}>
                    <CommonTableColumn>{ item.no }</CommonTableColumn>
                    <CommonTableColumn>{ item.type }</CommonTableColumn>
                    <CommonTableColumn>
                    <Link
                    to={`/postView/${item.no}`}
                    onClick={() => handleTitleClick(item)}
                    style={{
                        textDecoration: 'none',
                        color: '#408FFF',
                        borderBottom: '1.5px solid transparent', 
                        transition: 'border-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.target.style.borderBottom = '1.5px solid black')}
                    onMouseOut={(e) => (e.target.style.borderBottom = '1.5px solid transparent')}
                    >
                    {item.title}
                </Link>
                    </CommonTableColumn>
                    <CommonTableColumn>{ item.person }</CommonTableColumn>
                    <CommonTableColumn>{ item.createDate }</CommonTableColumn>
                    <CommonTableColumn>{ item.readCount }</CommonTableColumn>
                    </CommonTableRow>
                )
            }) : ''
        }
        </CommonTable>
        <br/><br/>
        <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={dataList.length}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
        </>
    )
}

export default PostList;