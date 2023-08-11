const videoElement = document.getElementById('camera');
const scanButton = document.getElementById('scanButton');
let codeReader;
let qrBox;

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

scanButton.addEventListener('click', () => {
    if (codeReader) {
        codeReader.reset();
        if (qrBox) qrBox.parentElement.removeChild(qrBox);
        codeReader.decodeFromVideoElement(videoElement, handleQrCode);
    }
});

function handleQrCode(result, err) {
    if (result) {
        openURL(result.text);
        highlightQRCode(result.location);
    }
}

function openURL(url) {
    window.open(url, '_blank');
}

function highlightQRCode(location) {
    if (!qrBox) {
        qrBox = document.createElement('div');
        qrBox.className = 'qr-box';
        document.body.appendChild(qrBox);
    }
    const scaleX = videoElement.offsetWidth / videoElement.videoWidth;
    const scaleY = videoElement.offsetHeight / videoElement.videoHeight;
    qrBox.style.left = location.topLeftCorner.x * scaleX + 'px';
    qrBox.style.top = location.topLeftCorner.y * scaleY + 'px';
    qrBox.style.width = (location.bottomRightCorner.x - location.topLeftCorner.x) * scaleX + 'px';
    qrBox.style.height = (location.bottomRightCorner.y - location.topLeftCorner.y) * scaleY + 'px';
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
