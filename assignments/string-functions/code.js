const findFnord = (s) => {
  return s.indexOf('fnord')
}

const firstAndLast = (s) => {
  return s.substring(0,1)+s.substring(s.length-1)
}

const swapFrontAndBack = (s) => {
  return s.substring(3)+s.substring(s.length -2)
}