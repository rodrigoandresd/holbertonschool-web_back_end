export default function getStudentsByLocation(listStu, city) {
  if (Array.isArray(listStu)) return listStu.filter((listStu) => listStu.location === city);
  return [];
}
