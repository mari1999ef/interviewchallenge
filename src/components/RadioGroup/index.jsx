
import React from 'react';

function RadioGroup({ label, options }) {
  return (
    <div className="flex flex-col items-left space-x-4 mt-4 gap-y-2 text-gray-600">
      <span className="text-gray-600">{label}</span>
      <div className='flex gap-x-5 ml-0 '>
      {options.map((option, index) => (
        <label key={index} className="inline-flex items-center text-left text-gray-600">
          <input type="radio" name={label} className="form-radio h-4 w-4 " />
          <span className="ml-2">{option}</span>
        </label>
      ))}
      </div>
    </div>
  );
}

export default RadioGroup;