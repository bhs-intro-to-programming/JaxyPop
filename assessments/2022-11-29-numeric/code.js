const totalEggs = (hardEggs,softEggs) => {
  return hardEggs + softEggs 
}

const chocolatesPerPerson = (chocos,numPeople) => {
  return Math.floor(chocos / numPeople)
}

const extraChocolates = (chocos,numPeople) => {
  return (chocos%numPeople)
}

const leftOut = (chocos,numPeople) => {
  if(chocos > numPeople) 
    return 0;
    else{
      return (numPeople-chocos);
    };

};

const probabilityAllHeads = (heads) => {
  return .5 ** heads
}