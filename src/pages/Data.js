import {React ,useEffect, useState} from 'react'
const [data, setdata] = useState([])
const  fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();

      setdata(data);
      console.log(data);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data)

  export default fetchData