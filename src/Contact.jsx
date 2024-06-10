import './Contac.css';
import React from 'react'
function Contact(){
    return(
    <>
    <body className="bo">
  <div className="contact-container"> 
    <h1 className='h2'>Contact Us</h1>
        <form action="#" method="post">
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required/>
            </div>
            <div className="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="but2">Send Message</button>
            </div>
        </form>
    </div> 
    </body>
    </>
    );
}
export default Contact;