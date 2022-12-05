const upToX = (x) => {
  return s.substring (0, s.indexOf('x'))
}

const charactersAround = (x,s) => {
  return s[s.indexOf(x)] , s[s.indexOf(x)]
}

const middle = (s) => {
  return s.substring(s.length /4 , s.length -2 (s.length /4 ));
}

const pair = (s,x) => {
  return s + 'and' + x;
}

const containsX = (s) => {
  if (s.indexOf(x === -1)){
    return false
  }else 
    return true 
};

const slug = (s,x,y) => {
  return s.toLowerCase() +  '-' + x.toLowerCase() +  '-' + y.toLowerCase()
}

const capitalize = (s) => {
  return s.substring(0,1).toUpperCase()+s.substring(1,s.length).toLowerCase()	
}