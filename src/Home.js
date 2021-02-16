import React,{useState,useEffect} from 'react'
import {Link,Redirect} from "react-router-dom"
import {addPrescription} from "./Api"
import Movie from "./movie"


function Home({history}) {

    

   
  
    const [isLoggedIn,setisLoggedIn] = useState(true);
    const [viewCompanyInfo,setViewCompanyInfo] = useState(false);
    const [Data,setData] = useState([])

    const data = {
        category: "movies",
        language: "kannada",
         genre: "all",
         sort: "voting"
    }

    useEffect( () => {
        addPrescription(data).
        then(res => {setData(res.result)
            console.log(res)
            } ).
        catch(err => {console.log(err)})
    } , []  )
 
    return (
        <div>
            
            <h1>Home Page</h1>
            <button onClick={ () =>  {
                localStorage.removeItem("jwt")
                setisLoggedIn(false)
                }} >Signout</button>
                <br></br>
                <button  onClick = { () => {setViewCompanyInfo(true)}  }  >Company Info</button>
                  { viewCompanyInfo ?  <span> <p> Company: Geeksynergy Technologies Pvt Ltd </p>
                  <p> Address: Sanjayanagar, Bengaluru-56 </p>
                 <p>  Phone:XXXXXXXXX09 </p>
              <p> Email: XXXXXX@gmail.com </p> </span> : ""} 
              <br></br>
              <br></br> 
              <br></br> 
              <br></br>  
              { Data.map( (data,i) => {
                  <br></br>
                 
                 return <Movie image = {data.poster} date = {data.releasedDate} language = {data.language}
                   stars = {data.stars[0] } views = {data.pageViews} 
                    title = {data.title} voted =  {data.voted.length} director = {data.director[0]}  genre = {data.genre}/>
                  
              } ) }
           
              <br></br>
              <Movie />
                {!isLoggedIn  ? history.push("/signin") : "" }
              
            
        </div>
    )
}

export default Home
