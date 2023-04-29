import React, { useState } from "react";
// import axios from "axios";

export default function Userform() {
  //using usestate with array & objects
  //making one state and adding all data here
  
  // const url="https://jsonplaceholder.typicode.com/posts"

  //USESTATE
  // const [formInfo, setFormInfo] = useState({
  //   //initial data for formInfo
  //   //saving as object
  //   title: "",
  //   body: "",
  //   userid: ""
  //   //setFormInfo - to update
  // });

  const [title,setTitle]=useState(" ");
  const [body,setBody]=useState(" ");
  const [userid,setUserid]=useState(" ");

  //let nam,value;
  //on typing title,body,id
  // const handleoninputchange = (event)=>{
  //   //  console.log(event);
  //   // console.log("Handle on change");
  
  //    nam = event.target.name;  //like title,body,userid
  //    value = event.target.value;  //title,body ani userid ko info
  //   setFormInfo({...formInfo, [nam]:value});
    
  // } 

  //on submit button click
   const handleonSubmit=(event)=>{
      //submit garda reload nahune
      event.preventDefault();
      console.log({title,body,userid});
      
      /*
      //forminfo ko sabai data leko
    const newinfo={...formInfo}
    //name ra value store
     //square brac for dynamic data

     //for eg - for title = hello world
    // newinfo[event.target.id] = event.target.value 
    setFormInfo(newinfo)
    console.log(newinfo);
      /*
      axios.post(url,{
        title: formInfo.title,
        body: formInfo.body,
        userid: parseInt(formInfo.userid) 
      })
      .then(res=>{
        console.log(res.formInfo)
      })*/

    }

  return (

    <>
      <form className="form-div" onSubmit={handleonSubmit}>
      <h1>Register Now!!!</h1> <br />
        <div className="d1">
          <label htmlFor="title" style={{marginTop:"10px"}}> Title : </label>
          <input
            className="i1"
            name="title"
            id="title"
            type="text"
            placeholder="Enter your title here."
            //title ko value
            // value={formInfo.title}  //id ko title //name ra id same cha
              onChange={(event)=>setTitle(event.target.value)}
            // onChange={handleoninputchange}
          />
        </div>
        <br /> <br />
        <div className="d1">
          <label htmlFor="body" style={{marginTop:"10px"}}> Body : </label>
          <textarea
            className="i1"
            name="body"
            id="body"
            cols=""
            rows="15"
            placeholder="Enter your body here."
            // value={formInfo.body}
            // onChange={handleoninputchange}
            onChange={(event)=>setBody(event.target.value)}
          ></textarea>
        </div>
        <br /> <br />
        <div className="d1">
          <label htmlFor="user" style={{marginTop:"10px"}}> UserId : </label>
          <input
            className="i1"
            type="number"
            name="userid"
            id="userid"
            placeholder="Enter your User-Id here."
            // value={formInfo.userid}
            // onChange={handleoninputchange}
            onChange={(event)=>setUserid(event.target.value)}
          />
          <br />
        </div>

        <button className="btn btn-primary mx-2">Submit Now</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button> */}
      </form>
    </>
  );
}







//npm install axios