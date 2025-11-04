document.addEventListener("DOMContentLoaded", function() {
    var progressBars = document.querySelectorAll('.progress-circle .progress-bar');
    progressBars.forEach(function(progressBar) {
        var percent = progressBar.getAttribute('data-percent');
        var rotateElement = progressBar.querySelector('.rotate');
        rotateElement.style.transform = 'rotate(' + (percent * 3.6) + 'deg)';
    });
});
