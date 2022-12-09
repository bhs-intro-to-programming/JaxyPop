const needHeavyCoat = (prsnOutside,smwhereCold) => {
  return prsnOutside && smwhereCold
}

const needSunscreen = (beach,skiing) => {
  return beach || skiing 
}

const needMittens = (outside,warm) => {
  return outside || !warm
}

const isVenomous = (striped,blueHead) => {
  if (striped && blueHead){
    return true
  }
  if (!striped && blueHead){
    return false
  }
}

const okaySpeed = (pSpeed,sCar) => {
  return (pSpeed > sCar -10) && (pSpeed < sCar +10)
}

const twiceAsExpensive = (price1,price2 ) => {
  return (price1 > price2 *2) 
}

const winningRecord = (win,loss,tie) =>{
  return win >(loss+tie) 
}

const isMagicNumber = (numbs) => {
  if (numbs === 42 ){
    if (numbs === 17)
  return true}
}
