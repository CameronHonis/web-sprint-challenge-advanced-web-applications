import React,{ useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialFormData = {
  username: '',
  password: '',
}
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory()

  const [formData, setFormData] = useState(initialFormData)

  const submitForm = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', formData)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        history.push('/bubbles')
      })
    setFormData(initialFormData)
  }

  return (
    <form>
      <input
        name='username'
        type='text'
        placeholder='username'
        value={formData.username}
        onChange={e => setFormData({...formData, username: e.target.value})}
      />
      <input
        name='password'
        type='password'
        placeholder='password'
        value={formData.password}
        onChange={e => setFormData({...formData, password: e.target.value})}
      />
      <button onClick={submitForm}>Submit</button>
    </form>
  );
};

export default Login;
