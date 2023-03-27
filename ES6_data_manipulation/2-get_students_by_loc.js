export default function getStudentsByLocation(listStudents, city) {
  if (Array.isArray(listStudents)) return listStudents.filter((listStudents) => listStudents.location === city);
  return [];
}
