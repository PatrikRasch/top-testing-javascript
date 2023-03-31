const arr = [3, 1, 7, 9, 20];

const analyzeArray = (arr) => {
  let acc = 0;
  let smallest = arr[0];
  let biggest = arr[0];
  arr.forEach((item) => {
    if (item < smallest) smallest = item; // Finds smallest value
    if (item > biggest) biggest = item; // Finds biggest value
    acc += item;
  });
  const average = acc / arr.length; // Gets the average

  const object = { average: average, min: smallest, max: biggest, length: arr.length };
  console.table(object);
  return object;
};

analyzeArray(arr);

export { analyzeArray };
