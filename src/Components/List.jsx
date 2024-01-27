function List(){
    const subjects=[
        {id:1, sub:' English', code:'ENG-101', credits:99, type:'Theory'},
        {id:2, sub:' Mathematics', code:'MTH-101', credits:95, type:'Theory'},
        {id:3, sub:' Physics', code:'PHY-101', credits:75, type:'Practical'},
        {id:4, sub:' Chemistry', code:'CHE-101', credits:65, type:'Theory'},
        {id:5, sub:' Engineering Graphics', code:'EG-101', credits:70, type:'Practical'}
    ]

    // subjects.sort((a,b)=> a.sub.localeCompare(b.sub)); //Aplhabetic sorting
    // subjects.sort((a,b)=> b.sub.localeCompare(a.sub)); //Reverse Aplhabetic sorting
    // subjects.sort((a,b)=> b.credits - a.credits); //Reverse numeric sorting
    // subjects.sort((a,b)=> a.credits - b.credits); //Numeric sorting

    subjects.filter(impSub=> impSub.credits>80)

    const subList=subjects.map(sub=><li key={sub.id}>{sub.sub}: &nbsp; {sub.code} &nbsp; <br />Credits:&nbsp;{sub.credits}</li>)

    return(<ol>{subList}</ol>);

}



export default List;