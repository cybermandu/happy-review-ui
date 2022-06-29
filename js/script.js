$(document).on("input", "input:file", function(e) {
  /*let fileName = e.target.files[0].name;
  alert('The file name is : "' + fileName);*/
  $('#fileUploadHandler').addClass('loading');
  $('#fileUploadHandler').html('<img src="images/loading.svg" alt="" />');

  const timeout = setTimeout(uploadComplete, 5000);
});

function uploadComplete() {
  $('#fileUploadHandler').removeClass('loading');
  $('#fileUploadHandler').addClass('complete');
  $('#fileUploadHandler').html('Screen Recording Uploaded <img src="images/tick.svg" alt="" />');
}

let empty = true;
let submitted = true;

function isEmpty() {
  let file = $("#fileUpload").val();
  let resultAccuracy = $("input[name='result-accuracy']:checked").val();
  let memberSupport = $("input[name='member-support']:checked").val();
  let turnaroundTime = $("input[name='turnaround-time']:checked").val();
  let feedback = $("#feedback").val();
  let email = $('#email').val();
  if(file.length == "" || resultAccuracy.length == "" || memberSupport.length == "" || turnaroundTime.length == "" || feedback.length == "" || email.length == "") {
    $('.error').addClass('show');
    $('.missing').addClass('show');
    empty = true;
  } else {
    $('.error').removeClass('show');
    $('.missing').removeClass('show');
    empty = false;
  }
}

function validateSubmitted() {
  let email = $('#email').val();
  if(email == "hello@legitmark.com") {
    $('.error').addClass('show');
    $('.submitted').addClass('show');
    submitted = true;
  } else {
    $('.error').addClass('show');
    $('.submitted').removeClass('show');
    submitted = false;
  }
}

$(document).ready(function () {
  $("#submitBtn").click(function (e) {
    e.preventDefault();
    isEmpty();
    validateSubmitted();
    if(!empty && !submitted) {
      window.location.href = "submitted.html";
    }
  });

  let shareData = {
    title: 'Legitmark',
    text: 'Trusted Sneaker Authentication',
    url: 'https://legitmark.com/',
  }
  $("#shareBtn").click(function() {
    navigator.share(shareData)
    .then(() =>
      console.log('Shared successfully')
    )
    .catch((e) =>
      console.log('Error: ' + e)
    )
  })
});