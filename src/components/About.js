import React, { useEffect, useState } from "react";
// import React from 'react'

export default function About(props) {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [ ,setBtntext] = useState("Enable Dark Mode");
  useEffect(() => {
    if (props.mode === "dark") {
      setmyStyle({
        color: "white",
        backgroundColor: "rgb(30 78 117)",
        border: "2px solid white",
      });
      setBtntext("Enable Light Mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
        border: "2px solid black",
      });
      // setBtntext("Enable Dark Mode");
    }
  }, [props.mode]);
 

  return (
    <div className="container"  >
      <h1 className="my-2 " style={{color:props.mode ==='dark'?'white':'#042743'}}  >About Us</h1>
      <div className="accordion " id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <strong>Analyze Your text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              TextUtils is free character counter tools that provides instant character count & owrd count statisics for a given text. TextUtils reports the number of words and character. thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari,Opera. It suits to count character in facebook,blog, books, excel document ,essays,etc.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
