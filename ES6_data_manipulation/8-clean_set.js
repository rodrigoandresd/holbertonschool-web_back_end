export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';
  const filteredValues = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      const restOfString = value.substring(startString.length);
      const nextCharIndex = restOfString.indexOf('-') + 1;
      if (nextCharIndex && restOfString.charCodeAt(nextCharIndex) >= 65 && restOfString.charCodeAt(nextCharIndex) <= 90 || restOfString.charCodeAt(nextCharIndex) >= 97 && restOfString.charCodeAt(nextCharIndex) <= 122) {
        filteredValues.push(restOfString.substring(nextCharIndex));
      }
    }
  });

  return filteredValues.join('-');
}
