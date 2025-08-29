import React from 'react';
export default function Card({ title, value, icon, color }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${color}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className="text-3xl">
          {icon}
        </div>
      </div>
    </div>
  );
}