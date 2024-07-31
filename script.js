document.getElementById('generate-barcode-btn').addEventListener('click', function() {
    var text = document.getElementById('text-input').value;
    if (text) {
        // Generate Barcode
        JsBarcode("#barcode", text, {
            format: "CODE128",
            displayValue: true
        });
        document.getElementById('barcode-output').style.display = 'block';
    }
});

document.getElementById('generate-qrcode-btn').addEventListener('click', function() {
    var text = document.getElementById('text-input').value;
    if (text) {
        // Generate QR Code
        var qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = ""; // Clear previous QR code
        new QRCode(qrcodeContainer, {
            text: text,
            width: 128,
            height: 128,
        });
        document.getElementById('qrcode-output').style.display = 'block';
    }
});
