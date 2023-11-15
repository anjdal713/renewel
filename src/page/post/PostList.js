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

const PostList = props => {
    const [ dataList, setDataList ] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [postPerPage] = useState(10);
    
    const indexOfLastPost = page*postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    useEffect(() => {
        setDataList(postList);
    }, [])

    useEffect(() => {
        setCurrentPosts(dataList.slice(indexOfFirstPost, indexOfLastPost));
    }, [indexOfFirstPost, indexOfLastPost, page, dataList])

    const handlePageChange = (page) => {
        setPage(page);
    };

    const handleTitleClick = (item) => {
        // 클릭 시 readCount 증가
        
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

    const dateToString = (date) => {
        return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0')
    }

    const handleSearchClick = () => {
        // 검색 버튼 클릭 시 실행되는 코드
        console.log('startDate:', dateToString(startDate));
        console.log('endDate:', dateToString(endDate));
        
        // 이후 추가로 필요한 작업을 수행할 수 있습니다.
        const filteredData = dataList.filter((item) => {
            return item.createDate >= dateToString(startDate) && item.createDate <= dateToString(endDate);
        });
        setCurrentPosts(filteredData);
    };

    return (
        <>
        <div className="search-bar">
            <CustomDatePicker selectedDate={startDate} setSelectedDate={setStartDate} />
            <span className="date-separator"><b>~</b></span>
            <CustomDatePicker selectedDate={endDate} setSelectedDate={setEndDate} />
            <button className="search-button" disabled={startDate > endDate} onClick={handleSearchClick}>
            <FaSearch className="search-icon" />
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
                        //color: 'blue',
                        borderBottom: '1.5px solid transparent', // 초기에는 투명한 밑줄
                        transition: 'border-color 0.3s', // 부드러운 효과를 위한 트랜지션
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