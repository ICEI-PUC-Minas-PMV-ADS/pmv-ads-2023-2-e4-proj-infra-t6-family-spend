import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (configObj) =>{
  const {
    axiosInstance,
    method,
    url,
    data = { }
  } = configObj;
  
  const [response, setResponse] =  useState([]);
  const [error, setError] =  useState('');
  const [loading, setLoading] =  useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try{
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...data,
          signal: controller.signal
        });
        console.log(res);
        setResponse(res.data);
      } catch(err){
        console.log(err.message);
        setError(err.message);
      } finally{
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  },[])

  return [response, error, loading];

 }

 export default useAxios