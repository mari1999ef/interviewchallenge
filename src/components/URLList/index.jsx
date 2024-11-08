import React from 'react';

const URLList = ({ urls, removeURL }) => {
  return (
    <ul className=' px-4 '>
      {urls.map((url, index) => (
        <li key={index} className="flex justify-between my-4 items-center border rounded py-1 px-2">
          <span>{url}</span>
          <button onClick={() => removeURL(index)} className="text-black text-3xl pl-4">−</button>
        </li>
      ))}
    </ul>
  );
};

export default URLList;