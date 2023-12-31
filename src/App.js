import { useState } from 'react';
import './App.css';
import Booklist from './components/Booklist'; 
function App(){
  const[bookli, setbookli]= useState(['My Book- 1', 'My Book- 2', 'My Book- 3']); 
  return(
    <>
    <h1>React-Book-Store</h1>
    <p>Here you can explore  various stories and books</p>
    <Booklist list={bookli}/>
    </>
  );
}


export default App;
