import React, { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchdata = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      const result = await response.json();

      setData(result);
      setLoading(false);
      setError(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
