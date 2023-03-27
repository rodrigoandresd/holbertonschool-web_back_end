function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents
    .filter((listStudents) => listStudents.location === city)
    .map((listStudents) => {
      const newGrade = newGrades.find((grade) => grade.studentId === listStudents.id);
      return {
        ...listStudents,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
