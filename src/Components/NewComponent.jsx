import React, { useState } from 'react';

function NewComponent(){

    const [age,setAge]=useState(0);
    const [isEmployed,setStatus]=useState(false);
    const [name,setName]=useState('');
    const [comment,setComment]=useState('');

    const change = (newAge) => {
        setAge(newAge);
      };
    
    const changee = () => {
        setStatus(!isEmployed);
      };
    
    const changeName = (event) => {
        setName(event.target.value);
      };

    const changeComment = (event) => {
        setComment(event.target.value);
    }

    return(<>
        <input type='text' placeholder='Enter your name' onChange={changeName}/>
        <h1>Name:{name}</h1> <br />
        <h1>Age is {age}</h1>
        <button onClick={()=>change(age+1)}>Increment</button>
        <button onClick={()=>change(0)}>Reset</button>
        <button onClick={()=>change(age-1)}>Decrement</button><br /><br />
        <h1>Is Employed: {isEmployed ? 'Yes' :'No'}</h1>
        <button onClick={changee}>Change Status</button><br /><br />
        <textarea value={comment} placeholder='Any Comments..' onChange={changeComment}></textarea>
        <p>Comments:{comment}</p>
    </>)
}

export default NewComponent;