// const cookieBanner = document.querySelector(".cookie_banner_container");
// const cookieBtn = document.querySelector(".button3");


// setTimeout(() => {
//     if(!localStorage.getItem("bannerDisplayed"))
//         cookieBanner.classList.add("active");
// }, 3000);

// cookieBtn.addEventListener("click", () => {
//     cookieBanner.classList.remove("active");
//     localStorage.setItem("bannerDisplayed", "true");
// });

const storageType = localStorage;
const consentPropertyName = 'Insimplex';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);

function localkeeper(){
    console.log("Yes");
    const consent = storageType.getItem(consentPropertyName, "true");
    if(shouldShowPopup()){
        if(!consent){
            storageType.setItem(consentPropertyName, "true");
        }
    }
}