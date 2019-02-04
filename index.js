'use strict'

// retrieves the svg strings to be added to DOM
function getElement(string) {
  //   console.log(svg[0]["sailboat"]);
};
// adds the element to DOM
function addElement() {
  getElement('sailboat')
};
// determine what page site is on
function determinePage() {
  return $("html").data("page");
};
// get elements from DATA array
function getElementsFromData() {
  let locale = determinePage();
  let pageElements = DATA.filter(function (where) {
    return where.page == locale;
  });
  return pageElements;
}
function handlePage() {
  // checkString();
  addElement();
  getElementsFromData();
  findPathLength();
  console.log(findPathLength());
  console.log(getElementsFromData());
};

// find path length of svg
function findPathLength() {
  let path = document.querySelector(".sailboat path");
  let total_length = path.getTotalLength();
  return Math.round(total_length);
  
}


$(handlePage());