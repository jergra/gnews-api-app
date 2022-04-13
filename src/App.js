//import React, {useState, useEffect} from 'react'
import NewsList from './components/NewsList';
import './index.css'

function App() {

  return (
    
    <div 
      className="flex flex-col justify-center w-screen h-full bg-gray-400"
    >
        <NewsList />
    </div>
  
  );
}

export default App;
