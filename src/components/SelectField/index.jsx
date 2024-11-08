import React from 'react';

function SelectField({ label, options }) {
  return (
    <div className='w-full text-gray-600'>
      <label className="block text-gray-600">{label}</label>
      <select className="mt-1 w-full border bg-white border-gray-300 rounded-md p-2 px-3 focus:ring-gray-500 focus:border-gray-500">
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;