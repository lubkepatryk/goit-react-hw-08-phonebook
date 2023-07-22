// import React, { useState } from 'react';
// import axios from 'axios';

// export const UserLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChangeEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleChangePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('https://connections-api.herokuapp.com/users/login', {
//         email: email,
//         password: password,
//       });
//             const token = response.data.access_token;      
//       localStorage.setItem('token', token);
      
//     } catch (error) {
//       console.error(error);    
//     }
//   };

//   return (
//     <div>
//       <h2>Logowanie</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={handleChangeEmail} required />

//         <label htmlFor="password">Hasło:</label>
//         <input type="password" id="password" value={password} onChange={handleChangePassword} required />

//         <button type="submit">Zaloguj</button>
//       </form>
//     </div>
//   );
// };


import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
