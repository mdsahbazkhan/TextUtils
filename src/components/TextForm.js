import React,{useState} from "react";

export default function Textform(props) {
const [text, setText] = useState('');
const handleUpClick=()=>{
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("Convert to uppercase","success");

}
const handleLoClick=()=>{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Convert to lowercase","success");

}
const handleClearClick=()=>{
  let newText = "";
  setText(newText);
  props.showAlert("Clear Text","success");

}
const handleOnChange=(event)=>{
  setText(event.target.value)
}
const handleCopy= ()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
   document.getSelection().removeAllRanges();
  props.showAlert("Copy Text","success");

}
  return (
    <>
    <div className="container " style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?' #235e69':'white',color:props.mode==='dark'?'white':'black' }}
          id="myBox"
          rows="5" 
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to Uppercase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to Lowercase</button> 
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear text</button> 
      <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy text</button> 

      </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and{text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    </div>
    </>
  );
}
