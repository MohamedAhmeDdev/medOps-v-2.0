import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';



// useEffect(() => {
//     const checkTokenExpiration = () => {
//       const user = JSON.parse(localStorage.getItem('user'));
//       if (!user || !user.token) {
//         console.log('Token not found');
//         return;
//       }
//       const decodedToken = jwt_decode(user.token);
//       if (!decodedToken.exp) {
//         console.error('Token does not have an expiration time:', user.token);
//         return;
//       }
//       const expirationDate = new Date(decodedToken.exp * 1000);
//       const currentTime = new Date();
//       const timeDifference = expirationDate.getTime() - currentTime.getTime();
//       if (timeDifference <= 0) {
//         localStorage.removeItem("user");
//         dispatch({ type: "LOGOUT" });
//       } else {
//         setTimeout(() => {
//           dispatch({ type: "LOGOUT" });
//         }, timeDifference);
//       }
//     };

//     checkTokenExpiration();
//     const intervalId = setInterval(checkTokenExpiration, 60000);
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [dispatch]);




export const getUserInfo = () => {
  const userToken = localStorage.getItem('user'); 
  if (!userToken) {
    return null;
  }

  try {
    const decodedToken = jwt_decode(userToken);
    return decodedToken;
  } catch (error) {
    return null;
  }
};


export const getUserRole = () => {
  // Retrieve the user's role from the authentication token
  const token = localStorage.getItem('user'); 
  if (token) {
    // Decode the token to get user information, including the role
    const decodedToken = jwt_decode(token);
    return decodedToken.role; // Assuming the role is part of the token payload
  }
  return null; // User is not authenticated
};





