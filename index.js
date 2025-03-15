"use strict";
// move the view around between absolutely
// positioned elements
function handleViewChange() {
  let button = "";
  $(".navbutton").click(function () {
    button = this.id;
    $(".container").toggleClass(this.id);
  });
  $(".back-button").click(function () {
    $(".container").toggleClass(button);
  });
}
// handle modal
// when adding additional portfolio pieces
// will create an object variable to deal with
// updating which modal content is generated
function handleModal() {
  //open modal
  $("#ear-training-button").click(function () {
    $(".modal").show(400);
  });
  //close modal
  $(".close-button").click(function () {
    $(".modal").hide(400);
  });
}
//handle keyboard navigation
function handleKeyboardNav() {
  console.log(`handleKeyboardNav() ran`);
}
//--contact form--
function handleSubmitForm() {
  //submit listener
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();

    //validate the submit form
    if (validateForm() === true) {
      console.log("handleSubmitForm Ran: ");
      let formData = {
        access_key: "5c1f204f-8111-458b-b614-b15f735c3746",
        subject: "htmlnate form submission",
        website: "htmlnate.com",
        name: e.target[0].value,
        email: e.target[1].value,
        message: e.target[2].value,
        apiKey: "7c855468-9129-4b85-b26a-4736593670a4",
      };
      const answer = 42;
      if (e.target[3].value !== answer) {
        $("#form-status").text("Something Went Wrong!");
        $("form").hide();
        $("#form-status").show();
        return;
      }
      const body = JSON.stringify(formData);
      console.log("formData: ", formData);
      fetch("https://mailer.luxurysandbox.com/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "5c1f204f-8111-458b-b614-b15f735c3746",
        },
        body: body,
      })
        .then(async response => {
          let json = await response.json();
          if (response.status == 200) {
            $("#form-status").text("Submission Successful");
            $("form").hide();
            $("#form-status").show();
          } else {
            // console.log(response);
            $("#form-status").text(json.message);
            $("form").hide();
            $("#form-status").show();
          }
        })
        .catch(error => {
          // console.log(error);
          $("#form-status").text("Something Went Wrong!");
          $("form").hide();
          $("#form-status").show();
        });
    } else {
      console.log(`handleSubmitForm() was a fail`);
    }
  });
}
//validate the email
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}
//validate form submission
function validateForm() {
  let name = $("#name").val();
  let email = $("#email").val();
  let message = $("#message").val();
  if (name === "" || name === "Your Name") {
    $("#name-label").text(`Required`);
    $("#name-label").css({ color: "red", "font-size": "2rem" });
    $("#name").focus();
    return false;
  }
  if (name !== "" || name !== "Your Name") {
    $("#name-label").text(`Valid`);
    $("#name-label").css({ color: "green", "font-size": "2rem" });
  }
  if (email == "" || email == "Your Email") {
    $("#email-label").text(`Valid Email Required`);
    $("#email-label").css({ color: "red", "font-size": "2rem" });
    $("#email").focus();
    return false;
  }
  if (validateEmail(email) === false) {
    $("#email-label").text(`Valid Email Required`);
    $("#email-label").css({ color: "red", "font-size": "2rem" });
    $("#email").focus();
    return false;
  }
  if (validateEmail(email) === true) {
    $("#email-label").text(`Valid`);
    $("#email-label").css({ color: "green", "font-size": "2rem" });
  }
  if (message === "" || message === "Your Message") {
    $("#message-label").text(`Required`);
    $("#message-label").css({ color: "red", "font-size": "2rem" });
    $("#message").focus();
    return false;
  }
  if (message !== "" || message !== "Your Name") {
    $("#message-label").text(`Valid`);
    $("#message-label").css({ color: "green", "font-size": "2rem" });
  }
  return true;
}
// --end contact form--

//transition new DOM elements
function createNewPage(string, num) {
  console.log(`createNewPage() ran`);
  let svg = DATA[`${num}`][`${string}`][1];
  let nav = DATA[`${num}`][`${string}`][0];
  let navGen = setTimeout(a, 1000);
  let bodyGen = setTimeout(b, 1000);
  function a() {
    $("body").append(nav);
    fadeInBackground();
    resetFontSize();
    clearTimeout(navGen);
  }
  function b() {
    $("body").append(svg);
    clearTimeout(bodyGen);
    fadeInBackground(string);
  }
}
//change DOM data
function changeDomValue(string) {
  $("body").data("id", `${string}`);
}
//remove elements from DOM
function removeDOM(string) {
  $(`.${string}`).remove();
}
//nav grow in transition
function navGrow() {
  // window.setTimeout(e, 16000)
  window.setTimeout(e, 100);
  function e() {
    $(`.nav-item`).children().animate({ fontSize: "3rem" }, 1000);
  }
  window.clearTimeout(e);
}
//remove nav element
function removeNavElement() {
  let timer = setTimeout(e, 200);
  function e() {
    $(`nav`).remove();
    clearTimeout(timer);
  }
}
//nav fade out transition
function navFadeOut() {
  $(`#nav`).animate({ opacity: 0 }, 1000);
}
//font size increase
function fontGrow(string) {
  $(`#${string}`).animate({ fontSize: "5.5rem" }, 800);
  $(`#${string}`).animate({ fontSize: "5rem" }, 1);
  console.log(
    `fontGrow() ran expected: '5rem', actual: '${$(`${string}`).css(
      "fontSize"
    )}' string: ${string}`
  );
}
//reset font size
function resetFontSize() {
  $(`li`).animate({ fontSize: "5rem" }, 1);
  console.log(
    `resetFontSize() ran expected '5rem' actual: '${$("#nav").css(
      "font-size"
    )}'`
  );
}
//navigation fade in
function navFadeIn(string) {
  $(`#nav`).animate({ opacity: 1 }, 700);
}
//fade out background elements
function fadeOut(string) {
  $(`.${string}`).animate({ opacity: 0 }, 700);
  console.log(
    `fadeOut() ran. expected: '0' actual: '${$(`${string}`).css("opacity")}'`
  );
}
//fade in background elements
function fadeInBackground(string) {
  $(`.${string}`).animate({ opacity: 1 }, 7000);
  console.log(
    `fadeInBackground ran expected: '1' actual: '${$(".background").css(
      "opacity"
    )}'`
  );
}

function renderPortfolioItems() {
  const portfolioItems = [
    {
      img: "konasuncleaning.jpg",
      heading: "Kona Sun Cleaning",
      technology: "NextJS | Tailwind CSS",
      body: "Created a performant NextJS site for a local window cleaning business and setup google ads.",
      liveSite: "konasuncleaning.com",
    },
    {
      img: "alottawoodfiredpizza.jpg",
      heading: "Alotta Wood Fired Pizza",
      technology: "NextJS | Tailwind CSS",
      body: "Created a performant NextJS site for a wood fired pizza business in Portland, OR.",
      liveSite: "alottawoodfiredpizza.com",
    },
    {
      img: "amygreenwellgarden.jpg",
      heading: "Amy Greenwell Ethnobotanical Garden",
      technology: "NextJS | Tailwind CSS | Custom API",
      body: "Created a performant NextJS site for a local non-profit garden. Incorporated a walking tour for blended reality.",
      liveSite: "amygreenwell.garden",
    },
    {
      img: "takethestressoff.jpg",
      heading: "Take The Stress Off",
      technology: "NextJS | Tailwind CSS",
      body: "Created a performant NextJS site for a mental health professional practice.",
      liveSite: "takethestressoff.com",
    },

    {
      img: "konacoastplumbing.jpg",
      heading: "Kona Coast Plumbing",
      technology: "NextJS | Tailwind CSS",
      body: "Created a performant NextJS site for a local family-owned plumbing business.",
      liveSite: "konacoastplumbing.com",
    },
    {
      img: "luckycathawaii.jpg",
      heading: "Lucky Cat Boutique",
      technology: "Shopify",
      body: "Migrated from Squarespace and Square to Shopify and Shopify POS.",
      liveSite: "luckycathawaii.com",
    },
    {
      img: "apexhomeinspections.jpg",
      heading: "Apex Home Inspections",
      technology: "NextJS | Directus | Custom Express API | Tailwind CSS",
      body: "Created a highly performant NextJS website and headless CMS for a home inspection business.",
      liveSite: "apexinspectionshi.com",
    },
    {
      img: "pc911hawaii.jpg",
      heading: "PC911 Hawaii",
      technology: "NextJS | Tailwind CSS",
      body: "Created a highly performant NextJS website for a local computer repair shop.",
      liveSite: "pc911hawaii.com",
    },
    {
      img: "malamamushrooms.jpg",
      heading: "Malama Mushrooms",
      technology: "Liquid | Shopify",
      body: "Updated their design to the Shopify 2.0 and optimized speed.",
      liveSite: "malamamushrooms.com",
    },
    {
      img: "francenehart.jpg",
      heading: "Francene Hart Visionary Artist",
      technology: "Liquid | Shopify",
      body: "Migrated site from WordPress to Shopify resulting in boosted efficiency and conversions.",
      liveSite: "francenehart.com",
    },
    {
      img: "bigislandcleaners.jpg",
      heading: "Big Island Cleaners",
      technology: "WordPress",
      body: "Created a clean performant WordPress site for a local cleaning business on the Big Island resulting in them securing multiple large cleaning clients.",
      liveSite: "bigislandcleaners.com",
    },
    {
      img: "vanceshepperson.jpg",
      heading: "Vance Shepperson",
      technology: "WordPress | WooCommerce",
      body: "Built an ecommerce site to better market and sell all versions of this author's book series.",
      liveSite: "vanceshepperson.com",
    },
    {
      img: "bigislandyoga.jpg",
      heading: "Big Island Yoga",
      technology: "WordPress",
      body: "Built an optimized web presence for this local non-profit yoga studio to help market and grow their membership.",
      liveSite: "bigislandyoga.com",
    },
    {
      img: "christchurchkona.jpg",
      heading: "Christ Church Episcopal Kona",
      technology: "WordPress",
      body: "Built an optimized web presence for this local non-profit church and helped maintain their offince networking.",
      liveSite: "christchurchkona.com",
    },
  ];
  const parentElement = $(".portfolio-panel-items");
  console.log("renderPortfolioItems ran: ", parentElement);

  for (let i = 0; i < portfolioItems.length; i++) {
    parentElement.append(`
      <li class="portfolio-panel--item">
              
              <figure class="portfolio--img-container">
                <img
                  class="portfolio--img"
                  src="assets/img/portfolio/${portfolioItems[i].img}"
                />
              </figure>
              <div class="portfolio--item-details">
                <h3>${portfolioItems[i].heading}</h3>
                <p class="portfolio-panel-text">
                  Technologies Used: ${portfolioItems[i].technology}
                </p>
                
                <p class="portfolio-panel-text">
                  Live Site:
                  <a href="https://${portfolioItems[i].liveSite}" target="_blank">
                    ${portfolioItems[i].liveSite}
                  </a>
                </p>
                
                <p class="portfolio-panel-text">
                <br/>
                  ${portfolioItems[i].body}
                </p>
                <div class="line"></div>
              </div>
            </li>
      `);
  }
}

// svg click for audio
function audioClick() {
  let audio = new Audio("assets/audio/sailboat.mp3");
  $(".sun, #sun").click(function () {
    audio.play();
  });
}
function handlePage() {
  handleModal();
  handleSubmitForm();
  // handleKeyboardNav();
  handleViewChange();
  audioClick();
  navGrow();
  renderPortfolioItems();
  // findPathLength();
  // addElement();
}

// find path length of svg
function findPathLength() {
  let path = document.querySelector(`.sun path`);
  let total_length = path.getTotalLength();
  Math.round(total_length);
  console.log(total_length);
}

$(handlePage());
