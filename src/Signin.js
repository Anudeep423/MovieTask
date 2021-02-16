import React,{useState} from 'react'
import {Link} from "react-router-dom";

const Signin = ({history})  => {

    const [values,SetValues] = useState({Name : "" , Password : ""})

    const { Name , Password } = values

   const {name,password} =  ( localStorage.getItem("jwt") ?  JSON.parse(localStorage.getItem("jwt")  )  : "")
    
   console.log(typeof(name))
   

    const onSubmit = (e) => {

     e.preventDefault();
        
        if(Name === name && Password === password && Name === Password ){
            history.push("/home")
        }else{
            alert("Invalid Credentials")
        }
    }

    const onChange = (e) => {
        SetValues({...values, [e.target.name] : e.target.value })
    }
    return (
        <div>
            <h1>Signin page</h1>
           <span> Name :</span> <br></br> <input placeholder = "Name"  name = "Name" onChange = {onChange} value = {Name}/>
           <br></br>
           <span> Password :</span> <br></br> <input placeholder = "Password"  onChange = {onChange} name = "Password" value = {Password}/>
           <br></br>
           <button onClick = {onSubmit}>Signin</button>
            <p>Not registered Yet ?  <span >  <Link  to = "/"><button  >Signup</button> </Link>   </span>   </p>
                {JSON.stringify(values)}
        </div>
    )
}

export default Signin
