import React, { useContext, useEffect } from 'react';
import { Row } from "reactstrap";

import RemoteContext from "../../context/remote-post/RemoteContext";
import PostCard from '../shared/PostCard';

const RemotePlusPostList = () => {
    const { getRemotePlusPosts, remotePlusPosts } = useContext(RemoteContext);
    useEffect(() => {
        getRemotePlusPosts()
    }, [])

    return (
        <div className='mt-10'>
            <Row>
                {remotePlusPosts.map(postItem => (
                    <PostCard key={postItem.id} post={postItem}  />
                ))}
            </Row>
        </div>)
}

export default RemotePlusPostList;