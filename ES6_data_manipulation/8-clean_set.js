export default function cleanSet(set, startString) {
  if (!startString.length) return '';
  const filteredValues = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      filteredValues.push(value.substring(startString.length));
    }
  });

  return filteredValues.join('-');
}
