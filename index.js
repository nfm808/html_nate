'use strict'

//transition new DOM elements
function createNewPage(string, num) {
  console.log(`createNewPage() ran`);
  let svg = DATA[`${num}`][`${string}`][1];
  let nav = DATA[`${num}`][`${string}`][0];
  

};
//welcome message animation
function welcomeAnimation() {
  let timer = setTimeout(e, 2000);
  function e() {
    $('.welcome').animate({fontSize: "4rem"}, 1000);
    clearTimeout(timer);
  };
  let timer2 = setTimeout(f, 10000);
  function f() {
    $('.welcome').animate({fontSize: "5rem"}, 200);
    clearTimeout(timer2);
    fadeOut('welcome');
    let timer3 = setTimeout(g, 100);
    function g() {
      $('.welcome').remove();
      clearTimeout(timer3);
    };
  };
};
//nav grow in transition
function navGrow() {
  window.setTimeout(e, 16000)
  function e() {
    $(`li`).animate({fontSize: "4rem"}, 1000);
  };
}
//nav fade out transition
function navFadeOut() {
  $(`#nav`).animate({opacity: 0}, 1100);
};
//font size increase
function fontGrow(string) {
    $(`#${string}`).animate({fontSize: "5.6rem"}, 800);
    $(`#${string}`).animate({fontSize: "5rem"}, 1);
};

//fade out background elements
function fadeOut(string) {
  $(`.${string}`).animate({opacity: 0}, 700);
};
//button click listener
function buttonClick() {
  let current = $('body').data("id");
  let target = "";
  let index = 2;
  $('.navbutton').click(function() {
    target = (this.id);
    fadeOut(current);
    fontGrow(target);
    navFadeOut();
    current = target;
    createNewPage(target, index);
  });
};
// svg click for audio
function audioClick() {
  let audio = new Audio('assets/audio/sailboat.mp3')
  $('.sun, #sun, #speaker').click(function() {
    audio.play();
  });
};
function handlePage() {
  welcomeAnimation();
  buttonClick();
  audioClick();
  navGrow();
  findPathLength();
  // addElement();
  // findPathLength(volcano);
};

// find path length of svg
function findPathLength() {
  let path = document.querySelector(`.sun path`);
  let total_length = path.getTotalLength();
  Math.round(total_length);
  console.log(total_length);
}


$(handlePage());