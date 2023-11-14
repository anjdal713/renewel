import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';
import { postList } from '../../Data';
import Pagination from 'react-js-pagination';
import './Paging.css'


const PostList = props => {
    const [ dataList, setDataList ] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [page, setPage] = useState(1);
    const handlePageChange = (page) => {
        setPage(page);
    };
    const [postPerPage] = useState(10);
    const indexOfLastPost = page*postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    useEffect(() => {
        setDataList(postList);
    }, [])

    useEffect(() => {
        setCurrentPosts(dataList.slice(indexOfFirstPost, indexOfLastPost))
    }, [indexOfFirstPost, indexOfLastPost, page, dataList])

    const handleTitleClick = (item) => {
        // 클릭 시 readCount 증가
        const updatedList = currentPosts.map((post) => {
            if (post.no === item.no) {
                return { ...post, readCount: post.readCount + 1 };
            }
            return post;
        });

        setDataList(updatedList);
    };

    return (
        <>
        <CommonTable headersName={['글번호', '구분', '제목', '작성자', '등록일자', '조회수']}>
        {
            currentPosts ? currentPosts.map((item, index) => {
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
                        color: '#4B89DC',
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