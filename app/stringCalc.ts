export default function add(numbers: string): number|string {
  let count = 0;
   const negativeNums =[];
  for (let i = 0; i < numbers.length; i++) {
    if (parseInt(numbers[i])>0) {
      count = count + parseInt(numbers[i]);
    }
    else if ((numbers[i]==="-")){
        negativeNums.push(parseInt(numbers[i+1]))
        i++;
    }
  }
  if(negativeNums.length) return `negative numbers not allowed ${negativeNums.join(",")}`
  return count;
}
