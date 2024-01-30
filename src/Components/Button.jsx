import {React,useState} from 'react';

function Button(props){

    const[d,setData]=useState({});

    async function handleClick(name){
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${name}`);
        const data = await response.json();
        setData(data);
    }

    const fun= (e)=>{
        e.target.textContent='Gotcha!!';
    }

    const funn= (e)=>{
        e.target.style.display='none';
    }

    return(
        <>
        {/* <button onClick={()=>handleClick(props.name)}>Catch 'em!</button> */}
        {/* <h2>{d.name}</h2> */}
        <button onClick={(e)=>fun(e)}>CLICK HERE</button>
        <img onDoubleClick={(e)=> funn(e)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcj4p8LvJBN2TfWDHxHFqVuRRIvzXdsJeuf2Iq2WLszQp0Db57PfUVTGB9WjCQwcnDKAQ&usqp=CAU" />
        </>
        
    )
}

export default Button;