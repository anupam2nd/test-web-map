// src/pages/Dashboard.jsx
import React from 'react';
import Card from '../component/Card';
import { FaUsers, FaChartLine, FaShoppingCart, FaMoneyBillWave } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card 
          title="Total Users" 
          value="1,234" 
          icon={<FaUsers className="text-blue-500" />} 
        />
        <Card 
          title="Revenue" 
          value="$34,567" 
          icon={<FaMoneyBillWave className="text-green-500" />} 
        />
        <Card 
          title="Sales" 
          value="789" 
          icon={<FaShoppingCart className="text-orange-500" />} 
        />
        <Card 
          title="Growth" 
          value="12.5%" 
          icon={<FaChartLine className="text-purple-500" />} 
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="border-b pb-2">
            <p className="font-medium">New user registered</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="border-b pb-2">
            <p className="font-medium">System update completed</p>
            <p className="text-sm text-gray-500">5 hours ago</p>
          </div>
          <div>
            <p className="font-medium">New order received</p>
            <p className="text-sm text-gray-500">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}