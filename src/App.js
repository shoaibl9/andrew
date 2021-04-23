import React, { useState } from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

function App() {

  const [names, setNames] = useState([{/*Add your name here as String*/}]); //this is to include ...
  function changeNames(name) {
    setNames(prevNames => [...prevNames, (name)]);
  }

  const [emails, setEmails] = useState([{/*Add your email here as String*/}]); //... you in all mass outreach
  function changeEmails(email) {
    setEmails(prevEmails => [...prevEmails, (email)]);
  }

  const [contacts, setState] = useState([{
    to_name: {/*Add your name here as String*/},
    to_email: {/*Add your email here as String*/}
  }]);
  function changeContacts(name, email) {
    setState(prevContacts => [...prevContacts, {to_name: (name), to_email: (email)}]);
  }

  const {register, handleSubmit} = useForm();

  const onSubmit = (data, event) => {
    changeNames(data.name);
    changeEmails(data.email);
    console.log(data.name + " " + data.email);
    console.log(names.length);
    event.target.reset();
  }

  function handleForm(event) {
    event.preventDefault();
    console.log("submit worked");

    emailjs.sendForm({/*Add emailJS service here as String*/}, {/*Add emailJS template here as String*/}, event.target, {/*Add emailJS user id here as String*/})
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      event.target.reset();
  }

  function handleButtonOne(event) {
    event.preventDefault();
    console.log("submit worked");
    for (var i = 1; i < names.length; i++){
      changeContacts(names[i], emails[i]);
    }
    console.log("Contacts updated.");
  }

  function handleButtonTwo() {
    console.log(contacts.length);

    for (let i = 1; i < contacts.length; i++){
      emailjs.send({/*Add emailJS service here as String*/}, {/*Add emailJS template here as String*/}, contacts[i], {/*Add emailJS user id here as String*/})
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  }

  return (
    <div className="App">
      <header className="App-header">

      <h1>"No way I'm manually sending 300 emails, Andrew."</h1>

      <p>To do outreach to one person, use these input boxes</p>
      <br />
      <form onSubmit={handleForm}>
        <label htmlFor="single" className="submit-label">Enter Name and Email</label>
        <input id="to_name" name="to_name" type="text" placeholder="Your Name" required/>
        <input id="to_email" name="to_email" type="text" placeholder="Your Email" required/>
        <button type="submit" className="submit-button">Submit here</button>
      </form>

      <br/>

      <p>To do outreach to a whole lot of people:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="multiple" className="submit-label">Enter people to the list</label>
        <input id="name" name="name" type="text" placeholder="Someone's Name" required ref={register}/>
        <input id="email" name="email" type="text" placeholder="Someone's Email" required ref={register}/>
        <button type="submit" className="submit-button">Submit here</button>
      </form>

      <h6>Current List:</h6>
      <div className="list">{names.join()}</div>

      <button onClick={handleButtonOne} className="final-button">Click Here to Update Contact List</button>
      <button onClick={handleButtonTwo} className="final-button">Click Here to Full Send</button>
      <p className="warning">Do NOT touch this button unless you are Shoaib</p>
      </header>
    </div>
  );
}

export default App;
