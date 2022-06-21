
import { useState, useEffect } from "react";
const axios = require("axios");
import { Auth0Provider } from "@auth0/auth0-react";
import Hidden from '../src/components/common/Hidden'

const api = axios.create({
  baseURL: process.env.api,
});








const Test = () => {

    const [data, setData] = useState([])

    const getData =  () => {
        try {
           api
            .get("/api/linck/linckblades")
            .then(function (response) {
              setData(response.data.data);
            }).then(function () {
                console.log('After getting data');;
              })
            .catch(function (error) {
             console.log('Something went wrong');
              console.log(error);
            })
            .then(function () {
              // always executed
              console.log('always executed!');
            });
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
     getData()
    }, [])

    console.log(data);

  return (
    <>
      <div className="container">

        <Hidden size='medium-down'>        
        <h1 className="header">Kniver og motstål</h1>
        </Hidden>
        <Hidden size='small-down'>

        {data.map(item => item.serial)}
        </Hidden>
     
      </div>

 
      <style jsx>
        {`
        
        `}
      </style>
    </>
  );
};

export default Test;
