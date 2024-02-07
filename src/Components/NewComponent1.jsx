import React,{useState} from "react";

function NewComponent1(){

    const[foods,setFood]=useState(['Apple','Banana'])
    const[car,setCar]=useState({year:2024,make:'Ford', model:'Mustang'})
    const changeMake=(e)=>{
        setCar({...car,make:e.target.value});
    }
    const changModel=(e)=>{
        setCar({...car,model:e.target.value});
    }
    const changeYear=(e)=>{
        setCar({...car,year:e.target.value});
    }
    const addFood=()=>{
        const f=document.getElementById('foo').value;
        document.getElementById('foo').value=''   ;
        // F=F.push(f)
        // console.log(foods);
        setFood(F=>[...F,f]);
    }
    const removeFood=(index)=>{
        foods.splice(index,1);
        setFood([...foods]);
    }
    return(
        <>
            <div style={{textAlign:"center"}}>
                <input type="text" placeholder="Make" onChange={changeMake} />&nbsp;
                <input type="text" placeholder="Model" onChange={changModel}/>&nbsp;
                <input type="number" placeholder="Year" onChange={changeYear} /><br /><br />
                <h2><b>Favourite Car:</b> <span style={{fontFamily:"monospace"}}>{car.make} {car.model} {car.year}</span></h2>
            </div>
<br /><br />
            <div>
                <h1> FOOD ITEMS</h1>
                <ul>
                {foods.map((food,index)=><li key={index} onClick={()=>removeFood(index)}>{food}</li>)}
                </ul>
                &nbsp; <input type="text" placeholder="new food" id="foo"/>&nbsp;
                <button onClick={addFood}>Add</button>
               
            </div>
        </>
    );
}

export default NewComponent1;