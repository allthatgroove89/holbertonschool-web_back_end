import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default function handleProfieSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(fileName, lastName),uploadPhoto(fileName)])
  .then((result) => {
    return result.map((result) => {
      if (result.status === 'fulfilled') {
        return { status: result.status, value: result.value || result.reason };
      } else {
        return {status: result.status, value: result.reason.toString() };
      }
    });
  });
}
