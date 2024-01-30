import React from 'react';

function List(){
    const subjects=[
        {id:1, sub:'English', code:'ENG-101', credits:99, type:'Theory'},
        {id:2, sub:'Mathematics', code:'MTH-101', credits:95, type:'Theory'},
        {id:3, sub:'Physics', code:'PHY-101', credits:75, type:'Practical'},
        {id:4, sub:'Chemistry', code:'CHE-101', credits:65, type:'Theory'},
        {id:5, sub:'Engineering Graphics', code:'EG-101', credits:70, type:'Practical'}
    ]

    const teachers=[{id:1, name:'Dr. A'},
    {id:2, name:'Dr. B'},
    {id:3, name:'Dr. C'},
    {id:4, name:'Dr. D'}];

    // subjects.sort((a,b)=> a.sub.localeCompare(b.sub)); //Aplhabetic sorting
    // subjects.sort((a,b)=> b.sub.localeCompare(a.sub)); //Reverse Aplhabetic sorting
    // subjects.sort((a,b)=> b.credits - a.credits); //Reverse numeric sorting
    // subjects.sort((a,b)=> a.credits - b.credits); //Numeric sorting

    // const subList=subjects.map(sub=><li key={sub.id}>{sub.sub}: &nbsp;{sub.code}; <br />Credits:&nbsp;{sub.credits}</li>)

    const newsub=subjects.filter(impSub => impSub.credits >60);

    const subList=newsub.map(sub=><li key={sub.id}>{sub.sub}: &nbsp;{sub.code}; <br />Credits:&nbsp;{sub.credits}</li>)

    return(<>
    <h2>Subjects</h2>
    <ol>{subList.length>3 ? subList :null}</ol>
    </>);

}

export default List;