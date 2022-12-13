import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import {Link} from 'react-router-dom'

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="link">
        <span className="logo">M3D4LI Panel</span>
        </Link>
      </div>
  
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" className="link">
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashborad</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" className="link">
          <li>
            <PersonOutlineIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" className="link">
          <li>
            <StoreIcon className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <CreditCardIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartIcon className="icon"/>
            <span>System health</span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar