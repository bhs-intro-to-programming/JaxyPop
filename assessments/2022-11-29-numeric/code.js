const totalEggs = (hardEggs,softEggs) => {
  return hardEggs + softEggs 
}

const chocolatesPerPerson = (chocos,numPeople) => {
  return (chocos * (chocos % numPeople) /numPeople)
}