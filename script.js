//#region Variables

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

//#endregion
//#region Main






//#endregion
//#region Functions
function click_protection(event){
    event.stopPropagation();
}

function render_images(){
    let container = document.getElementById("foto_container");
    for (let i = 0; i < image_array.length; i++){
        container.innerHTML += create_image(i);
    };
};

function open_dialog(index, event) {
    event.stopPropagation();
    dialog_image_ref.showModal();
    document.getElementById("dialog_image").innerHTML = create_dialog(index);
    document.getElementById("left_arrow_button").style.transform = "rotate(180deg)";
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
    };
};

function arrow_forward(index){
    if (index < image_array.length - 1) {
        document.getElementById("dialog_image").innerHTML = create_dialog(index + 1);
        document.getElementById("left_arrow_button").style.transform = "rotate(180deg)";
    }else {
        index = -1;
        document.getElementById("dialog_image").innerHTML = create_dialog(index + 1);
        document.getElementById("left_arrow_button").style.transform = "rotate(180deg)";
    };

};

function arrow_forward_button(index, event) {
    if(event.key == "Enter"){
        arrow_forward(index);
        document.getElementById("right_arrow_button").focus();
    };
};

function arrow_backward(index){
    if (index > 0) {
        document.getElementById("dialog_image").innerHTML = create_dialog(index - 1);
        document.getElementById("left_arrow_button").style.transform = "rotate(180deg)";
    }else {
        index = image_array.length;
        document.getElementById("dialog_image").innerHTML = create_dialog(index - 1);
        document.getElementById("left_arrow_button").style.transform = "rotate(180deg)";
    };
};

function arrow_backward_button(index, event) {
    if(event.key == "Enter"){
        arrow_backward(index);
        document.getElementById("left_arrow_button").focus();
    };
};
//#endregion