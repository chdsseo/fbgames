document.addEventListener("DOMContentLoaded", function() {
    var installBtn = document.getElementById('install-btn');

    if (installBtn) {
        installBtn.addEventListener('click', function() {
            var targetURL = "https://7lot7.com/";
            window.location.href = targetURL;
        });
    } else {
        console.error("按钮不存在！");
    }
});
