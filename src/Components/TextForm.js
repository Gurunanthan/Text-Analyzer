  import React from 'react'
  import {useState} from'react'
  import PropTypes from 'prop-types';
  // import { Alert, Button } from 'react-bootstrap';
  const TextForm = (props) => {


    const [text,setText]=useState('');
    const [space,setSpace]=useState(0);
    const [word,setWords]=useState(0);
    const [Spchar,setSpchar]=useState(0);
    const [charCount,setCharCount]=useState(0);
    const [copy,setCopystate]=useState(' Copy');
    // const [showAlert, setShowAlert] = useState(true); 
    const onchange=(e)=>
    {
      setText(e.target.value)
      var spacesandwords = text.split(' ')?.length-1||0
      setSpace(spacesandwords);
      var words = text.match(/\S+/g)?.length ||0;
      setWords(words);
      var specialchar = text.split(/[!@#$%^&*()_\-+={}[\]|\\;:<>/?]+/)?.length-1 || 0;
      setSpchar(specialchar);
      var setcharcount =text?.length || 0
      setCharCount(setcharcount)
    }

    const onUpperCase=()=>{
      setText(text.toUpperCase());
      isEmpty();
    }

    const onLowerCase=()=>
    {
      setText(text.toLowerCase())
      isEmpty();
    }

    const onCamelCase=()=>
    {
      const camelcase=text.split(" "|| "\\n" || ".");
      var camcased="";
      camelcase.forEach(element => {
        element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
        camcased += element + " ";
      });
      setText(camcased.trim());
      isEmpty()
    }

    const extraSpaces=()=>
    {
      var extraSpace=text.split(/[ ]+/);
      setText(extraSpace.join(' '));
      isEmpty()
    }

    const copyText=()=>
    {
      var x=navigator.clipboard.writeText(text);
      if(x)
      {
        
        setCopystate(' Copied');
      }
      else{
        isEmpty()
      }
      setTimeout(() => {
        setCopystate(' Copy')
      }, 3000 );

    }
    const isEmpty=()=>{
      if(text===''){
        props.showAlert("The Prompt Is Empty","danger");
      }
    }

    // const pasteText=()=>
    // {
    //   setText(navigator.clipboard.readText());
    // }
    const reset=()=>
    {
      setText('');
      setSpace(0)
      setWords(0)
      setSpchar(0)
      setCharCount(0)
    }


      return (
        <div className={` text-${props.theme==='light'?'dark':'light'} p-3`}>
            <h1 className="mb-5" style={{margin:'0px',padding:'0px'}}>{props.heading}</h1>
            <button className="btn btn-primary mb-2 py-2" onClick={copyText} style={{borderRadius:'0px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                  </svg>
                    {copy}
              </button>
            
              {/* <button className="btn btn-primary mb-2 py-2" onClick={pasteText} style={{borderRadius:'0px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                  </svg>
                    {copy}
              </button> */}
            <div className="form-group d-flex justify-content-around">
                <textarea onChange={onchange} onMouseOut={onchange} value={text}placeholder='enter the text' className={`form-control bg-${props.theme} text-${props.theme==='light'?'dark':'light'}`} id="exampleFormControlTextarea1" rows="8" cols="3"></textarea>
            </div>
            <div className={`container w-100 d-flex  flex-wrap justify-content-sm-around  text-${props.theme==='dark'?'light':'light'} p-3 `}>
              <button className="btn btn-outline-primary mt-3  p-2 btn-sm " onClick={extraSpaces} >Remove extraspaces</button>
              <button className="btn btn-outline-primary mt-3  p-2 btn-sm  " onClick={onUpperCase}>Convert to uppercase</button>
              <button className="btn btn-outline-primary mt-3  p-2 btn-sm " onClick={onLowerCase}>Convert to lowercase</button>
              <button className="btn btn-outline-primary mt-3  p-2 btn-sm " onClick={onCamelCase}>Convert to camelcase</button>              
              <button  className="btn btn-outline-danger mt-3 mx-2 p-2 btn-sm"onClick={reset}>Reset</button>
            </div>
            <div className={`container mt-5 border-primary   p-3`}>
                  <h2 className={`text-${props.theme==='light'?'dark':'light'}`}>Text summary</h2>
                <table>
                  <thead></thead>
                  <tbody>

                    <tr><td><p className={` text-${props.theme==='light'?'dark':'light'}`} >Total number of charachters</p></td><td><p>: {charCount}</p></td></tr>
                    <tr><td><p className={` text-${props.theme==='light'?'dark':'light'}`} >Total number of spaces</p></td><td><p>: {space}</p></td></tr>
                    <tr><td><p className={` text-${props.theme==='light'?'dark':'light'}`} >Total number of words</p></td><td><p>: {word}</p></td></tr>
                    <tr><td><p className={` text-${props.theme==='light'?'dark':'light'}`} >Total number of Special charachters</p></td> <td><p>: {Spchar}</p></td></tr>
                    <tr><td><p className={` text-${props.theme==='light'?'dark':'light'}`} >Total number of Paragraphs</p></td><td><p>: {(Math.floor((text.split(/\n/g)?.length)/2)|| 0)}</p></td></tr>
                    <tr><td><p className={` text-${props.theme==='light'?'dark':'light'}`} >Average time to read the sentence</p></td> <td><p>: {Math.floor(word*0.008)} mins</p></td></tr>
                  </tbody>
                  <tfoot></tfoot>
              </table>
            </div>
        </div>
    )
  }
  TextForm.propsTypes={
    heading:PropTypes.string,
  }

  export default TextForm