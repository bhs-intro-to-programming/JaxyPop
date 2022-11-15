// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (numPeople,numItmes) => {
  return (numPeople % numItmes)
}

const areaOfCircle = (r) => {
  return Math.PI(r)**2;
}

const volumeOfCube = (lengthEdge) => {
  return lengthEdge**3;
}
const populationGrowth =(currentSize,growthRate) => {
  return (currentSize * growthRate);
} 

const earnedRunAverage = (earnedRuns, innings) => {
  return ((earnedRuns * innings)*9);
}
const valueOfJewels = (numberDiamond, numberEmerald, diamondInGold, emeraldInGold) => {
  return (numberDiamond * diamondInGold) + (numberEmerald * emeraldInGold);
}
const payWithOvertime = (hourlyRate, overtime, overtimeRate) => {
  const regular = Math.min(hours, 8);
  const overtime = hours - regular;
  return regular * hourlyRate + overtime * overtimeRate;
};


const firstClassPostage = (weightOunces) => {
  return weightOunces = Math.ceil (weigthOunces) * 24
}

