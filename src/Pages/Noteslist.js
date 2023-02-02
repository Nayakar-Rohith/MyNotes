import React,{useEffect, useState} from 'react'
import Note from '../Components/Note'
import '../App.css';
import { Link } from 'react-router-dom';
import NotePage from './NotePage';

const Noteslist = () => {
  let [notes,setNotes]=useState([])

  useEffect(()=>{
    getNotes()
  },[])

  let getNotes=async()=>{
    let responce= await fetch('http://localhost:8000/notes')
    let data=await responce.json() 
    setNotes(data)
  }
  
  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{notes?.length}</p>
      </div>
      <div className='notes-list'>
        {notes?.map(note=>(<Note key={note.id} note={note}/>)
        )}
    </div>
    <button className='floating-button' ><Link to='/note/new' element={<NotePage/>}>+</Link></button>
    </div>

  )
}

export default Noteslist