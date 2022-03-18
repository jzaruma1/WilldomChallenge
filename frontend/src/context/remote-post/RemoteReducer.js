import React from "react";

export default (state, action) => {
    const { payload, type } = action

    switch (type) {
        case "GET_REMOTE_POSTS":
            return {
                ...state,
                remotePosts: payload
            }
        case "GET_REMOTE_PLUS_POSTS":
            return {
                ...state,
                remotePlusPosts: payload
            }
        default:
            break;
    }

}