/************************************** 
global variables
**************************************/

let newPostButtonEl=document.querySelector("#newPostButton");
newPostButtonEl.addEventListener("click",newPostButtonClick);

let createPostButtonEl=document.querySelector("#createPostButton");
createPostButtonEl.addEventListener("click",createPostButtonClick);

let editPostButtonEls=document.querySelectorAll("#editPostButton");
editPostButtonEls.forEach(element => {
  element.addEventListener("click",editPostButtonClick);
});

let deletePostButtonEls=document.querySelectorAll("#deletePostButton");
deletePostButtonEls.forEach(element => {
  element.addEventListener("click",deletePostButtonClick);
});

let blogCardE1s=document.querySelectorAll(".clsCardHeader");
  blogCardE1s.forEach(element => {
    element.addEventListener("click",blogCardClick);
  });


/************************************** 
Current values
**************************************/
var currentPost=0;
var currentComment=0;


/************************************** 
Event handlers for posts
**************************************/
function newPostButtonClick(event) {
$("#newPostCard").removeClass("clsCardHidden")
}

/************************************** 
Post functions
**************************************/
function createPostButtonClick(event) {

    //alert("event " +event.currentTarget.value+" post add");
    console.log(event.currentTarget);
    //createNewPost(inputNewPostTitle,inputNewPostContent,currentUser)
    console.log($("#inputNewPostTitle").val(),$("#inputNewPostContent").val(),currentUser);
    createNewPost($("#inputNewPostTitle").val(),$("#inputNewPostContent").val(),currentUser);
    $("#newPostCard").addClass("clsCardHidden")
  }
  function editPostButtonClick(event) {
   // createNewPost($("#inputNewPostTitle").val(),$("#inputNewPostContent").val(),currentUser);

    let changedContent=$(this).siblings("textarea#inputEditPostContent");
    let changedTitle=$(this).siblings("textarea#inputEditPostTitle");
  //  console.log(event.currentTarget.value)
   // console.log(`${changedTitle.val()} ${changedContent.val()}`);
    editPost(event.currentTarget.value,changedTitle.val(),changedContent.val(),currentUser);
    console.log("edit: "+event.currentTarget.value);
  };

  function deletePostButtonClick(event) {
    deletePost(event.currentTarget.value);
    console.log("delete: "+event.currentTarget.value);
  };

  function blogCardClick(event) {
   // alert("event " +"#editPost"+event.currentTarget.id+" " +event.currentTarget+" has been clicked ");
    $("#editPost"+event.currentTarget.id).removeClass("clsCardHidden")
    //event.currentTarget.siblings("div#editPost").removeClass("clsCardHidden")
    
  }

  function createNewPost(title, content,user) {
    console.log(JSON.stringify({ title:title, content: content, user:user }))
    fetch('/api/blogpost', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title:title, content: content, user:user }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('New post created: ', data);
        location.reload(true);
      })
      .catch(function (error) {
        console.error('Error creating post: ', error);
      });
  }

  function editPost(id, title, content,user) {
    fetch('/api/blogpost/'+id, {
      method: 'Put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title:title, content: content, user:user }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('post has been updated: ', data);
        location.reload(true);
      })
      .catch(function (error) {
        console.error('Error deleting post: ', error);
      });
  }

  function deletePost(id) {
    fetch('/api/blogpost/'+id, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: "",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('post has been deleted: ', data);
        location.reload(true);
      })
      .catch(function (error) {
        console.error('Error deleting post: ', error);
      });
  }
  function getPost(id) {
    fetch('/api/blogpost/'+id, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      body: "",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('post: ', data);
      })
      .catch(function (error) {
        console.error('Error getting post: ', error);
      });
  }

  function main()
  {
    //$("#blogLogo").innerHTML="Your Dashboard" 
    document.querySelector("#blogLogo").innerHTML="Your Dashboard"
    console.log("dashboard main")
  }
  $(document).ready(main);