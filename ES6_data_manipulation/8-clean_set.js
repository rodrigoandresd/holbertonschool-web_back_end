export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';

  let filteredValues = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      filteredValues += value.substring(startString.length) + '-';
    }
  });

  // Remove the last hyphen
  filteredValues = filteredValues.slice(0, -1);

  return filteredValues;
}
