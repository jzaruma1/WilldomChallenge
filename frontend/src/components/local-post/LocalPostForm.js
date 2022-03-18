import React, { useState, useContext, useEffect } from 'react';
import { LocalPostContext } from '../../context/local-post/LocalPostContext';
import { useNavigate, useParams } from "react-router-dom";
import { v4 } from "uuid";
const LocalPostForm = () => {

    const [images, setImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);


    const navigate = useNavigate();
    const params = useParams();
    const { addPost, editPost, posts } = useContext(LocalPostContext);
    const [post, setPost] = useState({ id: '', title: '', content: '', image: '' });


    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (params.id) {
            editPost(post);
        } else {
            post.id = v4();
            addPost(post);
        }

        navigate('/')
    }

    useEffect(() => {
        const postFound = posts.find(x => x.id == params.id);
        if (postFound)
            setPost(postFound);
    }, [params.id, posts]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImagesUrls = [];
        images.forEach(image => {
            newImagesUrls.push(URL.createObjectURL(image));
        });
        setPost({ ...post, 'image': newImagesUrls[0] })
        setImageUrls(newImagesUrls);
    }, [images])

    function onImageChange(e) {
        setImages([...e.target.files]);
    }


    return (<div className='flex justify-center items-center mt-10'>
        <form className='bg-gray-900 p-10' onSubmit={handleSubmit}>
            <h4 className='mb-7 text-3x1 text-white text-center'>
                {params.id ? 'Edit Post' : 'New Post'}

            </h4>
            <div className='mb-5'>
                <input type="text" name='title' placeholder='Enter a title' className='py-3 px-4
                focus:text-gray-100 bg-gray-700 w-full'
                    value={post.title}
                    onChange={handleChange} />
            </div>

            <div className='mb-5'>
                <textarea name='description'
                    rows='2'
                    placeholder='Enter a description'
                    onChange={handleChange}
                    value={post.description}
                    className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'>

                </textarea>
            </div>

            <div className='mb-5'>
                <input type="file" name='image' multiple accept="image/*" onChange={onImageChange} />
                <div className='bg-purple-300'>
                    {imageUrls.length ? imageUrls.map(imageSrc => <img className='object-fill h-48 w-96' src={imageSrc} />) : post.image ? <img className='object-fill h-48 w-96' src={post.image} /> : ''}
                </div>
            </div>

            <button className='bg-green-600 w-full hover:bg-green-500 py-2 px-4 font-bold text-white'>
                {params.id ? 'Edit Post' : 'Create Post'}
            </button>

        </form>

    </div>)
}

export default LocalPostForm;