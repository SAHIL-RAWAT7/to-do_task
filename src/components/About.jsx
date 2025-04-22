import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          About Task Manager
        </h1>
        <p className="text-center text-gray-600">
          This is a simple Task Manager built using React. It allows you to
          add, delete, and manage your tasks efficiently.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
