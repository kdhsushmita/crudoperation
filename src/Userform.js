import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';

export default function Userform({editPost}) {
  const url="https://jsonplaceholder.typicode.com/posts"
  const [title,setTitle]=useState(" ");
  const [body,setBody]=useState(" ");
  const [userid,setUserid]=useState("");

  // console.log("here=??",editPost);

   const handleonSubmit=(event)=>{
    event.preventDefault();
    if(editPost.id){
      axios.patch(`${url}/${editPost.id}`,{
        title :editPost.title,
        body :editPost.body,
        userid:editPost.userid
        }).then(()=>{
        /*console.log({title,body,userid});*/
        toast.success("successfully edited")}).catch(()=>toast.error("failed to update"))
    }else{
      axios.post(url,{  
        title,body,userid
      }).then(()=>{
        /*console.log({title,body,userid});*/
        toast.success("successfully added")}).catch((err)=>console.log(err));
    }
      console.log({title,body,userid});
    }

    // useEffect(()=>{
    //   axios.get(`${url}/${props.editid}`).then((res)=> {
    //     setTitle(res.data.title)
    //     setBody(res.data.body)
    //     setUserid(res.data.userId)
    //   });
    // },[props.editid])
        useEffect(()=>{
          if(editPost.id){
            setTitle(editPost.title)
            setBody(editPost.body)
            setUserid(editPost.id)
          }
          },[editPost])
    
  return (
    <>
      <form className="form-div" /*onSubmit={handleonSubmit}*/>
      <h1 style={{textAlign:"center"}}>Register Now!!!</h1> <br />
        <div className="d1">
          <label htmlFor="title" style={{marginTop:"10px"}}> Title : </label>
          <input
            className="i1"
            name="title"
            id="title"
            value={title}
            type="text"
            placeholder="Enter your title here."
            onChange={(event)=>setTitle(event.target.value)}
          />
        </div>
        <br /> <br />
        <div className="d1">
          <label htmlFor="body" style={{marginTop:"10px"}}> Body : </label>
          <textarea
            className="i1"
            name="body"
            id="body"
            value={body}
            cols=""
            rows="15"
            placeholder="Enter your body here."
            onChange={(event)=>setBody(event.target.value)}
          ></textarea>
        </div>
        <br /> <br />
        <div className="d1">
          <label htmlFor="user" style={{marginTop:"10px"}}> UserId : </label>
          <input
            className="i1"
            type="number"
            value={userid}
            name="id"
            id="userid"
            placeholder="Enter your User-Id here."
            onChange={(event)=>setUserid(event.target.value)}
          />
          <br />
        </div>
        <div className="formbutton">
        {/* <button className="b1">Submit</button> */}
        <button className="b1" onClick={handleonSubmit}>{editPost?.id?"Edit":"Create"}</button>
        </div>
        
      </form>
    </>
  );
}







//npm install axios



//slicing
//search
//ascending
//descending


//2 array merge -- union