'use strict'

// retrieves the html to be added to DOM
function getHtml() {
  //   console.log(svg[0]["sailboat"]);
};
// adds the element to DOM
// function addElement() {
//   getElement('.sailboat')
// };
//transition out elements
function transitionOut() {
  let speed = 200
  $('#sailboat', '#volcano').animate('left: 140%vw',speed)
};

//button click
function buttonClick() {
  $('button').click(function() {
    return (this.id);
  });
};
// svg click
function svgClick() {
  let audio = new Audio('assets/audio/exp1.mp3')
  $('.sun, #sun').click(function() {
    audio.play();
    console.log(audio);
  });
};
function handlePage() {
  // checkString();
  buttonClick();
  svgClick();
  // addElement();
  findPathLength();
  console.log(findPathLength());
};

// find path length of svg
function findPathLength() {
  let path = document.querySelector(".sun path");
  let total_length = path.getTotalLength();
  return Math.round(total_length);
  
}


$(handlePage());