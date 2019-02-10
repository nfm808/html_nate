'use strict'

function handleViewChange() {
  let button = ''
    $('.navbutton').click(function() {
      button = this.id;
      console.log(button);
      $('.container').toggleClass(this.id);
    });
    $('.back-button').click(function(){
      $('.container').toggleClass(button);
    });
}
//transition new DOM elements
function createNewPage(string, num) {
  console.log(`createNewPage() ran`);
  let svg = DATA[`${num}`][`${string}`][1];
  let nav = DATA[`${num}`][`${string}`][0];
  let navGen = setTimeout(a, 1000);
  let bodyGen = setTimeout(b, 1000);
  function a() {
    $('body').append(nav);
    fadeInBackground();
    resetFontSize();
    clearTimeout(navGen);
  };
  function b() {
  $('body').append(svg);
    clearTimeout(bodyGen)
    fadeInBackground(string);
  };
};
//change DOM data
function changeDomValue(string) {
  $('body').data("id", `${string}`);
};
//remove elements from DOM
function removeDOM(string) {
  $(`.${string}`).remove();
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
    $('.welcome').animate({fontSize: "4.5rem"}, 200);
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
  // window.setTimeout(e, 16000)
  window.setTimeout(e, 100)
  function e() {
    $(`button`).animate({fontSize: "4rem"}, 1000);
  };
  window.clearTimeout(e);
}
//remove nav element
function removeNavElement() {
  let timer = setTimeout(e, 200);
  function e() {
    $(`nav`).remove();
    clearTimeout(timer);
  };

}
//nav fade out transition
function navFadeOut() {
  $(`#nav`).animate({opacity: 0}, 1000);
};
//font size increase
function fontGrow(string) {
    $(`#${string}`).animate({fontSize: "5.5rem"}, 800);
    $(`#${string}`).animate({fontSize: "5rem"}, 1);
    console.log(`fontGrow() ran expected: '5rem', actual: '${$(`${string}`).css("fontSize")}' string: ${string}`);

};
//reset font size
function resetFontSize() {
  $(`li`).animate({fontSize: "5rem"}, 1);
  console.log(`resetFontSize() ran expected '5rem' actual: '${$('#nav').css("font-size")}'`);
};
//navigation fade in
function navFadeIn(string) {
  $(`#nav`).animate({opacity: 1}, 700);  
}
//fade out background elements
function fadeOut(string) {
  $(`.${string}`).animate({opacity: 0}, 700);
  console.log(`fadeOut() ran. expected: '0' actual: '${$(`${string}`).css("opacity")}'`)
};
//fade in background elements
function fadeInBackground(string) {
  $(`.${string}`).animate({opacity: 1}, 7000);
  console.log(`fadeInBackground ran expected: '1' actual: '${$('.background').css("opacity")}'`);
};
// svg click for audio
function audioClick() {
  let audio = new Audio('assets/audio/sailboat.mp3')
  $('.sun, #sun').click(function() {
    audio.play();
  });
};
function handlePage() {
  // welcomeAnimation();
  // navigationClick();
  handleViewChange();
  audioClick();
  navGrow();
  // findPathLength();
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