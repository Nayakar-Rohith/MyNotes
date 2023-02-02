import React from 'react'
import { Link } from 'react-router-dom'

const Note = (props) => {
    const {id,body,updated}=props.note
    let noteTitle=()=>{
      if (body?.split('\n')[0]?.length>45) {
        return `${body?.split('\n')[0].slice(0,45)}...`
      }
       return body?.split('\n')[0]
    }
    let getDate=()=>{
      return new Date(updated).toLocaleDateString()
    }
    // console.log('Props',props)
    

  return (
    <Link to={`/note/${id}`}>
      <div className='notes-list-item'>
        <h3>{noteTitle()}</h3>
        <p><span>{getDate()}</span></p>
      </div></Link>
  )
}

export default Note