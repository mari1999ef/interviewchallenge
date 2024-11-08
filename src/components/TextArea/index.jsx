import React from 'react';

function TextArea({ label, rows }) {
  return (
    <div>
      <label className="block text-gray-600">{label}</label>
      <textarea className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" rows={rows} />
    </div>
  );
}

export default TextArea;