const fileInput = document.querySelector(".file-input");
chooseImgBtn = document.querySelector(".choose-img");
previewImg = document.querySelector(".preview-img img");
filterOptions = document.querySelector(".filter button");


const loadImage = () => {         //3
    let file = fileInput.files[0] //getting user selected file
    if(!file) return;       // return if user hasnt selected file
    previewImg.src = URL.createObjectURL(file);   //passing file url as preview img src
    previewImg.addEventListener("load", ()=>{     //resim secildikten sonra pasif olan butonlar aktif hale geliyor
        document.querySelector(".container").classList.remove("disable")
    })
}

filterOptions.forEach(option => {                 // 4
    option.addEventListener("click", () => {      //adding click event listener to all filter buttons
        document.querySelector(".filter .active").classList.remove(".active")   // active class siliniyor
        option.classList.add(".active")    // tiklanana active classi ataniyor
    });
});


fileInput.addEventListener("change", loadImage) // 2

chooseImgBtn.addEventListener("click", () => fileInput.click());  // 1






//fonksiyon addeventlistener in altina gelince calismiyor. fonksiyon üstte olmali.