import { twMerge } from 'tailwind-merge';
import './App.css';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);
  
  const onLogin = () => {
    setActive(true);
  };

  const onRegister = () => {
    setActive(false);
  };

  return (
    <div className={twMerge("container", active && "active")}>
      <div className="form-box login">
        <form action="#">
          <h1>Sign in</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt' ></i>
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn" onClick={onLogin}>Login</button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <a href="#"><i className='bx bxl-google' ></i></a>
            <a href="#"><i className='bx bxl-facebook' ></i></a>
            <a href="#"><i className='bx bxl-github' ></i></a>
            <a href="#"><i className='bx bxl-linkedin' ></i></a>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form action="#">
          <h1>Sign up</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className='bx bxs-envelope' ></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt' ></i>
          </div>
          <button type="submit" className="btn" onClick={onRegister}>Register</button>
          <p>or register with social platforms</p>
          <div className="social-icons">
            <a href="#"><i className='bx bxl-google' ></i></a>
            <a href="#"><i className='bx bxl-facebook' ></i></a>
            <a href="#"><i className='bx bxl-github' ></i></a>
            <a href="#"><i className='bx bxl-linkedin' ></i></a>
          </div>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={onLogin}>Register</button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={onRegister}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
