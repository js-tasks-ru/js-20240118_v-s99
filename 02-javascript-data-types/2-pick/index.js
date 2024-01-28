/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  return Object.fromEntries([...fields].map(field => {
    return Object.entries(obj).find(entry => entry[0] === field);
  }).filter(item => typeof item !== 'undefined'));
};
