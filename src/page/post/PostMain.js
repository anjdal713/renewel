import React from 'react';
import PostList from './PostList';
import './Post.css'
import head from '../../img/head.jpg';

const PostMain = props => {
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
        <PostList />
        </>
    )
}

export default PostMain;