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
  let move = ('mark' = x , 'row' = y , 'column' = o )