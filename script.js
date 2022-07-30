const fileInput = document.querySelector(".file-input");
previewImg = document.querySelector(".preview-img img");
chooseImgBtn = document.querySelector(".choose-img");

const loadImage = () => {
    let file = fileInput.files[0]
    if(!file) return;
    previewImg.src = URL.createObjectURL(file)
}

fileInput.addEventListener("change", loadImage)
chooseImgBtn.addEventListener("click", () => fileInput.click());