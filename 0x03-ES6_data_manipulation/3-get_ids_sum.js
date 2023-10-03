/**
 * Function that reduce values to one
 * @index is the accumulator that accumulates sum at each iteration
 * @returns the sum of the students ids
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((index, studentid) => (index + studentid.id), 0);
  }
  return [];
}
