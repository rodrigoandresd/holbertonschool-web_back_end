export default function getStudentIdsSum(listStu) {
  if (Array.isArray(listStu))
    return listStu.reduce((accumulator, currentStud) => accumulator + currentStud.id, 0);
  return [];
}
