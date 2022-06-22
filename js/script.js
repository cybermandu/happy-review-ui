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