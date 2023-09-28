import React, { useEffect, useState } from 'react';
import {BookContext} from './Contexts'; // adjust the import to your file structure
import { deviesFetch } from '@/api/axios'; // adjust the import as needed

const BookProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const checkLogin = async () => {
            try {
                const response = await deviesFetch.get('/is-logged-in');
                const data = await response.data;
                console.log('data', data);
                if (response.data) {
                    console.log('response.data', response.data);
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error("Checking login status:", error);
            }
        }
        checkLogin();
    }, []);


    return (
        <BookContext.Provider value={{ isLoggedIn }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
