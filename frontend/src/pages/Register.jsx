import {useState,useEffect} from 'react'
import {FaUser} from "react-icons/fa"

function Register() {
const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    password2:'',
})
const {name,email,password,password2}=formData

  return (
    <div>
        <section className="heading">
            <h2>
                <FaUser/> Register
            </h2>
            <p>Please create an account</p>
        </section>
       <section className="form">   
        <form>
            <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Enter your name" />
        </form>
       </section>
    </div>
  )
}

export default Register