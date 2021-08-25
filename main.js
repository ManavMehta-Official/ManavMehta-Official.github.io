var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')



if (toastTrigger == true) {
toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}) 
if (toastTrigger == false) {
    toastLiveExample.style.display = 'none';
}
}




function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel-mat');
    var instances = M.Carousel.init(elems, options);
  });
