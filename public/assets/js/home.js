/************************************** 
global variables
**************************************/

let newPostButtonEl=document.querySelector("#newPostButton");
newPostButtonEl.addEventListener("click",newPostButtonClick);
let createPostButtonEl=document.querySelector("#createPostButton");
createPostButtonEl.addEventListener("click",createPostButtonClick);
let editPostButtonEl=document.querySelector("#editPostButton");
editPostButtonEl.addEventListener("click",editPostButtonClick);
let deletePostButtonEl=document.querySelector("#deletePostButton");
deletePostButtonEl.addEventListener("click",deletePostButtonClick);

let createCommentButtonEl=document.querySelector("#createCommentButton");
createCommentButtonEl.addEventListener("click",createCommentButtonClick);

let blogCardE1s=document.querySelectorAll(".clsBlogCard");
  blogCardE1s.forEach(element => {
    element.addEventListener("click",blogCardClick);
  });




/************************************** 
Event handlers for posts
**************************************/
function newPostButtonClick(event) {
    alert("event " +event.currentTarget.value+" open to add new post");
    console.log(event.currentTarget);
  }
function createPostButtonClick(event) {
    alert("event " +event.currentTarget.value+" post add");
    console.log(event.currentTarget);
  }
  function editPostButtonClick(event) {
    alert("event " +event.currentTarget.value+" post edit");
    console.log(event.currentTarget);
  }
  function deletePostButtonClick(event) {
    alert("event " +event.currentTarget.value+" post delete");
    console.log(event.currentTarget);
  }

  function blogCardClick(event) {
    alert("event " +event.currentTarget.value+" has been clicked "+event.currentTarget);
    console.log(event.currentTarget);
  }


/************************************** 
Event handlers for comments
**************************************/
function createCommentButtonClick(event) {
    alert("event " +event.currentTarget.value+" comment add");
    console.log(event.currentTarget);
  }