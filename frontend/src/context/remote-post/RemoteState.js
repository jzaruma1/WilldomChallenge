import React, { useReducer } from "react";
import RemoteReducer from "./RemoteReducer";
import RemoteContext from "./RemoteContext";
import { v4 as uuidv4 } from 'uuid';

const RemoteState = (props) => {

    const initialState = {
        remotePosts: [],
        remotePlusPosts: []
    }
    const [state, dispatch] = useReducer(RemoteReducer, initialState)

    const getRemotePosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(x => x.json())
            .then(x => dispatch({
                type: "GET_REMOTE_POSTS",
                payload: x?.map(x => {
                    return {
                        ...x, id: uuidv4(),
                        image: "https://i2-prod.liverpoolecho.co.uk/incoming/article23413450.ece/ALTERNATES/s1200/0_Set-of-Beatles-watches-selling-for-16000.jpg",
                        description: "Something went wrong, please try again later.\nSign up for our what's on newsletter for the perfect guide to making the most of your free time\nA set of four Beatles themed watches is available to purchase - for £16,000.\nAfter producing four successful... [1941 chars]"
                    }
                })
            }))
            .catch(() => {
                alert('failed to fetch');
            });;
    }

    const getRemotePlusPosts = () => {
        fetch('https://localhost:44361/api/RemotePlus/GetPost')
            .then(x => x.json())
            .then(x => dispatch({
                type: "GET_REMOTE_PLUS_POSTS",
                payload: x
            }))
            .catch(() => {
                dispatch({
                    type: "GET_REMOTE_PLUS_POSTS",
                    payload: []
                })
                alert('failed to fetch remote plus');
            });;
    }

    return (
        <RemoteContext.Provider value={
            {
                remotePosts: state.remotePosts,
                remotePlusPosts: state.remotePlusPosts,
                getRemotePosts,
                getRemotePlusPosts
            }
        } >
            {props.children}
        </RemoteContext.Provider>
    )
}

export default RemoteState;