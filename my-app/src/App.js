
import './App.css';
import { useState } from 'react'

function App() {

  const initialState = {
    issueType: '',
    subject: '',
    message:''
  }

  const [formState, setFormState]= useState
  (initialState);  // SETFORMSTATE = HANDLE

  const handleSubmit = (event) => {
    // KEEPS OUR DATA FROM BEING RESET
    event.preventDefault()
    // DO SOMETHING!
    console.log(formState)
    // CLEAR THE FORM
 setFormState(initialState)
  }
   

const handleChange = (event) => {
  setFormState({...formState, [event.target.id]:
  event.target.value}) 
}


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <label htmlFor="issueType">Type of Issue:</label>
        <select id="issueType"
                onChange={handleChange}
                value = {formState.issueType}>
          <option value="outage">Service Outage</option>
          <option value="billing">Billing</option>
          <option value="cancel">Cancel Service</option>
        </select>
      <label htmlFor="subject">Subject:</label>
      <input type="text" 
             id="subject" 
             onChange={handleChange}
             value = {formState.subject} />
      <label htmlFor="message">Message</label>
      <textarea id="message" 
                cols="30" 
                rows="10"
                onChange={handleChange}
                value = {formState.message}
      ></textarea>
      <button type="submit">Send</button>
  </form>
    </div>
  );
}

export default App;