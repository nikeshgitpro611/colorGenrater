import React from 'react'
import { nanoid } from 'nanoid';
import SingleClor from './SingleClor';
const ColorList = ({color, index}) => {
  // const id = nanoid();
  // console.log(color);
  return (
    <section className='colors'>{color.map((colorList)=>{
      return <SingleClor colorList={colorList} key={nanoid()} index= {index}/>
    })}</section>
  )
}

export default ColorList