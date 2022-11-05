const findFnord = (s) => {
  return s.indexOf('fnord')
}

const firstAndLast = (s) => {
  return s.substring(0,1)+s.substring(s.length-1)
}

const swapFrontAndBack = (s) => {
  return s.substring(s.length /2) + s.substring (0, s.length/2)
}

const stringContains = (a,b) => {
  return
}

const isAllUpperCase = (s) => {
  return s.toUpperCase()===s
}

const capitalize = (s) => {
  return s.substring(0,1).toUpperCase()+s.substring(1,s.length).toLowerCase()	
}

const capitalizeFirstThree = (s) => {
  return s.substring(0,3).toUpperCase()+s.substring(3,s.length).toLowerCase()
}

const allButFirstAndList = (s) => {
  return s.substring(1,s.length-1)
}

const firstThree = (s) => {
  return s.substring((0,3)s.length)
}