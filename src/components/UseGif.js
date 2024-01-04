import  { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = 'sMT4PuserCyl1iDggf8KvKs0SWg7yfL8';

export default function UseGif(tag) {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    try {
      setLoading(true);
      const url = tag
        ? `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`
        : `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;

      const { data } = await axios.get(url);

      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.log('Error during fetching data', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(tag);
  }, [tag]);

  return {
    gif,
    loading,
    fetchData,
  };
}
