// import { createContext, useEffect, useState } from 'react'
//
// export const AuthContext = createContext();
//
// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem('user')) || null
//   );
//
//   const login = () => {
//     // TO_DO login logic
//
//     //Dummy user
//     setCurrentUser({ id: 1, name: 'M. Blank', picture: 'src/assets/male_avatar.svg'});
//   }
//
//   useEffect(() => {
//     localStorage.setItem('user', JSON.stringify(currentUser));
//   }, [currentUser]);
//
//   return (
//     <AuthContext.Provider value={{}}>
//       {children}
//     </AuthContext.Provider>
//   )
// };
