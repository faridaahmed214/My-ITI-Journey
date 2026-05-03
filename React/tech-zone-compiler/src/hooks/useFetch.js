import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to load data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, setData, isLoading, error };
};

export default useFetch;
