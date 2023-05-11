import React, { useEffect, useState } from "react";
import { getusersInfo } from "../Redux/apicall";
import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';


const Alluser = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);

 

  useEffect(()=>{
    setState(data)
getusersInfo(dispatch)
  },[])
 
  const data = useSelector((state) =>state.usersfullinfo.fullInfo[0]);
  console.log('data?',data);


  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>User Name</th>
          <th>Email</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
      {state.map((li) => (
        <>
        <tr>
          <td>{li.username}</td>
          <td>{li.email}</td>
          <td>{li.createdAt}</td>
        </tr>
        </>
      ))}
      </tbody>
    </Table>

     
    </div>
  );
};

export default Alluser;
