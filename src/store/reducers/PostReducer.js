const PostReducer = (state = [], action)=>{
    let newState = state ;
    switch (action.type){
        case "ADD_POST":
             return newState.concat([action.data]);
        case "DELETE_POST":
                return newState.filter((post) => post.id !== action.id);
        case "EDIT_POST":
                return newState.map((post) => post.id === action.id ? {...post, editing: !post.editing } : post);
        case "UPDATE_POST":
                return newState.map((post) => 
                {
                if(post.id === action.id ) {
                return {
                    ...post,
                    title:action.data.newTitle,
                    message:action.data.newMessage,
                    editing: !post.editing 
                } 
            }   else return post
                }
                );
           
                default :
        return newState;
    }
}

export default PostReducer;