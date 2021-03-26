import './App.css';
import emailjs from 'emailjs-com'

function App() {

  var names = [
    "Adeel Laghari",
    "Andrew Hedden",
    "Shoaib's UW Email"
  ]

  var emails = [
    "shoaiblaghari9@gmail.com",
    "shoaiblaghari9@gmail.com",
    "msl09@uw.edu"
  ]

  var settings = [
    {
      to_name: "Shoaib Laghari",
      to_email: "shoaiblaghari9@gmail.com"
    }
  ]

  function handleForm(event) {
    event.preventDefault();
    console.log("submit worked");

    emailjs.sendForm('service_evl6qyw', 'outreach_template', event.target, 'user_yHq4xCy835BmSn8BseCcV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      event.target.reset();
  }

  function handleButton(event) {
    event.preventDefault();
    console.log("submit worked");

    for (var i = 0; i < names.length; i++){
      const person = {
        to_name: names[i],
        to_email: emails[i]
      }
      settings.push(person);
    }
    console.log(settings);

    for (var j = 0; j < settings.length; j++){
      emailjs.send('service_evl6qyw', 'outreach_template', settings[j], 'user_yHq4xCy835BmSn8BseCcV')
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
      <p>Click on the "Choose File" button to upload a file:</p>
      <br />
      <form onSubmit={handleForm}>
        <label htmlFor="info" className="submit-label">Enter Name and Email</label>
        <input id="to_name" name="to_name" type="text" placeholder="Your Name" required/>
        <input id="to_email" name="to_email" type="text" placeholder="Your Email" required/>
        <button type="submit" className="submit-button">Submit here</button>
      </form>
      <br/>
      <p>Here's a version without forms:</p>
      <button onClick={handleButton}>Click Here!</button>
      <p className="warning">Do NOT touch this button unless you are Shoaib</p>
      </header>
    </div>
  );
}

export default App;
