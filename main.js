// References to DOM Elements
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const book = document.getElementById("book");

const paper1 = document.getElementById("p1");
const paper2 = document.getElementById("p2");
const paper3 = document.getElementById("p3");
const paper4 = document.getElementById("p4");
const paper5 = document.getElementById("p5");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                document.getElementById("b2").classList.add("show-images");
                document.getElementById("f3").classList.add("show-images-front");
                break;
            case 3:
                document.getElementById("b2").classList.remove("show-images");
                document.getElementById("f3").classList.remove("show-images-front");
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                document.getElementById("b3").classList.add("show-images");
                document.getElementById("f4").classList.add("show-images-front");
                break;
            case 4:
                document.getElementById("b3").classList.remove("show-images");
                document.getElementById("f4").classList.remove("show-images-front");
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                document.getElementById("b4").classList.add("show-images");
                document.getElementById("f5").classList.add("show-images-front");
                break;
            case 5:
                document.getElementById("b4").classList.remove("show-images");
                document.getElementById("f5").classList.remove("show-images-front");
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    console.log('PREV')
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                document.getElementById("b2").classList.remove("show-images");
                document.getElementById("f3").classList.remove("show-images-front");
                break;
            case 4:
                document.getElementById("b3").classList.remove("show-images");
                document.getElementById("f4").classList.remove("show-images-front");
                paper3.classList.remove("flipped");
                document.getElementById("b2").classList.add("show-images");
                document.getElementById("f3").classList.add("show-images-front");
                paper3.style.zIndex = 3;
                break;
            case 5:
                document.getElementById("b4").classList.remove("show-images");
                document.getElementById("f5").classList.remove("show-images-front");
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                document.getElementById("b3").classList.add("show-images");
                document.getElementById("f4").classList.add("show-images-front");
                break;
            case 6:
                openBook();
                document.getElementById("b4").classList.add("show-images");
                document.getElementById("f5").classList.add("show-images-front");
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}