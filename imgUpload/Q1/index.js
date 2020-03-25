function selectFile(event) {
  let tempFile = document.getElementById('fileUpload').files[0]
  var reads = new FileReader();
  reads.readAsDataURL(tempFile);
  reads.onload = function(e) {
    document.querySelector("img").style.display = "block"
    document.querySelector("img").src=e.target.result;
  }
}