function selectFile(event) {
  let tempFile = document.getElementById('fileUpload').files[0]
  var reads = new FileReader();
  reads.readAsDataURL(tempFile);
  reads.onload = function(e) {
    document.querySelector("#fileImg").style.display = "block"
    document.querySelector("#fileImg").src=e.target.result
    document.getElementById('fileUpload').style.display = "none"
  }
}