/*#################################################################################################################################################################################################################################
##############################################################                                Variables                                           #################################################################################
#################################################################################################################################################################################################################################*/

let image_array = [
"img/alaska.jpg",
"img/anime.jpg",
"img/atmosphere.png",
"img/blue-tit.jpg",
"img/hurricane.jpg",
"img/lake.jpg",
"img/moorente.jpg",
"img/sea.jpg",
"img/snow-bunting.jpg",
"img/snow-leopard.jpg",
"img/travel.jpg",
"img/winter.jpg"];

const dialog_image_ref = document.getElementById("dialog_image");



/*#################################################################################################################################################################################################################################
##############################################################                                Main                                           ######################################################################################
#################################################################################################################################################################################################################################*/

for (let i = 0; i < image_array.length; i++){
    console.log(image_array[i]);
};


/*#################################################################################################################################################################################################################################
##############################################################                                Functions                                      ######################################################################################
#################################################################################################################################################################################################################################*/


function render_images(){
    let container = document.getElementById("foto_container");
    for (let i = 0; i < image_array.length; i++){
        container.innerHTML += create_image(i);
    };
};

function create_image(index) {
    return `<img id = image_${index} class = ${"images"} onclick = "open_dialog(${index})" src = ${image_array[index]}></img>`;
};

function open_dialog(index) {
    dialog_image_ref.showModal();
    document.getElementById("dialog_image").innerHTML = create_dialog(index);
    document.getElementById("left_arrow_button").style.transform = "rotate(180deg)";
}



function create_dialog(index){
    return `<body class = dialog_image_body>
                <header class = "dialog_image_header">
                    <h2>${get_dialog_title(index)}</h2>
                    <button id = "dialog_close" onmousedown = "mouse_pressed()" onclick = "close_dialog()" src = "icons/close_icon.svg"></Button>
                </header>
                <main class = "dialog_image_main">
                    <img class = "dialog_mainImage" src = "${image_array[index]}">
                </main>
                <footer class = "dialog_image_footer">
                    <img id = "left_arrow_button" class = "arrow_button" onclick = "arrow_backward(${(index)})" src = "icons/dialog_arrow_default.svg">
                    <div id = "dialog_page_counter">${(index + 1)} / ${(image_array.length)}</div>
                    <img id = "right_arrow_button" class = "arrow_button" onclick = "arrow_forward(${(index)})" src = "icons/dialog_arrow_default.svg">
                </footer>
            </body>`
    
}

function get_dialog_title(index){

    let first_letter = image_array[index].slice(4,5).toLocaleUpperCase();
    let small_letters = image_array[index].slice(5,image_array[index].length - 4);
    let title = first_letter + small_letters;
    
    return title

}

function mouse_pressed(){
    document.getElementById("dialog_close").classList.add("dialog_close_pressed");
}

function close_dialog() {
    dialog_image_ref.close();
}

function arrow_forward(index){
    document.getElementById("dialog_image").innerHTML = create_dialog(index + 1);
    document.getElementById("left_arrow_button").style.transform = "rotate(180deg)";
}

function arrow_backward(index){
    document.getElementById("dialog_image").innerHTML = create_dialog(index - 1);
    document.getElementById("left_arrow_button").style.transform = "rotate(180deg)";
}

/*###########################################
#                Stille Ecke                #
#############################################




    
    











*/