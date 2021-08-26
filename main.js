var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
var exampleEl = document.getElementById('example')
var popover = new bootstrap.Popover(exampleEl, options)


function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}



