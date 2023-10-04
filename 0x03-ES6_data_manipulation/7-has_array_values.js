/**
 * Function that checks if an array exists in a set.
 * @Returns a boolan true or false.
 */
export default function hasValuesFromArray(set, array) {
  for (const item of array) {
    if (!set.has(item)) {
	  return false;
	}
  }
  return true;
}
