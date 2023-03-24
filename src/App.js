import { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [registrationError, setRegistrationError] = useState(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const register = async () => {
    setRegistrationError(null);
    try {
      await createUserWithEmailAndPassword(
        auth,
        registrationEmail,
        registrationPassword
      );
    } catch (e) {
      setRegistrationError(e);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const login = async () => {
    try {
      setLoginError(null);
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (e) {
      setLoginError(e);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      {!!user && (
        <div>
          logged in as: {user.email}
          <button onClick={logout}>Logout</button>
        </div>
      )}
      {!user && (
        <div>
          <h3>Register</h3>
          <input
            type="text"
            value={registrationEmail}
            onChange={(ev) => setRegistrationEmail(ev.target.value)}
          />
          <input
            type="password"
            value={registrationPassword}
            onChange={(ev) => setRegistrationPassword(ev.target.value)}
          />
          <button onClick={register}>Register</button>
          <div>{registrationError?.message}</div>

          <h3>Login</h3>
          <input
            type="text"
            value={loginEmail}
            onChange={(ev) => setLoginEmail(ev.target.value)}
          />
          <input
            type="password"
            value={loginPassword}
            onChange={(ev) => setLoginPassword(ev.target.value)}
          />
          <button onClick={login}>Login</button>
          <div>{loginError?.message}</div>
        </div>
      )}
    </div>
  );
}

export default App;
