var backgoundImg;

function addPost(){
var postTitle = document.getElementById("title");
var postDescription = document.getElementById("description");

var postList = document.getElementById("postList");
// var selectedImageSrc = "";

if(postTitle.value && postDescription.value){
postList.innerHTML += `<div class="card p-last"  style="background-image:url(${backgoundImg}) ; background-size: cover; background-repeat: no-repeat; background-position: center;">
                        <div class="card-header fontStyle">
                            @Posts
                        </div>
                        <div class="card-body gap-3" >
                            <h5 class="card-title fontStyle">${postTitle.value}</h5>
                            <p class="card-text fontStyle">${postDescription.value}</p>
                        </div>
                        <div class= "p-3 gap-2" >
                        <button type="button" class="btn btn-success" onclick="editPost(event)" >Edit</button>
                        <button type="button" onclick="delPost(event)" class="btn btn-danger">Delete</button>
                        </div>`
}else{
    Swal.fire({
        title: "Empty Field",
        text: "Please! fill some data?",
        icon: "question"
      });
}
    postTitle.value = "";
   postDescription.value = "";
}

// function delPost(event){
//     event.target.parentNode.parentNode.remove();
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire({
//             title: "Deleted!",
//             text: "Your file has been deleted.",
//             icon: "success"
//           });
//         }
//       });
// }

function delPost(event) {
	Swal.fire({
		title: 'Do you want to delete the post',
		showDenyButton: true,
		confirmButtonText: 'YES',
		denyButtonText: `NO`,
	}).then((result) => {
		if (result.isConfirmed) {
			event.target.parentNode.parentNode.remove();
		} else if (result.isDenied) {
		}
	});
}


function selectImg(url) {
	backgoundImg = url;
	var images = document.getElementsByClassName('bg-img');
	for (var i = 0; i < images.length; i++) {
		images[i].className = ' bg-img';
	}
	event.target.className += ' image-list-selected';
}


 
function editPost(event){
  var postEdit = event.target.parentNode.parentNode;
  var currentPostTitle = postEdit.children[1].children[0].innerText;
  var currentPostDescription = postEdit.children[1].children[1].innerText;

  Swal.fire({
      title: 'Edit Post',
      html: `
          <input type="text" id="editTitle" class="form-control" value="${currentPostTitle}">
          <textarea id="editDescription" class="form-control mt-3">${currentPostDescription}</textarea>
      `,
      confirmButtonText: 'Update',
      showCancelButton: true
  }).then((result) => {
      if (result.isConfirmed) {
          postEdit.children[1].children[0].innerText = document.getElementById("editTitle").value;
          postEdit.children[1].children[1].innerText = document.getElementById("editDescription").value;
      }

      // save text

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });

  });

}

// function setBackgroundImage(src) {
//   selectedImageSrc = src; 
  
//   document.getElementById("imagePreview").innerHTML = `<img src="${src}" alt="Selected Background" style="width: 60px; height: 50px; border: 1px solid #ccc;">`;
// }


