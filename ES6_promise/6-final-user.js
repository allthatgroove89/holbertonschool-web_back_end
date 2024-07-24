import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default async function handleProfieSignup(firstName, lastName, fileName) {
  const result = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return result.map((result_1) => {
    if (result_1.status === 'fulfilled') {
      return { status: result_1.status, value: result_1.value || result_1.reason };
    } else {
      return { status: result_1.status, value: result_1.reason.toString() };
    }
  });
}
