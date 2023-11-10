import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getPostByNo } from '../../Data';
import './Post.css';

const PostView = () => {
    const [ data, setData ] = useState(null);
    const navigate = useNavigate();
    const {no} = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            console.log(no);
            const postData = await getPostByNo(no);
            if (postData !== null) {
                
                setData(postData);
            } else {
                console.error(`해당하는 ${no}번 게시글을 찾을 수 없습니다.`);
            }
        };
    
        fetchData();
    }, [no]);

    return (
        <>
        <h2 align="center">게시글 상세정보</h2>

        <div className="post-view-wrapper">
        {
            data ? (
            <>
                <div className="post-view-row">
                    <label>게시글 번호</label>
                    <label>{ data.no }</label>
                </div>
                <div className="post-view-row">
                    <label>제목</label>
                    <label>{ data.title }</label>
                </div>
                <div className="post-view-row">
                    <label>작성일</label>
                    <label>{ data.createDate }</label>
                </div>
                <div className="post-view-row">
                    <label>조회수</label>
                    <label>{ data.readCount }</label>
                </div>
                <div className="post-view-row">
                    <label>내용</label>
                    <div>
                    {
                        data.content
                    }
                    </div>
                </div>
            </>
            ) : (
            <div className="error-message">해당 게시글을 찾을 수 없습니다.</div>
        )}
        
        <button className="post-view-go-list-btn" onClick={() => navigate(-1)}>목록으로 돌아가기</button>
        </div>
    </>
    )
}

export default PostView;