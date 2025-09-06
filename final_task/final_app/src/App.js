import React, { useState } from 'react';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import HorizontalScroll from './Pages/HorizontalScroll';
import Speakers from './Pages/Speak';
import Letters from './Pages/Letters';
import Fourth from './Pages/Fourth';
import Marquee from './Pages/Marquee';
import Third from './Pages/Third';
import Project from './Pages/Project';
import HurdlesSection from './Pages/AboutPage';
import FloatingChatButton from './Pages/Floatbtn';

const PASSWORD = 'Brington@123'; 

const App = () => {
  const [input, setInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('make sure you have entered password.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 p-10">
        <h2 className="text-4xl font-semibold mb-4 p-4">Guest Area</h2>
        <p className="mb-6">Please enter the password below.</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full max-w-xs p-5">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            className="px-4 py-2 border-b border-green-400 rounded w-full focus:outline-none mb-2"
          />
          <button
            type="submit"
            className="bg-green-800 text-white px-6 py-2 rounded w-full mt-8"
          >
            Go
          </button>
        </form>
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    );
  }

  return (
    <>
      <div>
        <FloatingChatButton />
        <Navbar />
        <HorizontalScroll />
        <Third />
        <Fourth />
        <Marquee />
        <HurdlesSection />
        <Project />
        <Letters />
        <Speakers />
        <Footer />
      </div>
    </>
  );
};

export default App;
