const videoElement = document.getElementById('camera');
let codeReader;

async function startBackCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment' // Use the back camera
            }
        });
        videoElement.srcObject = stream;
        codeReader = new ZXing.BrowserQRCodeReader();
        codeReader.decodeFromVideoElement(videoElement, handleQrCode);
    } catch (error) {
        console.error('Error accessing back camera:', error);
    }
}

startBackCamera();

function handleQrCode(result) {
    if (result && result.text) {
        openURL(result.text);
    }
}

function openURL(url) {
    window.open(url, '_blank');
}

// Detect phone numbers and make them clickable
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumberElements = document.querySelectorAll('.phone-number');

    phoneNumberElements.forEach(function(element) {
        element.addEventListener('click', function() {
            const phoneNumber = element.textContent.trim();
            window.location.href = `tel:${phoneNumber}`;
        });
    });
});
