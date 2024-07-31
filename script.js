document.getElementById('generate-btn').addEventListener('click', function() {
    var text = document.getElementById('text-input').value;

    // Generate Barcode
    JsBarcode("#barcode", text, {
        format: "CODE128",
        displayValue: true
    });

    // Generate QR Code
    var qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = ""; // Clear previous QR code
    var qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: 128,
        height: 128,
    });
    qrcode.clear();
    qrcode.makeCode(text);
});
