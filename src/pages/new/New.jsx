import "./new.scss"

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/NavBar"
import DriverFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import { useState } from "react"


const New = ({inputs,title}) => {

  const[file,setFile] = useState("");
  const[style,setStyle] = useState("");
  
  
  const changeStyle = ()=>{
    setStyle("uploadDone")
  }
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6K3Kv2FHT_uZSO62uKzSOSYZ4b1zxw6n_dOkNAL-&s" }
            alt="addimage" 
            />
          </div>
          <div className="right">
            <form action="">
                         <div className="inputsFilds"> 

              {
              inputs.map((element)=>{
                return(
                <div>
                {
                element.map((item)=> (
                  <div className="fromInput" key={item.id}>
                      <label>{item.label}</label>
                      <input type={item.type} placeholder={item.placeholder}/>
                  </div>
                ))
               }
                </div>
                )

              })
              
              
              }



          </div>
              <div className="fromInput">
              <label htmlFor="image" className="uploadLabel"> 
                Upload your Image :
                <DriverFolderUploadOutlinedIcon className={style}/> 
              </label>
              <input type="file"  onChange={e=>{setFile(e.target.files[0]); changeStyle()}}
                 name="image" id="image" style={{display:"none"}}/>
              </div>

              <button className="send">Send</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default New