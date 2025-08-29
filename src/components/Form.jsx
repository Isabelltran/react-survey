/* eslint-disable react/prop-types */
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import { useState } from "react";

function Form({addAnswer}) {
    const [selectedRadio, setSelectedRadio] = useState(""); 
    const [selectedCheck, setSelectedCheck] = useState(""); 
    const [review, setReview] = useState(""); 
    const [username, setUsername] = useState(""); 
    const [email, setEmail] = useState(""); 
    
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected radio button:", selectedRadio);
    console.log("Selected check button:", selectedCheck);
    console.log("Info about Rubber Duck:", review);
    console.log("Username:", username);
    console.log("Email:", email);

    const newAnswer = {
      username,
      colour: selectedRadio,
      timeSpent: selectedCheck,
      review,
      email
    };

    addAnswer(newAnswer); // <-- legg til svaret i Survey
    console.log("Submitted:", newAnswer);

    setSelectedRadio(null);         
    setSelectedCheck([]);         
    setReview("");                   
    setUsername("");                
    setEmail("");    

  };
    return ( 

        <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <Radio selected={selectedRadio} setSelected={setSelectedRadio}/>
        </div>
        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <Checkbox selected={selectedCheck} setSelected={setSelectedCheck}/>
        </div>
        <label>
            What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            value = {review}
            onChange={(e) => setReview(e.target.value)}
            ></textarea></label>
        <label>
            Put your name here (if you feel like it):<input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} /></label>
        <label>
            Leave us your email pretty please??<input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} /></label>
        <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    )
}

export default Form;