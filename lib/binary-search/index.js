module.exports = (sequance, el) => {
  let start = 0;
  let end = sequance.length - 1;
  let mid = Math.round((start + end) / 2);
  console.log('mid', mid);
  console.log('start', start);
  console.log('end', end);

  while (start <= end) {
      if (sequance[mid] === el) return mid;
        else if (sequance[mid] > el)end = mid - 1;
            else start = mid + 1;
      mid = Math.round((end + start) / 2);
  }
   return -1;
};
