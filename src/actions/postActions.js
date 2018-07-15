import Axios from 'axios';

const url = "http://anantabastola.com.np/wp-json/wp/v2/posts";

const credential = {
 
}
export const fetchingPost =() =>{
    return {
        type:'FETCHING_POST'
    }
}
// export const 
export const createPostSuccess =(data) => {
    return {
        type:'CREATE_POST_SUCCESS',
        data,
    }
}
export const retrivePostSuccess = (data) => {

    console.log(data);
    return {
        type:"RETRIVE_POST_SUCCESS",
        busy:false,
        data
    }
}
export const createPostError = (error) => {
    return {
         type:'CREATE_POST_FAILED',
         error
     }
 }
 export const retrivePostError = (error) => {
     return {
          type:'RETRIVE_POST_FAILED',
          error
      }
 }

export const createPost = (post) => {
 
    const title = post.txtTitle;
    const content = post.txtContent;
    return (dispatch) => {
        return Axios.post(url,{title,content, status:'publish'},{ auth: {
            username:'username',
            password:'password'
                 }})
                    .then(response => {
                        console.log(response);
                        dispatch(createPostSuccess(response.data))
                    }).catch( error => {
                        console.log(error.response);
                        dispatch(createPostError(error))
                    });
    }
};

export const retrivePost = () => {
   
    return (dispatch) =>  {
        dispatch(fetchingPost);
        return Axios.get(url)
                    .then(response =>  {
                        dispatch(retrivePostSuccess(response.data))
                    })
                    .catch(err => {
                        dispatch(retrivePostError(err))
                    })
    }
}
