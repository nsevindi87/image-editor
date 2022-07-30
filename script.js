const fileInput = document.querySelector(".file-input");
filterOptions = document.querySelector(".filter button");
previewImg = document.querySelector(".preview-img img");
chooseImgBtn = document.querySelector(".choose-img");

const loadImage = () => {
    let file = fileInput.files[0] //getting user selected file
    if(!file) return;       // return if user hasnt selected file
    previewImg.src = URL.createObjectURL(file);   //passing file url as preview img src
    previewImg.addEventListener("load", ()=>{
        document.querySelector(".container").classList.remove("disable")
    })

}

filterOptions.forEach(option => {
    option.addEventListener("click", () => {      //adding click event listener to all filter buttons
        document.querySelector(".filter .active").classList.remove(".active")
        option.classList.add(".active")
    });
});

fileInput.addEventListener("change", loadImage)
chooseImgBtn.addEventListener("click", () => fileInput.click());