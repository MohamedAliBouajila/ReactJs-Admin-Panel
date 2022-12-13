import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = ({type}) => {

    const rows = [
        {
            id:1568,
            product:"Acer nitro 5",
            img: "https://images.unsplash.com/photo-1662409750939-92e0c0b3bd26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            customer:"dali",
            date:"1 March",
            amount:785,
            method:"Cash on Delivery",
            status:"Approved"
        },
        {
            id:15568,
            product:"Acer",
            img: "https://images.unsplash.com/photo-1662409750939-92e0c0b3bd26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            customer:"Dojj",
            date:"1 March",
            amount:785,
            method:"Cash on Delivery",
            status:"Pending"
        },
        {
            id:88558,
            product:"nitro",
            img: "https://images.unsplash.com/photo-1662409750939-92e0c0b3bd26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            customer:"Bae",
            date:"1 March",
            amount:785,
            method:"Cash on Delivery",
            status:"Approved"
        },
    ]



  return (
          <TableContainer component={Paper} className='table'>
      <Table aria-label="simple table" className='tabContent'>
        <TableHead>
          <TableRow className='tableHeadItems'>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            {type ? " " : <TableCell className='tableCell'>Customer</TableCell>}
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow  key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="prodavatar" className='image'/>
                    {row.product}
                </div>
              </TableCell>
              {type ? " " : <TableCell className='tableCell'>{row.customer}</TableCell>}
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                 <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List