import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props){
    const [text, setText] = useState("")
            

    const handleClick = ()=>{
        setText(text.toUpperCase())
    }
    const handleClickL = ()=>{
        setText(text.toLocaleLowerCase())
    }
    const clearText = ()=>{
        setText("")
    }
    const handleChange = (event)=>{
        setText(event.target.value)
    }


    return (
        <>
        <div className='container '>
            <h1 className={`text-${props.mode==="light"?"dark":"light"}`} htmlFor="myBox">{props.heading}</h1>
            <textarea className="form-control" style={{
        background: props.mode === "light"?"white":"grey"}} id="mybox" onChange={handleChange} value={text} rows={5}/><br/>
            <button className='btn btn-primary' onClick={handleClick}>Convert to UPPER CASE</button>
            <span>&ensp;</span>
            <button className='btn btn-primary' onClick={handleClickL}>Convert to lower case</button>
            <span>&ensp;</span>
            <button className='btn btn-primary' onClick={clearText}>Clear Text</button>    
        </div>
        <div className="container my-2">
        <h1 className={`text-${props.mode==="light"?"dark":"light"}`}>Your text summary</h1>
        <p className={`text-${props.mode==="light"?"dark":"light"}`}>{text.length == 0 || text.charAt(text.length-1) === ' '? text.split(" ").length-1:text.split(" ").length} words and {text.length} charachters</p>
        <h1 className={`text-${props.mode==="light"?"dark":"light"}`}>Preview</h1>
        <p className={`text-${props.mode==="light"?"dark":"light"}`}>{text}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}