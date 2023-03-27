export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';

  let filteredValues = '';
  const uniqueValues = new Set();
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      const filteredValue = value.substring(startString.length);
      if (!uniqueValues.has(filteredValue)) {
        filteredValues += (filteredValues.length > 0 ? '-' : '') + filteredValue;
        uniqueValues.add(filteredValue);
      }
    }
  });

  return filteredValues;
}
