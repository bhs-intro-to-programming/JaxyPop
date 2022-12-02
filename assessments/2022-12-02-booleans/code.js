const needHeavyCoat = (prsnOutside,smwhereCold) => {
  return prsnOutside && smwhereCold
}

const needSunscreen = (beach,skiing) => {
  return beach || skiing 
}

const needMittens = (outside,warm) => {
  return outside && !warm
}

const isVenomous = (striped,blueHead) => {
  return striped && !blueHead
}

const okaySpeed = (pSpeed,sCar) => {
  return (pSpeed > sCar -11) && (pSpeed < sCar +11)
}