let currentImageSrc = '';
let curImageIndex = 0;
const preButton = document.getElementById("preBtn");
const nextButton = document.getElementById("nextBtn");

const imageArray = [
   "Images/facilities-images/image1.jpg",
   "Images/facilities-images/image2.jpg",
   "Images/facilities-images/image3.jpg",
   "Images/facilities-images/image4.jpg",
   "Images/facilities-images/image5.jpg",
   "Images/facilities-images/image6.jpg",
   "Images/facilities-images/image7.jpg",
   "Images/facilities-images/image8.jpg"
];
var allImageContainer = document.getElementById("image-container");
// first method
let imageElements = '';
for (let i = 0; i < imageArray.length; i++) {
   imageElements += `<img src="${imageArray[i]}" onclick="openFullImg(this.src)">`;
   allImageContainer.innerHTML = imageElements;
}

function openFullImg(src) {
   fullImagBox.style.display = "flex";
   fullImage.src = src;
   currentImageSrc = src;
   let curImgIndex = getImageIndex();
   console.log('openFullImg');
   enableDisablePrevNextButtons(curImgIndex);
}


function closeFullImg() {
   fullImagBox.style.display = "none";
   resetState()
}

function resetState(){
   // reset prev / next button
   enableDisableButton(preButton, false, 1);
   enableDisableButton(nextButton, false, 1);
}

function getImageIndex(){
   let imageSrc = 'Images' + currentImageSrc.split('Images')[1];
   return imageArray.indexOf(imageSrc);
}

function changeImage(value) {
   curImageIndex = getImageIndex();
   newIndex = curImageIndex + value;
   if (newIndex >= imageArray.length) {
      return;
   }
   else if (newIndex < 0) {
      return;
   }
   let newImagesrc = imageArray[newIndex];
   fullImage.src = newImagesrc;
   currentImageSrc = newImagesrc;

   enableDisablePrevNextButtons(newIndex);
}


function enableDisablePrevNextButtons(index) {
   let lastIndex = imageArray.length - 1;

   if (index == 0) {
      enableDisableButton(preButton, true, 0.5)
   } else if (lastIndex == index) {
      enableDisableButton(nextButton, true, 0.5)
   } else {
      enableDisableButton(preButton, false, 1);
      enableDisableButton(nextButton, false, 1);
   }
}

// Defult behavior is to enable the button;
function enableDisableButton(button, isDisabled, opacity) {
   button.disabled = isDisabled;
   button.style.opacity = opacity;
}

window.onkeyup = function (event) {
   if (event.keyCode == 37) {
      changeImage(-1);
   }

   if (event.keyCode == 39) {
      changeImage(+1);
   }
   if (event.keyCode == 27) {
      closeFullImg();
   }
}
