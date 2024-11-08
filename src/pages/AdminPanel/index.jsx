// AdminPanel.js
import React from 'react';
import Sidebar from '../../components/Sidebar';
import BlogList from '../../components/BlogList';
import Navbar from '../../components/Navbar';


function AdminPanel() {
  return (<>
    <Navbar /> 
    <div className="flex min-h-screen bg-white">
     
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 text-left text-gray-500">
        <h1 className="text-2xl font-semibold mb-4">Blog List</h1>
        <BlogList />
      </div>
    </div>
    </>
  );
}

export default AdminPanel;
