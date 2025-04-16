import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Hello = () => {
    const [message, setMessage] = useState<string>('')

    useEffect(() => {
        const fetchMessage = async () => {
          try {
            const response = await axios.get<{ message: string }>('http://localhost:5000/api/hello');
            setMessage(response.data.message);
          } catch (error) {
            console.error('Error fetching message:', error);
          }
        };
    
        fetchMessage();
      }, []);

  return (
    <div>
        <h2>My message:</h2>
        <h3>{message}</h3>
    </div>
  )
}

export default Hello