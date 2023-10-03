/**
 * Function that filters by city and append grade
 * returns the filtered student with the new grade
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    const cityfilter = students.filter((student) => student.location === city);
	if (Array.isArray(newGrades)) {  
      return cityfilter.map((student, index) => ({
	  ...student,
	  grade: newGrades[index] && newGrades[index].grade !== null ? newGrades[index].grade : 'N/A',
	}));
   }
  }
  return [];
}
