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




/*#################################################################################################################################################################################################################################
##############################################################                                Main                                           ######################################################################################
#################################################################################################################################################################################################################################*/

for (let i = 0; i < image_array.length; i++){
    console.count(image_array[i]);
}


/*#################################################################################################################################################################################################################################
##############################################################                                Functions                                      ######################################################################################
#################################################################################################################################################################################################################################*/


function render_images(){
    let container = document.getElementById("foto_container");
    for (let i = 0; i < image_array.length; i++){
        container.innerHTML += create_image(i,image_array[i]);

    }

    yeah();

};

function yeah(){
    for (let i = 0; i < image_array.length; i++){
        document.getElementById(image_array[i]).hasAttribute("height");
        document.getElementById(image_array[i]).hasAttribute("width");
        document.getElementById(image_array[i]).hasAttribute
    }
}

function create_image(index, id_name) {
    return "<img class = " + id_name + "></img>";
};

function create_image_structure (index){
    let img = document.createElement('img');
    img.setAttribute = "src", `${image_array[i]}`;
    img.setAttribute("width", "304");
    img.setAttribute("height", "228");
    img.setAttribute("alt", "The Pulpit Rock");
    return img;
};

function myFunction(i) {
  var x = document.createElement("IMG");
  x.setAttribute("src", `${image_array[i]}`);
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
  return x

}


/*###########################################
#                Stille Ecke                #
#############################################

        <img src = "`${image_array[index]}`"></img>
        background-image: url(`${image_array[index]}`);


        for (let i = 0; i < image_array.length; i++){
        document.getElementById(foto_container).innerHTML.create_image_structure += myFunction(i);
    };















*/