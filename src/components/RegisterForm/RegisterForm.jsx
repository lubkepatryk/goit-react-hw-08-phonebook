import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

// import React, { useState } from 'react';
// import axios from 'axios';

// export const UserRegistration = () => {
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
//       await axios.post('https://connections-api.herokuapp.com/users/signup', {
//         email: email,
//         password: password,
//       });    
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Rejestracja</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={handleChangeEmail} required />

//         <label htmlFor="password">Hasło:</label>
//         <input type="password" id="password" value={password} onChange={handleChangePassword} required />

//         <button type="submit">Zarejestruj</button>
//       </form>
//     </div>
//   );
// };
