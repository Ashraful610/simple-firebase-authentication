import './App.css';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import  app from './firebase.init';
import { useRef, useState } from 'react';

const auth = getAuth(app)
function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider()
  
  const handleGoogleSingIn = () => {
    signInWithPopup(auth,googleProvider)
     .then(result => {
       const user = result.user
       setUser(user)
       console.log(user)
     })
     .catch(error => {
       console.error('error',error)
     })
  }
  const githubProvider = new GithubAuthProvider();
   const handleGithubSingIn = () => {
     signInWithPopup(auth,githubProvider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })
   }
  const handleSignOut = () => {
    signOut(auth)
     .then(()=>{
       setUser({})
     })
     .catch(error => {
       setUser({})
     })
  }
  return (
    <div className="App">
      {
        user.uid? <button onClick={handleSignOut}>Sign Out</button> :
        <div>
                <button onClick={handleGoogleSingIn}> Google sign In</button>
                <button onClick={handleGithubSingIn}> Github sign In</button>
        </div>
     
      }
          <h2>Name : {user.displayName}</h2>
          <h3>Email : {user.email}</h3>
          <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
