import React,{useState} from 'react'
import {Link} from "react-router-dom"

function Signup({history}) {

    const[values,setValues] = useState({name : "", password : "" , email : "" , phone : "" , profession : "" });

    const {name,password,email,phone,profession} = values


    const onChange = (e) => {
        setValues({...values,[e.target.name] : e.target.value })

    }

    const onSubmit = (e) => {
            e.preventDefault();
            if(name && password && email && phone && profession){
                localStorage.setItem("jwt", JSON.stringify(values))
               history.push("/signin");

            }else{
                alert("Enter all fields");
            }
            
    }
    return (
        <div>
            <h1> Sign up page</h1>
            <label   >Name : </label>
            <br></br>
            <input placeholder= "Name" name = "name" value = {name} onChange= {onChange}/>
            <br></br>
            <label   >Password : </label>
            <br></br>
            <input type = "password" placeholder= "Password" name = "password" value = {password} onChange= {onChange}/>
            <br></br>
            <label   >Email : </label>
            <br></br>
            <input placeholder= "Email"  name  = "email" value = {email} onChange= {onChange} />
            <br></br>
            <label   >Phone No:  </label>
            <br></br>
            <input placeholder= "Phone No" name = "phone" value = {phone} onChange= {onChange}/>
            <br></br>
         <span>Choose Profession : </span>
            <br></br>
<select name="profession" id="cars"  onChange = {onChange}>
<option >Select</option>
  <option name = "Developer" value="Developer">Developer</option>
  <option name = "student" value="Student">Student</option>
  <option  name = "others" value="Others">Otherss</option>
</select>
<br></br>
            <button onClick = {onSubmit} > Submit</button>
            <br></br>
            <span>Already a user ?   <Link  to = "/signin"> <button>Signin</button> </Link></span>

                <br></br>
            
            {JSON.stringify(values)}            
        </div>
    )
}

export default Signup
