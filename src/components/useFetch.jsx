import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    const getUser = async() => {
      try{
        const response = await fetch(url);
        console.log(response);
        if(!response.ok){
          throw new Error("It seems their is an error!!!")
        }  
        const result = await response.json();
        setUsers(result);
        setLoading(false);
      }catch(e){
        console.log(e.message);
        setError(true);
        setLoading(false);
      }
      
      // fetch(url)
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //     setUsers(data)
      //   })
    }
    useEffect(() => {
      getUser();
    }, [url])

    return {users, loading, error, getUser}
  
}

export default useFetch