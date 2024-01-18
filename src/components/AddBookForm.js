import React, { useState } from 'react'

export default function Addbookform(props) {
    const [bookname, setbookname] = useState("");
    const handleInput = (event)=> {
        setbookname(event.target.value);
    }
    const handleAdd = (event) => {
        event.preventDefault();
        if (bookname.trim() === '') {
          return; 
        }
        props.form(bookname);
        setbookname("")
    }
  return (
    <div> 
     <form onSubmit={handleAdd}>
     <input type= "text" value= {bookname} onChange={handleInput}/>
     <button>Add</button>
     </form>
    </div>
  )
}