import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiTask } from "react-icons/bi";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return toast.warning("Please enter a task!");
    const newTask = { id: Date.now(), title: input };
    setTasks([...tasks, newTask]);
    setInput("");
    toast.success("Task added!");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.info("Task deleted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6 flex items-center justify-center gap-2">
          <BiTask className="text-4xl" />
          Task Manager
        </h1>

        <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter your task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Add
          </button>
        </form>

        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks yet. Add one!</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center bg-green-50 border border-green-200 px-4 py-3 rounded-xl shadow-sm transition hover:shadow-md"
              >
                <span className="text-green-900 font-medium text-base sm:text-lg">
                  {task.title}
                </span>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-600 hover:text-red-800 text-2xl font-bold"
                >
                  –
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default HomePage;
