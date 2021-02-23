'use strict'; 

import Comments from './Comments.json';
import Post from './Post';


const Blog = () => {

    return(
        <>
            {Comments.map((post) => (
                // <p>{post.name}</p>
                <Post key={post.id} name={post.name} mail={post.email}/>
            )) }
        </>
    ); 


}

export default Blog; 