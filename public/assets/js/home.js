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

let createCommentButtonEls=document.querySelectorAll("#createCommentButton");
createCommentButtonEls.forEach(element =>{
  element.addEventListener("click",createCommentButtonClick);
});

let blogCardE1s=document.querySelectorAll("#blogCard");
  blogCardE1s.forEach(element => {
    element.addEventListener("click",blogCardClick);
  });


/************************************** 
Current values
**************************************/
var currentUser="mark";
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
    alert("event " +event.currentTarget+" has been clicked ");
    //$("#newPostCard").removeClass("clsCardHidden")
    $(this).siblings("div#blogComments").removeClass("clsCardHidden")
    $(this).siblings("div#newCommentCard").removeClass("clsCardHidden")
    //console.log(event.currentTarget);
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


/************************************** 
Comment functions
**************************************/
  function createNewComment(blogid, comment,user) {
    fetch('/api/blogcomment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blogid:blogid, comment: comment, user:user }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('New comment created: ', data);
        $(this).siblings("div#blogComments").addClass("clsCardHidden")
        $(this).siblings("div#newCommentCard").addClass("clsCardHidden")
      })
      .catch(function (error) {
        console.error('Error creating comment: ', error);
      });
  }

  function editComment(id, blogid, comment,user) {
    fetch('/api/blogcomment/'+id, {
      method: 'Put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blogid:blogid, comment: comment, user:user }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('Comment has been updated: ', data);
      })
      .catch(function (error) {
        console.error('Error updating comment: ', error);
      });
  }

  function deleteComment(id, blogid, comment,user) {
    fetch('/api/blogcomment/'+id, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: "",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('Comment has been deleted: ', data);
      })
      .catch(function (error) {
        console.error('Error deleting comment: ', error);
      });
  }

  function getComment(id) {
    fetch('/api/blogcomment/'+id, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      body: "",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('Comment: ', data);
      })
      .catch(function (error) {
        console.error('Error getting comment: ', error);
      });
  }


/************************************** 
Event handlers for comments
**************************************/
function createCommentButtonClick(event) {
  let newComment=$(this).siblings("textarea#inputCreateComment");
  createNewComment(event.currentTarget.value,newComment.val(),currentUser);
  console.log(`New Comment: ${event.currentTarget.value} ${newComment.val}`);
  }