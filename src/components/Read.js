import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {

  const [data, setData] = useState([])
  function getData() {
    axios.get('https://641c9d79b556e431a872fe60.mockapi.io/crud-practice').then((response) => {
      console.log(response.data);
      setData(response.data);
    })
  }

  function handleDelete(id){
    axios.delete(`https://641c9d79b556e431a872fe60.mockapi.io/crud-practice/${id}`).then((response) => {
      getData();
  })
}

const handleUpdate = ({
  // localStorage
})
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h2> Read Operation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"> </th>
            <th scope="col"> </th>

          </tr>
        </thead>
        {
          data.map((eachData) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button className='btn btn-info' onClick={()=> handleUpdate(eachData.id)}>Edit</button>
                    </Link>
                    </td>
                  <td><button className='btn btn-danger' onClick={()=> handleDelete(eachData.id)}>Delete</button></td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
    </div>
  )
}

export default Read