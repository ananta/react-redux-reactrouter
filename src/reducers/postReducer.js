const initialState = {

    error:'',
}
export default (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_POST_SUCCESS':
        return {
            ...state,
            posts: [...state.posts, action.newPost],
            busy:false,
        }
        case 'FETCHING_POST' || 'CREATING_POST':
        return {
            ...state,
            busy:true
        }
        case 'RETRIVE_POST_SUCCESS':
        return {
            ...state,
            posts:action.data,
            busy:false,
        }
        case 'RETRIVE_POST_FAILED' || 'CREATE_POST_FAILED':
        console.log(action.error);
        return {
            ...state,
            error:action.error,
            busy:false,
        }
        default:
        return state;
    }
};