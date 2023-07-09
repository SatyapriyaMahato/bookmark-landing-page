// menu section
const menuBtn = document.querySelector(".menu-button");
menuBtn.addEventListener("click", function () {
    document.querySelector(".site-logo").classList.toggle("alt-logo");
    document.body.classList.toggle("fixed-position");
})

// feature section
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


// faq section

const qs = [...document.querySelectorAll(".questions")];
const arrowIcons = [...document.querySelectorAll(".faq-arrow")];

qs.forEach(function (q, i) {
    q.querySelector(".q-head").addEventListener("click", function () {
        q.querySelector(".faq-arrow").classList.toggle("rotate");
        let content = q.querySelector(".answer");
        faqAnimation(content);
    })
})
arrowIcons.forEach(function (a, i) {
    a.addEventListener("click", function () {
        a.classList.toggle("rotate");
        let content = a.nextElementSibling.nextElementSibling;
        faqAnimation(content);
    })
})

function faqAnimation(content) {
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}