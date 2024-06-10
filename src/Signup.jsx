import React, { useState } from 'react';
import "./Signup.css";

function Signup() {
  const [opacity, setOpacity] = useState(0.5);

  return (
    
    <div className="signup-container">
      <img 
        src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148695092.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716768000&semt=ais_user" 
        style={{width: '100%', height: '100%', objectFit: 'cover', position: 'absolute'}} 
        alt="background"
      />
      <div 
        className="cont" 
        style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/701499.jpg)', 
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          width: '40%',
          height: 'auto',
          position: 'relative',
          zIndex: 1,
          opacity: opacity,
          transition: 'opacity 0.3s',
        }} 
        onMouseEnter={() => setOpacity(0.9)}
        onMouseLeave={() => setOpacity(0.5)}
        id="img"
      >
        <h1 id="log">SIGN UP</h1>
        <form action="/signup" method="post">
          <label htmlFor="email">E-MAIL ID:</label>
          <input type="text" id="email" name="email" placeholder="@gmail.com" className='signtxt' required /><br /><br />
          <label htmlFor="password">PASSWORD:</label>
          <input type="text" name="pass" placeholder="at least 10 digits" className='signtxt' required /><br /><br />
          <button type="submit" id="subbut">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
