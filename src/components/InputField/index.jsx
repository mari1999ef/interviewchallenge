import React from 'react';

function InputField({ label }) {
  return (
    <div>
      <label className="block text-gray-600">{label}</label>
      <input type="text" className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
    </div>
  );
}

export default InputField;
