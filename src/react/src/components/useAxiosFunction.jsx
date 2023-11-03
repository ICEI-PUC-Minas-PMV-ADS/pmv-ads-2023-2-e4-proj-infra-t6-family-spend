import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const axiosFetch = async (configObj) => {
    const {
      axiosInstance,
      method,
      url,
      requestConfig = {}
    } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        //signal: ctrl.signal
      });
      console.log(res);
      setResponse(res.data);
    } catch (err) {
      console.log(err.response);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(controller);
    return () => controller && controller.abort();
  }, [controller])

  return [response, error, loading, axiosFetch];

}

export default useAxiosFunction