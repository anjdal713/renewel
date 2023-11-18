import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getPostByNo } from '../../Data';
import './Post.css';
import AOS from "aos";
import "aos/dist/aos.css";
import head from '../../img/head.jpg';

const PostView = () => {
    useEffect(() => {
        AOS.init();
    })

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
        <div className="head-image">
            <img className="headImage" alt="Head" src={head}/>
        </div>
        <br/><br/><br/>
        <div data-aos="fade-up"
                data-aos-duration="1500">
            <h1 align="center">학사공지</h1>
            <br/>
            <hr class="custom-hr"/>
            <br/>
        </div>
        <div data-aos="fade-up"
            data-aos-duration="1500"
            className="post-view-wrapper">
        {
            data ? (
            <>
                <br/>
                <div className="post-view-head">
                <hr className="hr-top"/><br/>
                <label class="title-label"><b>{data.title}</b></label><br/><br/>
                <label class="label2">작성자:  {data.person} ,      작성일:  {data.createDate}</label>
                <hr className="custom-hr2"/>
                </div>
                <div className="post-view-body">
                    <p class="p1"><pre>{data.content}</pre></p>
                    <br/><br/>
                    <hr/><br/>
                </div>
            </>
            ) : (
            <div className="error-message">해당 게시글을 찾을 수 없습니다.</div>
        )}
        
        <button className="post-view-go-list-btn" onClick={() => navigate(-1)}>게시글 목록</button>
        </div>
        </>
    )
}

export default PostView;