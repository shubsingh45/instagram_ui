export default function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const filereader = new FileReader();
        filereader.onload = () => {
            resolve(filereader.result);
        };

        filereader.onerror = (error) => {
            reject(`Error reading the file: ${error.message}`);
        };

        filereader.readAsDataURL(file);
    });
}