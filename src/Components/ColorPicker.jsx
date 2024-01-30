import React, { useState } from 'react';

function ColorPicker(){

    const[color,setColor]=useState('#000000');

    const change=(e)=>{
        setColor(e.target.value);

    }
    return(
        <div className="div1"> 
            <h1 className="heading">Color Picker</h1>
            <div className="box" style={{backgroundColor:color}}>
                <p style={{color:'#ebdbdb',display:'flex',justifyContent:'center', alignItems:'center'}}>Selected color: <br />{color}</p>
            </div>
            <br />
            <h5>Select a Color</h5>
            <input type="color" id="picker" onChange={change}/>
        </div>
    )
}

export default ColorPicker;