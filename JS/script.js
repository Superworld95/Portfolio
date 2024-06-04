console.log(document.location.pathname);
document.getElementById("moveArrowU").addEventListener("click", function() {
    
    switch (document.location.pathname) {
        case "/IndexMain.html":
            window.location.href = "/HTML/IndexU.html";
            break;
        case "/HTML/IndexL.html":
            window.location.href = "/HTML/IndexUL.html";
            break;
        case "/HTML/IndexR.html":
            window.location.href = "/HTML/IndexUR.html";
            break;
        case "/HTML/IndexD.html":
            window.location.href = "/IndexMain.html";
            break;
        case "/HTML/IndexDR.html":
            window.location.href = "/HTML/IndexR.html";
            break;
        case "/HTML/IndexDL.html":
            window.location.href = "/HTML/IndexL.html";
            break;
    }    
});
document.getElementById("moveArrowL").addEventListener("click", function() {
    switch (document.location.pathname) {
        case "/IndexMain.html":
            window.location.href = "/HTML/IndexL.html";
            break;
        case "/HTML/IndexU.html":
            window.location.href = "/HTML/IndexUL.html";
            break;
        case "/HTML/IndexD.html":
            window.location.href = "/HTML/IndexDL.html";
            break;
        case "/HTML/IndexUR.html":
            window.location.href = "/HTML/IndexU.html";
            break;
        case "/HTML/IndexR.html":
            window.location.href = "/IndexMain.html";
            break;
        case "/HTML/IndexDR.html":
            window.location.href = "/HTML/IndexD.html";
            break;
    }    
});
document.getElementById("moveArrowR").addEventListener("click", function() {
    switch (document.location.pathname) {
        case "/IndexMain.html":
            window.location.href = "/HTML/IndexR.html";
            break;
        case "/HTML/IndexU.html":
            window.location.href = "/HTML/IndexUR.html";
            break;
        case "/HTML/IndexD.html":
            window.location.href = "/HTML/IndexDR.html";
            break;
        case "/HTML/IndexUL.html":
            window.location.href = "/HTML/IndexU.html";
            break;
        case "/HTML/IndexL.html":
            window.location.href = "/IndexMain.html";
            break;
        case "/HTML/IndexDL.html":
            window.location.href = "/HTML/IndexD.html";
            break;
    }   
});
document.getElementById("moveArrowD").addEventListener("click", function() {
    switch (document.location.pathname) {
        case "/IndexMain.html":
            window.location.href = "/HTML/IndexD.html";
            break;
        case "/HTML/IndexU.html":
            window.location.href = "/IndexMain.html";
            break;
        case "/HTML/IndexUR.html":
            window.location.href = "/HTML/IndexR.html";
            break;
        case "/HTML/IndexUL.html":
            window.location.href = "/HTML/IndexL.html";
            break;
        case "/HTML/IndexR.html":
            window.location.href = "/HTML/IndexDR.html";
            break;
        case "/HTML/IndexL.html":
            window.location.href = "/HTML/IndexDL.html";
            break;
    }    
});
document.getElementById("mapIconC").addEventListener("click", function() {
    window.location.href = "/IndexMain.html";    
});
document.getElementById("mapIconU").addEventListener("click", function() {
    window.location.href = "/HTML/IndexU.html";
});
document.getElementById("mapIconUR").addEventListener("click", function() {
    window.location.href = "/HTML/IndexUR.html";
});
document.getElementById("mapIconR").addEventListener("click", function() {
    window.location.href = "/HTML/IndexR.html";    
});
document.getElementById("mapIconDR").addEventListener("click", function() {
    window.location.href = "/HTML/IndexDR.html";    
});
document.getElementById("mapIconD").addEventListener("click", function() {
    window.location.href = "/HTML/IndexD.html";    
});
document.getElementById("mapIconDL").addEventListener("click", function() {
    window.location.href = "/HTML/IndexDL.html";    
});
document.getElementById("mapIconL").addEventListener("click", function() {
    window.location.href = "/HTML/IndexL.html";    
});
document.getElementById("mapIconUL").addEventListener("click", function() {
    window.location.href = "/HTML/IndexUL.html";
});

