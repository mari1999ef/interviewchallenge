// BlogList.js
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Drawer from '../Drawer';

function BlogList() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const blogData = Array(10).fill({
    language: 'English',
    name: 'How To Sell New Product?',
    category: 'Technology + 2',
    tags: 'Technology',
    createTime: '2024,01,01',
    updateTime: '2024,01,01',
  });

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search Blog..."
            className="px-10 py-2 border border-gray-300 rounded-md w-full text-sm text-gray-500 placeholder-gray-400"
          />
          <FiSearch className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
        
        <table className="w-full text-left text-xs text-gray-500">
          <thead>
            <tr className="border-b border-gray-200 text-gray-400">
              <th className="p-4">#</th>
              <th className="p-4">Thumbnail</th>
              <th className="p-4">Language</th>
              <th className="p-4">Name</th>
              <th className="p-4">Categories</th>
              <th className="p-4">Tags</th>
              <th className="p-4">Create Time</th>
              <th className="p-4">Update Time</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogData.map((blog, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 text-center text-gray-400 font-medium">{String(index + 1).padStart(2, '0')}</td>
                <td className="p-4">
                  <div className="w-10 h-10 bg-gray-200 rounded"></div>
                </td>
                <td className="p-4 text-gray-500">{blog.language}</td>
                <td className="p-4 text-gray-500">{blog.name}</td>
                <td className="p-4 text-gray-500">{blog.category}</td>
                <td className="p-4 text-gray-500">{blog.tags}</td>
                <td className="p-4 text-gray-400">{blog.createTime}</td>
                <td className="p-4 text-gray-400">{blog.updateTime}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="px-3 text-lg  py-1 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none"
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-400 mt-4">10 of 100 row(s).</p>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}

export default BlogList;
