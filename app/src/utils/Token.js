import jwt_decode from 'jwt-decode';



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





