const menuBtn = document.querySelector(".menu-button");
menuBtn.addEventListener("click", function () {
    document.querySelector(".site-logo").classList.toggle("alt-logo");
})

const featureLinks = [...document.querySelectorAll(".feature-link")];
const featureImages = [...document.querySelectorAll(".feature-img")];
const featureH1 = [...document.querySelectorAll(".feature-h1")];
const featurePara = [...document.querySelectorAll(".feature-p")];


featureLinks.forEach(function (link, index) {
    link.addEventListener("click", function () {

        featureImages.forEach(function (image) {
            image.style.display = "none";
        });

        featureImages[index].style.display = "block";

        featureH1.forEach(function (x) {
            x.style.display = "none";
        });

        featureH1[index].style.display = "block";

        featurePara.forEach(function (x) {
            x.style.display = "none";
        });

        featurePara[index].style.display = "block";
    });
});