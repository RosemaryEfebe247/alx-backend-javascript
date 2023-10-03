/**
 * Function that filters by city and appends grade
 * returns the filtered student with the new grade
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    const cityfilter = students.filter((student) => student.location === city);
    if (Array.isArray(newGrades)) {
      return cityfilter.map((student) => {
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
  }
  return [];
}
