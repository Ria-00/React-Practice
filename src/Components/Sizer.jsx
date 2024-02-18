import React,{useEffect,useState} from "react";

function Sizer(){

    const [height, setHeight]=useState(window.innerHeight);
    const [width,setWidth]=useState(window.innerWidth);

    const handleResize=()=>{
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    // window.addEventListener('resize',handleResize)    //using only event listener
    // console.log('resize event added')
    
    useEffect(()=>{
        window.addEventListener('resize',handleResize)    
        console.log('resize event added')

        return ()=>{                                             // this statement is used to remove the event listener when the component is unmounted
            window.removeEventListener('resize',handleResize)   
            console.log('resize event removed')
        }
    },[])
    

    return(
        <>
            <div style={{textAlign:'center'}}> 
            <h2><b>Window Specifications</b></h2><br/>
            <p>Height:{height}px</p>
            <p>Width:{width}px</p>
            </div>
        </>
    )
}

export default Sizer;