/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {*} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be given to a student.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city)
      .map((student) => {
        const matchgrade = newGrades.find((findgrade) => findgrade.studentId === student.id);
        if (matchgrade && matchgrade.grade) {
          return {
            ...student,
            grade: matchgrade.grade,
          };
        } else {
          return {
            ...student,
            grade: 'N/A',
          };
        }
      });
  }
  return [];
}
