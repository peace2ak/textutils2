import React, { useState } from 'react';


function Textform(props) {

    const [text, setText] = useState('Peace with unity.');

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleV = ()=>{
        let b = document.getElementById('textBox');
        b.classList.add('is-valid');
        setTimeout(() => {
            b.classList.remove('is-valid');
        }, 1000);
    }

    const handleUp = () => {
        setText((text.toUpperCase()));
        handleV();
    }

    const handleLo = () => {
        setText((text.toLowerCase()));
        handleV();
    }

    const handleCap = () => {

        const arrText = text.split(' ');
        const arrCap = [];

        arrText.forEach((element) => {
            const lower = element.toLowerCase();
            const capL = element.charAt(0).toUpperCase() + lower.slice(1);
            arrCap.push(capL);
        });

        const arrTostring = arrCap.toString().replace(/,/g, " ");

        setText(arrTostring);
        handleV();

    }

    const handleClear = () => {
        setText('');
        handleV();
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        handleV();
    }

    const handleExtraSpaces = () => {
        console.log('handleExtraSpaces');
        const arr1 = text.split(' ');
        const arrEx = [];
        arr1.forEach((element)=>{
            if (element!=="") {
                arrEx.push(element);
            }
        });
        const wS = arrEx.toString().replace(/,/g," ");    
        setText(wS); 
        handleV(); 

    }


    return (
        <>
            <div className={`container my-3 bg-${props.mode} text-${props.mode==='light'?'dark':'light'} p-4 rounded`}>
                <h1 className='mb-4'>Enter the text to analyze :</h1>
                <div className="form-floating">
                    <textarea value={text} onChange={handleChange} className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'} input-lg my-2 mb-4`} placeholder="Leave a comment here" id="textBox" style={{ height: '150px' }}>
                    </textarea>
                    <label htmlFor="textBox">Enter : </label>
                </div>

                <button type="button" onClick={handleUp} className="btn btn-primary">Convert to Uppercase</button><br />
                <button type="button" onClick={handleLo} className="btn btn-warning my-2">Convert to Lowercase</button><br />
                <button type="button" onClick={handleCap} className="btn btn-success">Capitalize</button><br />
                <button type="button" onClick={handleClear} className="btn btn-danger my-2">Clear</button><br /><hr />

                <h2 className='mt-2'>Other Features :</h2>
                <button type="button" onClick={handleCopy} className="btn btn-secondary">Copy Text</button><br />
                <button type="button" onClick={handleExtraSpaces} className="btn btn-secondary my-2">Remove Extra Spaces</button><br />


            </div>
        </>
    );


}

export default Textform;
