export default function getListStudentIds(listStudents) {
  if (Array.isArray(listStudents)) return listStudents.map((listStudents) => listStudents.id);
  return [];
}
