export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const value = array.indexOf(value);
    array[idx] = appendString + value;
  }

  return array;
}