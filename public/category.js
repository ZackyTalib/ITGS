const productCategories = {
    "indobatik": [
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.1&permmsgid=msg-f:1712401473602519842&th=17c3ac114aef0322&view=att&disp=safe&realattid=f_ku81njx81",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.2&permmsgid=msg-f:1712401473602519842&th=17c3ac114aef0322&view=att&disp=safe&realattid=f_ku81njxv3",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.3&permmsgid=msg-f:1712401473602519842&th=17c3ac114aef0322&view=att&disp=safe&realattid=f_ku81njww0",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.4&permmsgid=msg-f:1712401473602519842&th=17c3ac114aef0322&view=att&disp=safe&realattid=f_ku81njya4",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.5&permmsgid=msg-f:1712401473602519842&th=17c3ac114aef0322&view=att&disp=safe&realattid=f_ku81njxl2",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.6&permmsgid=msg-f:1712401473602519842&th=17c3ac114aef0322&view=att&disp=safe&realattid=f_ku81njyp5",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.7&permmsgid=msg-f:1712401473602519842&th=17c3ac114aef0322&view=att&disp=safe&realattid=f_ku81njza6"
    ],
    "stylebatik": [
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.1&permmsgid=msg-f:1712401571541601276&th=17c3ac28188ecbfc&view=att&disp=safe&realattid=f_ku81puzt2",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.2&permmsgid=msg-f:1712401571541601276&th=17c3ac28188ecbfc&view=att&disp=safe&realattid=f_ku81puzg1",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.3&permmsgid=msg-f:1712401571541601276&th=17c3ac28188ecbfc&view=att&disp=safe&realattid=f_ku81pv063",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.4&permmsgid=msg-f:1712401571541601276&th=17c3ac28188ecbfc&view=att&disp=safe&realattid=f_ku81puz00"
    ],
    "modern": [
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.1&permmsgid=msg-f:1712401510670264327&th=17c3ac19ec57e807&view=att&disp=safe&realattid=f_ku81opd12",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.2&permmsgid=msg-f:1712401510670264327&th=17c3ac19ec57e807&view=att&disp=safe&realattid=f_ku81opdg3",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.3&permmsgid=msg-f:1712401510670264327&th=17c3ac19ec57e807&view=att&disp=safe&realattid=f_ku81opc10",
        "https://mail.google.com/mail/u/1?ui=2&ik=b8ed38c7e2&attid=0.4&permmsgid=msg-f:1712401510670264327&th=17c3ac19ec57e807&view=att&disp=safe&realattid=f_ku81opci1"
    ]
}

switch(window.location.href.split("/")[4]){
    case "indobatik":
        document.title = "Mari - " + "Indonesian Batik";
        document.getElementById("categoryTitle").innerHTML = "Indonesian Batik";
        loadProductCategory(window.location.href.split("/")[4]);
        break;
    case "stylebatik":
        document.title = "Mari - " + "Peranakan Style Batik";
        document.getElementById("categoryTitle").innerHTML = "Peranakan Style Batik";
        loadProductCategory(window.location.href.split("/")[4]);
        break;
    case "modern":
        document.title = "Mari - " + "Modern Design";
        document.getElementById("categoryTitle").innerHTML = "Modern Design";
        loadProductCategory(window.location.href.split("/")[4]);
        break;
    default:
        window.location.href = "/products";
        break;
}

function loadProductCategory(productCategory){
    for(let i=0; i<productCategories[productCategory].length; i++){
        let image = document.createElement("img");
        image.src = productCategories[productCategory][i];
        image.setAttribute("onclick", "popup(this)");
        document.querySelector(".imageGroup").appendChild(image);
    }
}

function overlayClicked(){
    if(document.querySelector(".overlay").style.display == "none"){
        return;
    } else {
        document.body.style.overflow = "scroll";
        document.querySelector(".imagePopup").style.display = "none";
        document.querySelector(".overlay").style.display = "none"
    }
}

function popup(element){
    window.scrollTo(0, 0);
    document.querySelector(".imagePopup img").src = element.src;
    document.querySelector(".imagePopup").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
    document.body.style.overflow = "hidden";
}