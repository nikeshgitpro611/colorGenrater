import React, { useState } from "react";

const Form = ({addColors}) => {
  const [color, setColor] = useState("");
  const handlerSubmit = (event)=>{
    event.preventDefault()
    addColors(color)
  }

  return (
    <section className="container">
      <h4>Color Genrater</h4>
      <form action="" onSubmit={handlerSubmit} className="color-form">
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
        <input
          type="text"
          id=""
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
      
      <button className="btn" type="submit" style={{background: color}}>Submit</button>
      </form>
    </section>
  );
};

export default Form;
