document.addEventListener("deviceready", function () {
    console.log("✅ Cordova е готов!");

    // 📱 Информация за устройството
    document.getElementById("cordovaVersion").textContent = device.cordova || "Неизвестно";
    document.getElementById("manufacturer").textContent = device.manufacturer || "Неизвестно";
    document.getElementById("isVirtual").textContent = device.isVirtual ? "Да" : "Не";
    document.getElementById("deviceModel").textContent = device.model || "Неизвестно";
    document.getElementById("operatingSystem").textContent = device.platform || "Неизвестно";
    document.getElementById("osVersion").textContent = device.version || "Неизвестно";
    document.getElementById("uuid").textContent = device.uuid || "Неизвестно";
    document.getElementById("serial").textContent = device.serial || "Неизвестно";

    // 🔋 Състояние на батерията
    window.addEventListener("batterystatus", function (status) {
        document.getElementById("batteryStatus").textContent = status.level + "%";
        document.getElementById("isPluggedLabel").textContent = status.isPlugged ? "Зарежда се" : "Не се зарежда";
    });

    // 🌍 Мрежова информация
    let networkState = navigator.connection.type;
    let states = {
        "unknown": "Неизвестно",
        "ethernet": "Ethernet",
        "wifi": "WiFi",
        "2g": "2G",
        "3g": "3G",
        "4g": "4G",
        "5g": "5G",
        "cellular": "Мобилна връзка",
        "none": "Без интернет"
    };
    document.getElementById("connectionType").textContent = states[networkState] || "Неизвестно";

    // 📍 GPS информация
    navigator.geolocation.getCurrentPosition(
        function (position) {
            document.getElementById("latitude").textContent = position.coords.latitude;
            document.getElementById("longitude").textContent = position.coords.longitude;
            document.getElementById("altitude").textContent = position.coords.altitude || "Неизвестно";
            document.getElementById("accuracy").textContent = position.coords.accuracy + " m";
            document.getElementById("altitudeAccuracy").textContent = position.coords.altitudeAccuracy || "Неизвестно";
        },
        function (error) {
            console.log("Грешка при GPS: " + error.message);
        },
        { enableHighAccuracy: true }
    );
});

// 📸 Функция за заснемане на снимка
document.getElementById("camera-btn").addEventListener("click", function () {
    navigator.camera.getPicture(
        function (imageData) {
            let image = document.getElementById("myImage");
            image.src = "data:image/jpeg;base64," + imageData;
            image.classList.remove("not-displayed");
        },
        function (error) {
            alert("Грешка при снимане: " + error);
        },
        {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        }
    );
});
