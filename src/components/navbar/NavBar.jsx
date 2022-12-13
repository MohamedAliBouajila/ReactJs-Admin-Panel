import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import ChatBubbleOutlinedOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import ListOutlinedIcon from "@mui/icons-material/ListOutlined"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {useContext ,useState} from 'react'
import { DarkModeContext } from '../../context/darkModeContext'

const NavBar = () => {

  const {dispatch} = useContext(DarkModeContext)

  const [toggle,setToggle] = useState(false);


  return (
    <div className="navbar">
      <div className="wrapper"> 
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchOutlinedIcon/>
      </div>
<div className="items">
  <div className="item">
    <LanguageOutlinedIcon className="icon"/>
    English
  </div>
  <div className="item">
    <div className="icon" 
    onClick={
      ()=>{
          dispatch({type:"TOGGLE"});
          setToggle(!toggle);
          }
      }>
        {toggle ? <DarkModeOutlinedIcon/> : <WbSunnyIcon/>}
    </div>
  </div>
  <div className="item">
    <FullscreenOutlinedIcon className="icon"/>
  </div>
  <div className="item">
    <NotificationsNoneOutlinedIcon className="icon"/>
    <div className="counter">2</div>
  </div>
  <div className="item">
    <ChatBubbleOutlinedOutlinedIcon className="icon"/>
    <div className="counter">1</div>
  </div>
  <div className="item">
    <ListOutlinedIcon className="icon"/>
  </div>
  <div className="item">
    <img src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
    alt="avatar" 
    className="avatar" />
  </div>
  

</div>
      </div>
    </div>
  )
}

export default NavBar