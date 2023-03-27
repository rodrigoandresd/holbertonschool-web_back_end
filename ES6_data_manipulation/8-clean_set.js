export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';

  let filteredValues = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      filteredValues += (filteredValues.length > 0 ? '-' : '') + value.substring(startString.length);
    }
  });

  return filteredValues;
};
