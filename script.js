const fileInput = document.querySelector(".file-input"),
filterOptions = document.querySelectorAll(".filter button"),
previewImg = document.querySelector(".preview-img img"),
chooseImgBtn = document.querySelector(".choose-img"),
filterSlider = document.querySelector(".filter-info .input"),
filterName = document.querySelector(".filter-info .name");


const loadImage = () => {                           //3
    let file = fileInput.files[0];                 //getting user selected file
    if(!file) return;                              // return if user hasnt selected file
    previewImg.src = URL.createObjectURL(file);   //passing file url as preview img src
    previewImg.addEventListener("load", ()=>{     //resim secildikten sonra pasif olan butonlar aktif hale geliyor
        document.querySelector(".container").classList.remove("disable");
    })
}

filterOptions.forEach(option => {          //4
    option.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        option.classList.add("active");
        filterName.innerText = option.innerText
    })

}) 

const updateFilter = ()=>{
    console.log(filterSlider.value)
}

fileInput.addEventListener("change", loadImage); // 2
filterSlider.addEventListener("input", updateFilter); //5
chooseImgBtn.addEventListener("click", () => fileInput.click());  // 1






//fonksiyon addeventlistener in altina gelince calismiyor. fonksiyon üstte olmali.