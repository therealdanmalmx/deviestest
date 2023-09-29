import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const storeInput = () => {
    try {
      localStorage.setItem('myInput', inputValue);
        window.location.href = '/';
      console.log(`Stored myInput with value ${inputValue} in local storage.`);
    } catch (error) {
      console.error('Could not store the input in local storage.', error);
    }
  };

  return (
<div className='flex flex-col justify-center items-center h-screen '>
    <div className='mx-auto my-auto w-1/2 border p-4'>
        <h2 className='text-lg font-semibold mb-4 text-center'>Get token by registering a user (/auth/register) in swagger. Copy the accessToken and put it here. </h2>
        <input className="p-2 border w-full mb-4" type="text" id="inputField" value={inputValue} onChange={handleChange} />
        <div className='text-center'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={storeInput}>Store Token</button>
        </div>
    </div>
</div>

  );
}

export default App;
