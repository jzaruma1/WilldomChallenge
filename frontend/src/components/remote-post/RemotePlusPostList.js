import React, { useContext, useEffect } from 'react';
import { Alert, Row } from "reactstrap";

import RemoteContext from "../../context/remote-post/RemoteContext";
import PostCard from '../shared/PostCard';

const RemotePlusPostList = () => {
    const { getRemotePlusPosts, remotePlusPosts, errorRemotePlus } = useContext(RemoteContext);
    useEffect(() => {
        getRemotePlusPosts()
    }, [])

    return (
        <div className='mt-10'>
            {errorRemotePlus ?
                <Alert color="primary">
                    Error getting list of posts
                </Alert> : null}
            <Row>
                {remotePlusPosts.map(postItem => (
                    <PostCard key={postItem.id} post={postItem} />
                ))}
            </Row>
        </div>)
}

export default RemotePlusPostList;