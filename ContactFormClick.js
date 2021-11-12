let counter = 0;


function showHiddenForm(){
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true)
    if(counter === 0){
        document.getElementsByClassName("footer")[0].appendChild(clon);
        counter = 1;
    }
    else if(counter === 1){
        document.getElementById("formBox").remove();
        counter = 0;
    }
}