import React, { useState } from 'react';
import "./Signin.css";

function Signin() {
  const [opacity, setOpacity] = useState(0.5);

  return (
   
    <div className="signin-container">
      <img 
        src="https://i.pinimg.com/originals/c5/34/1a/c5341a72c861bd63e30694b250d26b68.jpg" 
        style={{width: '100%', height: '100%', objectFit: 'cover', position: 'absolute'}} 
        alt="background"
      />
      <div 
        className="container" 
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
      >
        <h1 id="log">LOG IN</h1>
        <form action="/login" method="post">
          <label htmlFor="email">E-MAIL</label>
          <input type="text" id="email" name="email" required/><br/><br/>
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" name="pass" required/><br/><br/>
          <button type="submit" id="sub">SIGN IN</button>
        </form><br/>
        Not have an account? 
        <a href="/signup">signup</a>
      </div>
    </div>
   
  );
}

export default Signin;
