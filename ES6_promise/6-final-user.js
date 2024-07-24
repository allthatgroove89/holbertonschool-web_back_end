import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfieSignup(firstName, lastName, fileName) {
  const result = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return result.map((result_1) => {
    if (result_1.status === 'fulfilled') {
      return { status: returnItem.status, value: returnItem.value || returnItem.reason };
    }
    return { status: returnItem.status, value: returnItem.reason.toString() };
  });
}
