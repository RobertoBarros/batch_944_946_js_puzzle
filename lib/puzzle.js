const button = document.getElementById('show-hint');
const hint = document.querySelector('.hint');


const canMove = (td) => {
  const tdColumn = td.cellIndex;
  const tdRow = td.parentElement.rowIndex

  // console.log(`Click in row: ${tdRow} - col: ${tdColumn}`)

  const empty = document.querySelector('.empty');

  const emptyColumn = empty.cellIndex;
  const emptyRow = empty.parentElement.rowIndex

  // console.log(`Empty in row: ${emptyRow} - col: ${emptyColumn}`)

  return ( tdColumn === emptyColumn &&
        ( tdRow + 1 === emptyRow || tdRow - 1 === emptyRow  ) ) ||
         ( tdRow === emptyRow &&
        ( tdColumn + 1 === emptyColumn || tdColumn - 1 === emptyColumn))
}


button.addEventListener('click',(event) => {
  hint.classList.toggle('active');
})


const tds = document.querySelectorAll('td');

tds.forEach((td) => {
  td.addEventListener('click', (event) => {
    if (canMove(td)) {
      console.log('MOVE');

      const empty = document.querySelector('.empty');
      empty.classList.remove('empty');


      td.classList.add('empty');

      const text = td.innerText;

      td.innerText = '';
      empty.innerText = text;



    } else {
      console.log('DONT');
    }
  })
})
