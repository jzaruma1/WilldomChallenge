import React, { useContext, useEffect } from 'react';
import { Row } from "reactstrap";
import RemoteContext from "../../context/remote-post/RemoteContext";
import PostCard from '../shared/PostCard';

const RemotePostList = () => {
    const { getRemotePosts, remotePosts } = useContext(RemoteContext);
    useEffect(() => {
        getRemotePosts()
    }, [])

    return (
        <div className='mt-10'>
            <Row>
                {remotePosts.map(postItem => (
                    <PostCard key={postItem.id} post={postItem} />
                ))}
            </Row>
        </div>)
}

export default RemotePostList;