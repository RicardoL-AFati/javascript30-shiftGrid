// last clicked div
let lastSelected;

function handleSelect(e) {
  // flag variable initialized to false 
  let inBetween = false;
  // Toggling selected on current clicked div
  this.classList.toggle('selected');
  /* If click had shift key held down and 
     clicked div is being selected (not unselected) */
  if(e.shiftKey && this.classList.contains('selected')) {
    // Loop of every div
    boxes.forEach(box => {
      // If current div is the one clicked or the last one selected  
      if (box === this || box === lastSelected) {
        // 'inbetween' flag is set to what it's not currently  
        inBetween = !inBetween;    
      }
      // if current div is flagged as 'inbetween' - add selected class
      if (inBetween) box.classList.add('selected');
    });    
  }
  // Sets clicked div to lastSelected
  lastSelected = this;
}
// Selecting all divs inside grid and adding click event
const boxes = document.querySelectorAll('#grid div');
boxes.forEach(box => box.addEventListener('click', handleSelect));