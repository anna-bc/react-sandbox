import { useState } from "react";

export default function Login(props) {
    const [username, setUsername] = useState(''); 

    const [password, setPassword] = useState(''); 

    function handleSubmit(e) {
        const user = 'anna';
        const pwd = 'anna123'
        e.preventDefault();
        
        if ((username === user) && (password === pwd)) {
            props.setIsLoggedIn(true);
        }

    }

  return (
    <>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder="username" id="username" required onInput={(e) => setUsername(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="password" id="password" required onInput={(e) => setPassword(e.target.value)}></input>
        </div>
        <input type="submit"></input>
      </form>
    </>
  );
}
