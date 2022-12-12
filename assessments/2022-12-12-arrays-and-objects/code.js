const makeRow = () => {
  ['','','']
}
const makeBoard = () => {
 [
  makeRow, makeRow, makeRow,
  makeRow,makeRow , makeRow,
  makeRow, makeRow, makeRow
]
}
const makeMove = (x , y , o) => {
  let makeMove = {'mark' : x , 'row' : y , 'column' : o }
  return makeMove
}

const 