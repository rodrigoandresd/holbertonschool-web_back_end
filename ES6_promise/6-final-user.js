import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const stats = [];

  try {
    const userData = await signUpUser(firstName, lastName);
    stats.push({
      status: 'fulfilled',
      value: userData,
    });
    await uploadPhoto(fileName);
  } catch (err) {
    stats.push({
      status: 'rejected',
      value: err,
    });
  }
  return stats;
}
