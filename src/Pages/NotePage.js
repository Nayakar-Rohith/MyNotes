import React, { useEffect, useState } from 'react'
import { json, Link, useParams } from 'react-router-dom'
import notes from '../Assets/data'


const NotePage = (props) => {
   
    let [note,setNote]=useState([null])

    const {id}=useParams()

    useEffect(()=>{
      getNote()
    },[id])

    let getNote=async()=>{
      if (id==='new')return
      let responce=await fetch(`http://localhost:8000/notes/${id}`)
      let data=await responce.json()
      setNote(data)
    }
    let updateNote=async()=>{
      // let responce=await fetch(`http://localhost:8000/notes`)
      await fetch(`http://localhost:8000/notes/${id}`,{
        method:'PUT',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({...note,'updated':new Date()})
        })      
    }
    let onSubmit=()=>{
      console.log('body',note.body)
      if (!note.body && id!='new') {
        deleteNote()
      } else if(note.body && id!='new'){
        updateNote()
      }   
      else if (!note.body && id==='new'){
        createNote()
        console.log('createNote',note.body)
      }   
    }
    let deleteNote=async()=>{
      await fetch(`http://localhost:8000/notes/${id}`,
      {
        method:'DELETE',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(note)
      })
    }
    let createNote=async()=>{
      await fetch(`http://localhost:8000/notes`,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({...note,'updated':new Date()})
      })
    }
  
    // const note=notes.find(note=>note.id===Number(id))

  return (
    <div className='note'>
      <div className='note-header'>
        <h3 className=''><Link to="/"><p onClick={()=>{onSubmit()}}>{`<`}</p></Link></h3>
        <button onClick={()=>deleteNote()}><Link to='/'>delete</Link></button>
      </div>
      <textarea value={note?.body}
       onChange={(e)=>setNote({...note,'body':e.target.value})}>

      </textarea>
    </div>
  )
}

export default NotePage