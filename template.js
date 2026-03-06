function create_image(index) {
    return `<img id = image_${index} class = ${"images"} tabindex = "0" onclick = "open_dialog(${index}, event)" src = ${image_array[index]}></img>`;
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
                    <img id = "left_arrow_button" class = "arrow_button" tabindex = "0" onclick = "arrow_backward(${(index)})" onkeydown = "arrow_backward_button(${(index)}, event)" src = "icons/dialog_arrow_default.svg">
                    <div id = "dialog_page_counter">${(index + 1)} / ${(image_array.length)}</div>
                    <img id = "right_arrow_button" class = "arrow_button" tabindex = "0" onclick = "arrow_forward(${(index)})" onkeydown = "arrow_forward_button(${(index)}, event)" src = "icons/dialog_arrow_default.svg">
                </footer>
            </body>`
    
};