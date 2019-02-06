'use strict'

// retrieves the svg strings to be added to DOM
function getElement(string) {
  //   console.log(svg[0]["sailboat"]);
};
// adds the element to DOM
function addElement() {
  getElement('sailboat')
};
//play audio
function playAudio() {
  $('#js_play').get(0).play();
};
//handle sun clicks
function clickElement() {
  $('#js_play').get(0).load();
  playAudio();
};
//event listener for svg click
function clickSVG() {
  $('#sun').addEventListener('click', clickElement);
};
// determine what page site is on
// function determineButton() {
//   let page = ;
// };
function handlePage() {
  // checkString();
  addElement();
  findPathLength();
  clickElement();
  console.log(findPathLength());
};

// find path length of svg
function findPathLength() {
  let path = document.querySelector(".sun path");
  let total_length = path.getTotalLength();
  return Math.round(total_length);
  
}


$(handlePage());