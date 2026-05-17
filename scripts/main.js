const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "assets/images/iconFlats.jpg") {
       myImage.setAttribute("src", "assets/images/cubes.jpg");

    }
    else{
        myImage.setAttribute("src", "assets/images/iconFlats.jpg");
    }
})
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.addEventListener("click", () => {
  setUserName();
});


function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName}`;
  }
}