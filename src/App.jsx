import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import "./App.css";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";

function App() {
  const [color, setColor] = useState(new Values('#f15025').all(10));
  // new Values('#f15025').all(10) = use For Color Genrater

  // toast.error('error message');
  // toast.success('Awesome')
  const addColors =(color)=>{
    try {
      const newColor = new Values(color).all(2);
      setColor(newColor)
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <main>
      <Form addColors={addColors}/>
      <ColorList color= {color}/>
      <ToastContainer position='top-center' />
    </main>
  );
}

export default App;
