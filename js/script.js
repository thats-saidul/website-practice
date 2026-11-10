const showMoreBtn = document.getElementById("showMoreBtn");
const moreInfo = document.getElementById("moreInfo");

showMoreBtn.addEventListener("click", function () {

    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
        showMoreBtn.textContent = "Show More Information";
    }

    else {
        moreInfo.style.display = "block";
        showMoreBtn.textContent = "Show Less Information";
    }

});