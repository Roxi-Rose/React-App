import { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/Booklist'; 
import Addbookform from './components/AddBookForm';
function App() {
  const[bookli, setbookli]= useState([]); 
  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = async() => {
    try {
      const getRes=await
      fetch('https://65a8b70b219bfa3718677099.mockapi.io/Response');
      const data = await getRes.json(); 
      if (Array.isArray(data)){
        setbookli(data);
      }else{
        console.error('invalid data from API:' , data); 
      }
    }catch(error) {
      console.error('error fetching data:' ,error)
}
      }; 

    const postText = async (bookText)=> {
      try{
        const postRes = await fetch('https://65a8b70b219bfa3718677099.mockapi.io/Response', {
          method : 'POST',
          headers : {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify({ name : bookText}), 
        }); 
        if (postRes.ok) {
          fetchBooks();
        }
          } catch (error) {
            console.error ('error adding bookname:' , error); 
          }; 
        }; 
       const deleteText= async (deleteId)=> {
        try {
          const response = await fetch(`https://65a8b70b219bfa3718677099.mockapi.io/Response/${deleteId}`, {
            method: 'DELETE' , 
          }); 
         if (response.ok) {
          fetchBooks(); 
         }
        } catch  (error) {
          console.error('Error deleting Book Text:' , error); 
        }
      }; 
  
   return (
    <>
   <h1>React-Book-Store</h1>
   <p>Here you can explore  various stories and books</p>
   <Addbookform form={postText}/>
   <BookList list={bookli} onRemove={deleteText} />
   </>
  );
}; 


export default App;
