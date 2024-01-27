import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'

function Card(props) {

    const[btncolor,changeColor]=useState('Green');
    const imgStyle = {
        width:'100px',
        height:'100px',
        marginTop:'12px'
    }

    const cardStyle ={ width: '18rem',marginLeft:'15px', textAlign:'center', display:'inline-block',maxWidth:'50%',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',transition:'0.3s',borderRadius:'5px',marginBottom:'20px'}

    const btnHanlder = () =>{
        changeColor((prevcolor)=>(prevcolor==='Green'?'Red':'Green'));
    }

    return (
        <div className="card" style={cardStyle}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcj4p8LvJBN2TfWDHxHFqVuRRIvzXdsJeuf2Iq2WLszQp0Db57PfUVTGB9WjCQwcnDKAQ&usqp=CAU" className="card-img-top" alt="..." style={imgStyle}/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
            {props.roll}
            </p>
            <button type="button" className="btn btn-primary" style={{backgroundColor:btncolor, border:'none'}} onClick={btnHanlder}>{btncolor==='Green'? 'Present' :'Absent'}</button>
        </div>
        </div>
    );
    }
    
    Card.propTypes={
        name:PropTypes.string,
        roll:PropTypes.number
    }

    Card.defaultProps={
        name:'Guest',
        roll:0
    }

    export default Card;
          