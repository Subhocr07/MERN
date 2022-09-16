import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const BlogSetup = () => {
  const navigate=useNavigate()
  const [inputValue, setInputValue] = useState({ 
  name: "",
  email: "",
  password:"",
  blog_title: "",
//   file: "",
  description: "",
});
  // const [data,setData] = useState([]);

  const handleOnChange = (e) => {
   let name=e.target.name;
   let value=e.target.value;
   setInputValue({...inputValue,[name]:value});
  };
  const handleOnClick=(e)=>{
    e.preventDefault();
    // let newData={...inputValue,id:new Date().getTime().toString()};
    // setData([...data,newData])
    axios({
      method:"POST",
      url: 'http://localhost:7070/blogsetup',
      data:inputValue
    }).then((blogData)=>{
      console.log(blogData.data)
      navigate("/login")
    }).catch((error)=>{
      window.alert(error.response.data)
    })
  }

  return (
    <>
      <div className="blogSetup-container">
        <div className="blogSetup_child-container">
          <form>
            <div className="inputbox">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={inputValue.name}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="inputbox">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={inputValue.email}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="inputbox">
              <input
                name="password"
                type="Password"
                placeholder="Password"
                value={inputValue.password}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="inputbox">
              <input
                name="blog_title"
                type="text"
                placeholder="Blog Title"
                value={inputValue.blog_title}
                onChange={handleOnChange}
                required
              />
            </div>
            {/* <div className="inputbox">
              <input
                name="image"
                type="file"
                value={inputValue.image}
                onChange={handleOnChange}
              />
            </div> */}
            <div className="inputbox">
              <textarea 
                name="description"
                type="description"
                placeholder="Blog description"
                value={inputValue.description}
                onChange={handleOnChange}
                
              />
            </div>
            <button onClick={handleOnClick}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogSetup;
