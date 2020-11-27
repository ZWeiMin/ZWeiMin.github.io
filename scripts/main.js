let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/firefox_icon.png'){
        myImage.setAttribute('src','images/Firefox2.jpg');
    }
    else{
        myImage.setAttribute('src','images/firefox_icon.png')
    }
}
let myButton = document.querySelector('button');
myButton.onclick = function () {
    setUserName();
}
let myHeading = document.querySelector('h1')
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null){
        setUserName();
    }else{
        let storedName = localStorage.getItem('name');
        myHeading.innerHTML='Mozilla 酷毙了，'+ myName;
    }
    
    
}