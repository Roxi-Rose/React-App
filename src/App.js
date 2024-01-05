import { useState } from 'react';
import './App.css';
import BookList from './components/Booklist'; 
import Addbookform from './components/AddBookForm';
function App() {
  const[bookli, setbookli]= useState(['My Book- 1', 'My Book- 2', 'My Book- 3']); 

  const handleClick = (event) => { 
    setbookli([...bookli, event]);
  }
   return (
    <>
   <h1>React-Book-Store</h1>
   <p>Here you can explore  various stories and books</p>
   <Addbookform form={handleClick}/>
   <BookList list={bookli}/>
   </>
  );
}


export default App;
