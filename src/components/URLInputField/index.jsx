import React from 'react';

const URLInputField = ({ register }) => {
  return (
    <div className='text-left w-full'>
    <p className=' my-2 '>Address</p>
    <input
      {...register("url", { required: "URL is required" })}
      className="border border-gray-300 p-2 w-full rounded"
      placeholder="Enter URL"
    />
    </div>
  );
};

export default URLInputField;