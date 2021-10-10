import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpCase= ()=>{
        //console.log("Upper case was change"+text);
        const newText=(text.toUpperCase());
        //let newText=text;
        setText(newText)
        props.showAlert("convert to upper case","success")
    }
    const handleLoCase= ()=>{
        //console.log("Lower case was change"+text);
        const newText=(text.toLowerCase());
        //let newText=text;
        setText(newText)
        props.showAlert("convert to lower case","success")
    }
    //clear all text
    const handleClearCase= ()=>{
        //console.log("Lower case was change"+text);
        const newText=("");
        //let newText="";
        setText(newText)
    }
    const handleCopy=()=>{
        console.log("I am Copy");
        var text=document.getElementById("myBox");
        text.select();
        document.getSelection().removeAllRanges();
        //text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);

    }
    //remove space 
    const handleExtraSpace=()=>{
        console.log("I am Remove");
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange= (arg)=>{
        console.log("On change");
        setText(arg.target.value)
    }
    const[text,setText]= useState("");
   // text="avwjdcvjhwv";//this way is wrong for update data
   //setText("hfkjskhrgkjkjherg"); this way is true for update text
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'  }}>
           <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background:props.mode==='dark'?'#121f5f':'light',color:props.mode==='dark'?'white':'light' }} id="myBox" rows="6"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpCase} >Convert Text </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoCase} >Convert Lower </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearCase} >Clear Text </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} >Remove Space </button>
           
     </div>
     <div className="container" style={{ color:props.mode==='dark'?'white':'black' }}>
      <h2>Your Result</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0 }).length}Words and {text.length}Character.</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0 }).length} Minutes need for read this passage.</p>
      <h1>Preview:</h1>
      <p>{text.length>0?text:"Enter Some Thing"}</p>
     </div>
     </>
    )
}
