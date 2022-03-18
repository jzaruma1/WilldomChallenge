import React, { useContext, useEffect } from 'react';
import { Alert, Row } from "reactstrap";
import RemoteContext from "../../context/remote-post/RemoteContext";
import PostCard from '../shared/PostCard';

const RemotePostList = () => {
    const { getRemotePosts, remotePosts, errorRemote } = useContext(RemoteContext);
    useEffect(() => {
        getRemotePosts()
    }, [])

    return (
        <div className='mt-10'>
            {errorRemote ?
                <Alert color="primary">
                    Error getting list of posts
                </Alert> : null}
            <Row>
                {(remotePosts || []).map(postItem => (
                    <PostCard key={postItem.id} post={postItem} />
                ))}
            </Row>
        </div>)
}

export default RemotePostList;