export default function localPostReducer(state, action) {
    switch (action.type) {
        case "ADD_POST":
            const newPostsState = [...state.posts, action.payload];
            localStorage.setItem("localPostList", JSON.stringify(newPostsState));
            return {
                posts: newPostsState
            }
        case "EDIT_POST":
            const findIndex = state.posts.findIndex(x => x.id === action.payload.id);
            if (findIndex !== -1) {
                state.posts[findIndex] = action.payload;
            }
            localStorage.setItem("localPostList", JSON.stringify(state.posts));
            return {
                posts: state.posts
            }
        case "DELETE_POST":
            const newPostsStateDelete = state.posts.filter(x => x.id !== action.payload);
            localStorage.setItem("localPostList", JSON.stringify(newPostsStateDelete));
            return {
                posts: newPostsStateDelete
            }
        default:
            break;
    }


}