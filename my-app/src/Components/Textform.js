import React, { useState}from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

const [text, setText] = useState('Enter text here2');  
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label for="mybox" className="form-label">Textarea</label>
        <textarea className="form-control" value={text} onchange={handleOnChange} id="mybox" row="8"></textarea>
        </div> 
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>   
     </div>
  )
}
