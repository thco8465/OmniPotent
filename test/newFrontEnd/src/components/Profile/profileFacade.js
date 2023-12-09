 // UserProfileFacade.js
 import axios from 'axios';
  
export default class UserProfileFacade {
   async fetchUserData(username) {
     try {
       const response = await axios.get(`/userData/${username}`);
 
       if (response.data.success) {
         return response.data.user;
       } else {
         console.error('User data fetch failed:', response.data.message);
         return null;
       }
     } catch (error) {
       console.error('Error fetching user data:', error);
       return null;
     }
   }
 }
