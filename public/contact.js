document.getElementById("name").addEventListener("focusout", () => {
    if(document.getElementById("name").value.length>0){
        document.getElementById("name").style.outline = "1px solid #2ecc71";
    } else {
        document.getElementById("name").style.outline = "1px solid #e74c3c";
    }
});

document.getElementById("email").addEventListener("focusout", () => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)){
        document.getElementById("email").style.outline = "1px solid #2ecc71";
    } else {
        document.getElementById("email").style.outline = "1px solid #e74c3c";
    }
});

document.getElementById("message").addEventListener("focusout", () => {
    if(document.getElementById("message").value.length>0){
        document.getElementById("message").style.outline = "1px solid #2ecc71";
    } else {
        document.getElementById("message").style.outline = "1px solid #e74c3c";
    }
});