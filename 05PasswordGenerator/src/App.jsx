import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [noAllow, setNoAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (noAllow) string += '0123456789';
    if (charAllow) string += '!@#$%^&*(){}[]_+';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length);
      pass += string.charAt(char);
    }setPassword(pass);
  },[length, noAllow, charAllow]);

  const copyPasswordToGenerator = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, noAllow, charAllow, passwordGenerator]);

  const handleCopyClick = () => {
    if (passwordRef.current) {
      passwordRef.current?.select();
      document.execCommand('copy');
    }
  };

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-pink-600'>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-5'>
        <input
          type='text'
          ref={passwordRef}
          value={password}
          className='outline-none w-full py-1 px-3 text-black' 
          placeholder='Password'
          readOnly
        />
        <button className='outline-none bg-green-400 text-white px-3 py-0.6' onClick={handleCopyClick}>
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-3'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            checked={noAllow}
            id='numberInput'
            onChange={() => {
              setNoAllow((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            checked={charAllow}
            id='characterInput'
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
