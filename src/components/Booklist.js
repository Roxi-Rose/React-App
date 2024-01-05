import React from 'react'

export default function Booklist(props){
    return (
     <div>
        <ul>
        {props.list.map((dynamicBook, i)=> (
            <li key={i}>{dynamicBook}</li>
        ))}
        </ul>
     </div>
    )
}