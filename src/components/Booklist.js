import React from 'react'

export default function Booklist(props){
    return (
     <div>
        <ul>
            <li>{props.list[0]}</li>
            <li>{props.list[1]}</li>
            <li>{props.list[2]}</li>
        </ul>
     </div>
    )
}