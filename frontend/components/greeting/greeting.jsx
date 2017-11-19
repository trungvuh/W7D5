import React from 'react';
import { Link } from 'react-router-dom';


const personalGreeting = (currentUser, logout) => (
  <div>
    <h3>Welcome to BenchBnB, {currentUser.username}!</h3>
    <button onClick={logout}>Log Out</button>
  </div>
);

const sessionLinks = () => (
  <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
  </div>
);


const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;

// export default ({ currentUser, logout }) => {
//   const display = currentUser ? (
//     <div>
//       <p>Welcome to BenchBnB, {currentUser.username}</p>
//       <button onClick={logout}>Log Out</button>
//     </div>
//   ) : (
//     <div>
//       <Link className="btn" to="/signup">Sign Up</Link>
//       <Link className="btn" to="/login">Log In</Link>
//     </div>
//   );
//
//   return (
//     <header className="greeting">
//       <div>
//         {display}
//       </div>
//     </header>
//   );
// };
