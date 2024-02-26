import React from 'react';
import { useState } from 'react';


const TextForm = (props) => {
    const [text, setText] = useState('')

    const handleUpClick = () => {

        // console.log('Uppercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success')

    }

    const handleLoClick = () => {

        // console.log('Uppercase was clicked' + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase', 'success')

    }

    const handleClearClick = () => {

        // console.log('Uppercase was clicked' + text)
        let newText = '';
        setText(newText);
        props.showAlert('Clear to all text', 'success')

    }

    const handleCopy = () => {

        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copy To Clipboard', 'success')

    }

    const handleExtraSpaces = () => {

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Remove Extra Spaces', 'success')

    }

    const handleOnChange = (event) => {

        // console.log('On change')
        setText(event.target.value)

    }

    return (
        <>
            <div className='container'style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text: "Enter something above the textbox to preview it"}</p>
            </div>

        </>
    )
}

export default TextForm