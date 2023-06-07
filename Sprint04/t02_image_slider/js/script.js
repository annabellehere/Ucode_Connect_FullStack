let photo = document.getElementsByClassName("ph");
let number = 1;
let kd = 0;
allPhoto(number);

function changePhoto(n) {
    allPhoto(number += n);
}

function allPhoto(n) {
    if (n > photo.length) number = 1;
    if (n < 1) number = photo.length;
    for (i = 0; i < photo.length; i++) photo[i].style.display = "none";
    photo[number - 1].style.display = "block";

    clearInterval(kd);
    kd = setInterval(allPhoto, 3000, number += 1);
}