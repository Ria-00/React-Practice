import React from 'react'
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import List from './Components/List';


function App() {
  return(
    <>
      <Header/>
      <Card name='Paul' roll='21csu326' isPresent={true} ></Card>
      <Card name='Serena' roll='21csu127' isPresent={false}></Card>
      <Card></Card>
      <List></List>
      <Footer></Footer>

    </>
  );
}

export default App
