import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import  toast, { Toaster }  from 'react-hot-toast';
import Userform from './Userform';

const baseUrl="https://jsonplaceholder.typicode.com/posts";

function App() {
  const[post,setPost]=useState([]);

  const [editPost,setEditPost]=useState({});

  const deletePost=(id)=>{
    axios.delete(`${baseUrl}/${id}`).then(()=>toast.success("successfully deleted")).catch(()=>toast.error("failed to delete"))
  }
  
  useEffect(()=>{
    axios.get(baseUrl)
    .then((res)=>{setPost(res.data);
      toast.success("successfully fetched api")
    }).catch(
      (err)=>console.log(err)
    )
  },[])
  
  // console.log(post,"this is post")
  return (
  <div>
    <div className="container">
    <h2 className="h1">Id Title</h2>
    {post?.filter(post=>post.id<6).map((post)=> {
      return (
        <div key={post.id} className='box'>
          <div  className='para'> 
            <p>{post.id} {post.title} </p>
          </div>
          <div className='btn'> 
             <button onClick={()=>deletePost(post.id)}>DELETE</button>
             <button onClick={()=>setEditPost(post)}>EDIT</button>   
          </div>
        </div>  
      )
    })}
    </div>
      <Toaster/>
      <div className='containForm'>
        <Userform editPost={editPost}/>
      </div>  
  
  </div>  
  
  );
}

export default App;
//put-changes whole object patch-replaces pathako matra - update
