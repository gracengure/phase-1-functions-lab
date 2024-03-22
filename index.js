function distanceFromHqInBlocks(pickuplocation) {
  const hqDistance = 42;
  const distance = Math.abs(hqDistance - pickuplocation);
  return distance;
}

console.log(distanceFromHqInBlocks(43, 42));
function distanceFromHqInFeet(value) {
  const val = distanceFromHqInBlocks(value) * 264;
  return val;
}
function distanceTravelledInFeet(start, destination) {
  const feet = Math.abs(destination - start) * 264;
  return feet;
}
console.log(distanceTravelledInFeet(43, 48));
console.log(calculatesFarePrice(43, 44));

function calculatesFarePrice(start, destination) {
  const distanceTravelled = distanceTravelledInFeet(start, destination);

  if (distanceTravelled > 2500) {
    return "cannot travel that far";
  } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
    const nonFreeFeet = distanceTravelled - 400;

    return nonFreeFeet * 0.02;

  } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
    return 25;
  } else if (distanceTravelled < 400) {
    return 0;
  }
}
console.log(calculatesFarePrice(34, 32));
