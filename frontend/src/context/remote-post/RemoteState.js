import React, { useReducer } from "react";
import RemoteReducer from "./RemoteReducer";
import RemoteContext from "./RemoteContext";
import { v4 as uuidv4 } from 'uuid';

const baseUrl = "https://localhost:44361/api/";

const RemoteState = (props) => {

    const initialState = {
        remotePosts: [],
        remotePlusPosts: [],
        errorRemote: false,
        errorRemotePlus: false
    }
    const [state, dispatch] = useReducer(RemoteReducer, initialState)

    const getRemotePosts = () => {
        fetch('https://gnews.io/api/v4/search?q=watches&token=16d81f4d255dcff454c6db88138338d8&lang=en')
            .then(x => x.json())
            .then(x => dispatch({
                type: "GET_REMOTE_POSTS",
                payload: {
                    data: x.articles?.map(x => {
                        return {
                            ...x, id: uuidv4(),
                        }
                    }), errorRemote: false
                }
            }))
            .catch((error) => {
                console.log(error)
                dispatch({
                    type: "GET_REMOTE_POSTS",
                    payload: { data: [], errorRemote: true }
                })
            });
    }

    const getRemotePlusPosts = () => {
        fetch(`${baseUrl}RemotePlus/GetPost`)
            .then(x => x.json())
            .then(x => dispatch({
                type: "GET_REMOTE_PLUS_POSTS",
                payload: { data: x, errorRemotePlus: false }
            }))
            .catch(() => {
                dispatch({
                    type: "GET_REMOTE_PLUS_POSTS",
                    payload: { data: [], errorRemotePlus: true }
                })
            });;
    }

    return (
        <RemoteContext.Provider value={
            {
                remotePosts: state.remotePosts,
                remotePlusPosts: state.remotePlusPosts,
                errorRemotePlus: state.errorRemotePlus,
                errorRemote: state.errorRemote,
                getRemotePosts,
                getRemotePlusPosts
            }
        } >
            {props.children}
        </RemoteContext.Provider>
    )
}

export default RemoteState;