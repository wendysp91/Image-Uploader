import { getStorage, ref, uploadBytes } from "firebase/storage";

export function upload(file) {
    const storage = getStorage();

    const storageRef = ref(storage, 'images/' + file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });

}

