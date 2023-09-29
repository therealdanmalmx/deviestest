// BookProvider component
import React, { useEffect, useState } from 'react';
import { BookContext } from './Contexts'; // adjust the path if needed
import { deviesFetch } from '@/api/axios';

const BookProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await deviesFetch.get('/is-logged-in', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('myInput')}`
            }
        });
        if (response.data === 'Yes') {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Checking login status:", error);
      }
    };
    checkLogin();
  }, []);

  return (
    <BookContext.Provider value={{ isLoggedIn }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
