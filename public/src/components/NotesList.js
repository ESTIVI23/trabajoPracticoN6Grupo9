import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');

  const addNote = () => {
    if (inputText) {
      const newNote = {
        id: notes.length+1, //Assign a unique ID to the note
        Description: inputText,
      }

      setNotes([...notes, newNote]);
      setInputText('');
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const listStyle = {
    textAlign: 'left',
    backgroundColor: '#f5f5f5',
  };

  return (
    <div className='text-center'>
      <h1>Notes List</h1>
      <Form>
        <Form.Group>
          <Form.Control 
            type="text"
            placeholder='Enter your note'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </Form.Group>
        <Button variant="warning" onClick={addNote}>Add Note</Button>
      </Form>
      <ListGroup style={listStyle}>
        {notes.map((note) => (
          <ListGroup.Item key={note.id}>
            <span style={{ marginRight: '10px' }}>{note.Description}</span>
            <Button 
              variant="dark"
              className="float-right"
              onClick={() => deleteNote(note.id)}
            >Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default NotesList;