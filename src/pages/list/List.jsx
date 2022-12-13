import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/NavBar"
import Datatable from "../../components/datatable/Datatable"

const List = ({type}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
      <Navbar/>

      <Datatable type={type}/>
        
      </div>
    </div>
  )
}

export default List