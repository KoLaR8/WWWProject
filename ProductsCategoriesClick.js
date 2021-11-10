let isVisible;
function showContent1(id){
    if(document.getElementById(id).style.visibility === "visible"){
        isVisible = true;
    }
    else{
        isVisible = false;
    }
    if(!isVisible){
        document.getElementById(id).style.visibility = "visible";
        isVisible = true;
    }
    else{
        document.getElementById(id).style.visibility = "hidden";
        isVisible = false;
    }
    console.log(isVisible)
}
isVisible = false;