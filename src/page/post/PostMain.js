import React from 'react';
import PostList from './PostList';
import './Post.css'

const PostMain = props => {
    return (
        <>
        <h1 align="center">학사공지</h1>
        <br/>
        <hr class="custom-hr"/>
        <br/>
        <PostList />
        </>
    )
}

export default PostMain;