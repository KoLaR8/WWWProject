let counter = 0;


function showHiddenForm(){
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true)
    if(counter === 0){
        document.getElementsByClassName("footer")[0].appendChild(clon);
        document.getElementsByClassName("footer")[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        counter = 1;
    }
    else if(counter === 1){
        document.getElementById("formBox").remove();
        document.getElementsByClassName("contactContent")[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        counter = 0;
    }
}