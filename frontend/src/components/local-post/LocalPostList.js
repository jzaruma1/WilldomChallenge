import React, { useContext } from 'react';
import { LocalPostContext } from '../../context/local-post/LocalPostState';
import { Link } from 'react-router-dom';
import { Row } from "reactstrap";

import { IoMdAddCircle } from "react-icons/io";
import PostCard from "../shared/PostCard";
const LocalPostList = () => {
    const { deletePost, posts } = useContext(LocalPostContext);

    return (
        <div>
            <div className='flex item-center mb-10'>
                <div className='flex-grow text-right py-2'>
                    <Link to="/add" className='link-item'>
                        <button className='bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center'
                        >
                            <IoMdAddCircle />
                            Add Local Post
                        </button>
                    </Link>

                </div>
            </div>
            <Row>
                {posts.map(postItem => (
                    <PostCard key={postItem.id} post={postItem} deletePost={deletePost} />
                ))}
            </Row>
        </div>)
}

export default LocalPostList;