const productCategories = {
    "indobatik": ["http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg", "http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg", "http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg", "http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg", "http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg"],
    "stylebatik": ["http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg", "http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg", "http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg"],
    "modern": ["http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg","http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg", "http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg", "http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg", "http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg", "http://benzol4.com/wp-content/uploads/2018/11/blog-ph-1.jpg"]
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