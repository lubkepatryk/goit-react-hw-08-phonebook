import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};


// import React from 'react';

// export const UserMenu = ({ userEmail, handleLogout }) => {
//   return (
//     <div>
//       <p>{userEmail}</p>
//       <button onClick={handleLogout}>Wyloguj</button>
//     </div>
//   );
// };
