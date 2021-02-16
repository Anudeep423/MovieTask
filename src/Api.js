
export const addPrescription = (data) => {
   return fetch("https://hoblist.com/movieList" , {
    method : "POST",
      headers : {
        Accept : "application/json",
        "Content-Type" : "application/json",
         
      },body : JSON.stringify(data),
     
    }).then(res => res.json() ).catch(err => {console.log(err.message)})
}