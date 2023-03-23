import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history =  useNavigate();

  const header = {"Allow-Control-Allow-Origin":"*"};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first");
    axios.post('https://641c9d79b556e431a872fe60.mockapi.io/crud-practice',{
      name: name, email:email,
      header}).then(()=>{
        history("/read");
      })
  };
  return <>
    <form>
      <h2>Create </h2>
      {name}
      {email}
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
  </>
}

export default Create