    export const userColumns = [
        {field: 'id',headerName: 'ID',type: 'number',width: 70,},
        {
          field: 'user',
          headerName: 'User',
          width: 250,
          renderCell:(params)=>{
            return (
               <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
               </div>
            )
          },
        },
        {field: 'email',headerName: 'E-mail',width: 250},
        {field: 'age',headerName: 'Age',width: 100},
        {field: 'status',headerName: 'Status',width: 150,
        renderCell:(params)=>{
            return (
               <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
               </div>
            )
          },
        }
    ]
    export const userRows = [
        {
            id:1,
            img: "https://images.unsplash.com/photo-1662409750939-92e0c0b3bd26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            username:"dali",
            email:"1test@test.com",
            age:18,
            status:"Active"
        },
        {
            id:2,
            img: "https://images.unsplash.com/photo-1662409750939-92e0c0b3bd26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            username:"medali",
            email:"2test@test.com",
            age:25,
            status:"Pending"
        },
        {
            id:3,
            img: "https://images.unsplash.com/photo-1662409750939-92e0c0b3bd26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            username:"dali1",
            email:"3test@test.com",
            age:35,
            status:"Passive"
        },
    ]

