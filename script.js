const fileInput = document.querySelector(".file-input");
chooseImgBtn = document.querySelector(".choose-img");
previewImg = document.querySelector(".preview-img img");


const loadImage = () => {
    let file = fileInput.files[0] //getting user selected file
    if(!file) return;       // return if user hasnt selected file
    previewImg.src = URL.createObjectURL(file);   //passing file url as preview img src
    previewImg.addEventListener("load", ()=>{
        document.querySelector(".container").classList.remove("disable")
    })
}
chooseImgBtn.addEventListener("click", () => fileInput.click());


fileInput.addEventListener("change", loadImage)


/* filterOptions = document.querySelector(".filter button");




filterOptions.forEach(option => {
    option.addEventListener("click", () => {      //adding click event listener to all filter buttons
        document.querySelector(".filter .active").classList.remove(".active")
        option.classList.add(".active")
    });
});

 */

//fonksiyon addeventlistener in altina gelince calismiyor. fonksiyon üstte olmali.