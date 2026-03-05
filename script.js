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




/*#################################################################################################################################################################################################################################
##############################################################                                Functions                                      ######################################################################################
#################################################################################################################################################################################################################################*/

function click_protection(event){
    event.stopPropagation();

}

function render_images(){
    let container = document.getElementById("foto_container");
    for (let i = 0; i < image_array.length; i++){
        container.innerHTML += create_image(i);
    };
};

function create_image(index) {
    return `<img id = image_${index} class = ${"images"} tabindex = "0" onclick = "open_dialog(${index}, event)" src = ${image_array[index]}></img>`;
};

function open_dialog(index, event) {
    event.stopPropagation();
    dialog_image_ref.showModal();
    document.getElementById("dialog_image").innerHTML = create_dialog(index);
    document.getElementById("left_arrow_button").style.transform = "rotate(180deg)";
};



function create_dialog(index){
    return `<body class = dialog_image_body onclick = "click_protection(event)">
                <header class = "dialog_image_header" onclick = "click_protection(event)">
                    <h2>${get_dialog_title(index)}</h2>
                    <img id = "dialog_close" tabindex = "0" onmousedown = "mouse_pressed()" onclick = "close_dialog()" onkeydown = "close_dialog_on_button(event)" src = "icons/close_icon.svg">
                </header>
                <main class = "dialog_image_main" onclick = "click_protection(event)">
                    <img class = "dialog_mainImage" src = "${image_array[index]}">
                </main>
                <footer class = "dialog_image_footer" onclick = "click_protection(event)">
                    <img id = "left_arrow_button" class = "arrow_button" tabindex = "0" onclick = "arrow_backward(${(index)}, event)" onkeydown = "arrow_backward_button(${(index)}, event)" src = "icons/dialog_arrow_default.svg">
                    <div id = "dialog_page_counter">${(index + 1)} / ${(image_array.length)}</div>
                    <img id = "right_arrow_button" class = "arrow_button" tabindex = "0" onclick = "arrow_forward(${(index)}, event)" onkeydown = "arrow_forward_button(${(index)}, event)" src = "icons/dialog_arrow_default.svg">
                </footer>
            </body>`
    
};

function get_dialog_title(index){

    let first_letter = image_array[index].slice(4,5).toLocaleUpperCase();
    let small_letters = image_array[index].slice(5,image_array[index].length - 4);
    
    return first_letter + small_letters;

};

function mouse_pressed(){
    document.getElementById("dialog_close").classList.add("dialog_close_pressed");
};

function close_dialog(){
    dialog_image_ref.close();
};

function close_dialog_on_button(event){
    
    if(event.key == "Enter"){
        dialog_image_ref.close();
        console.log(event.key)
    }
};

function arrow_forward(index, event){
    event.stopPropagation();
    document.getElementById("dialog_image").innerHTML = create_dialog(index + 1);
    document.getElementById("left_arrow_button").style.transform = "rotate(180deg)";
};

function arrow_forward_button(index, event) {
    if(event.key == "Enter"){
        arrow_forward(index);
        document.getElementById("right_arrow_button").focus();
    };

};

function arrow_backward(index, event){
    event.stopPropagation();
    document.getElementById("dialog_image").innerHTML = create_dialog(index - 1);
    document.getElementById("left_arrow_button").style.transform = "rotate(180deg)";
};

function arrow_backward_button(index, event) {
    if(event.key == "Enter"){
        arrow_backward(index);
        document.getElementById("left_arrow_button").focus();

    };
    
};



/*###########################################
#                Stille Ecke                #
#############################################




    
    











*/