import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/NavBar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"
const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
              src="https://images.unsplash.com/photo-1662409750939-92e0c0b3bd26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" 
              alt="avatar" className="itemImg"/>
              <div className="details">
                 <h1 className="itemTitle">Med Ali</h1>
                 <div className="detailItem">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">medalibouajila00@gmail.com</div>
                 </div>
                 <div className="detailItem">
                  <div className="itemKey">Phone:</div>
                  <div className="itemValue">+216 56 502 674</div>
                 </div>
                 <div className="detailItem">
                  <div className="itemKey">Address:</div>
                  <div className="itemValue">Nagga, SoukLahad, Kebili</div>
                 </div>
                 <div className="detailItem">
                  <div className="itemKey">Country:</div>
                  <div className="itemValue">Tunisia</div>
                 </div>
              </div>
            </div>

          </div>
          <div className="right">
            <Chart aspect={3/1} title="Last Spending 6 Months"/>
          </div>
        </div>
          <div className="bottom">
            <h1 className="title">Last Transaction</h1>
              <List type="single"/>
            </div>
          </div>
    </div>
  )
}

export default Single