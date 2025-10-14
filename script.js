window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const content = document.querySelector(".content");

    // Fade out effect
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    // Wait for fade animation to finish, then show content
    setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 800); // Matches CSS transition duration
});
window.addEventListener('load', function () {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});