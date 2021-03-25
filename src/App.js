import './App.css';
import emailjs from 'emailjs-com'

function App() {

  function handleSubmit(event) {

    event.preventDefault();
    console.log("submit worked");

    emailjs.sendForm('service_evl6qyw', 'outreach_template', event.target, 'user_yHq4xCy835BmSn8BseCcV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="App">
      <header className="App-header">

      <h1>"No way I'm manually sending 300 emails, Andrew."</h1>
      <p>Click on the "Choose File" button to upload a file:</p>

      <form onSubmit={handleSubmit}>

        <label htmlFor="info" className="submit-label">Enter Name and Email</label>
        <input id="to_name" name="to_name" type="text" placeholder="Your Name" required/>
        <input id="to_email" name="to_email" type="text" placeholder="Your Email" required/>

        <button type="submit" className="submit-button">Submit here!</button>
      </form>

      </header>
    </div>
  );
}

export default App;
