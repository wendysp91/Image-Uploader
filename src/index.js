import { config } from "./config";

config();

/**************************************************************+*/
const dropArea = document.querySelector(".drag-area"),
    input = document.querySelector("#actual-btn");
let file;

export function dropHandler(ev) {
    ev.preventDefault();
    file = ev.dataTransfer.files[0]
    showFile();
}
export function dragOverHandler(ev) {
    ev.preventDefault();
}

input.addEventListener("change", function () {
    file = this.files[0];
    showFile();
});

function showFile() {
    let fileType = file.type;
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}" alt="image" class="image">`;
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("This is not an Image File!");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    }
}


