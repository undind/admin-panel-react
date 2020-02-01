export const getPartsOfArray = (arr, index) => {
  if (!Array.isArray(arr) || typeof index !== 'number') return arr;

  return index < 0 ? arr.slice(index) : arr.slice(0, index);
}

export const getActiveLink = (link, itemLink) => {
  return link.includes(itemLink);
} 