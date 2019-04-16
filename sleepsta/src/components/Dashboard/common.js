export const setAvg = arr => {
  let total = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].y !== 0) {
      total += arr[i].y;
      count++;
    }
  }
  let average = count === 0 ? 0 : (total / count).toFixed(1);
  return average;
};

export const fontFamily = [
  "Poppins",
  "Roboto",
  "Arimo",
  "Work Sans",
  "Pacifico"
];
