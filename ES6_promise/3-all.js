import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoData, userData]) => {
      console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
    })
    .catch((error) => {
      console.log('');
      console.error(error);
    });
}
