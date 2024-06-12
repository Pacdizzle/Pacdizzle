// Predetermined variables
var predeterminedImages = [
    {imgVar: "img/game-covers/fivem-cover.webp", linkVar: "fivem://connect"}, // FiveM
    {imgVar: "img/game-covers/rocket-league-cover.webp", linkVar: "com.epicgames.launcher://apps/9773aa1aa54f4f7b80e44bef04986cea%3A530145df28a24424923f5828cc9031a1%3ASugar?action=launch&silent=true"}, // Rocket League
    {imgVar: "img/game-covers/xdefiant-cover.webp", linkVar: "uplay://launch/15657/0"}, // XDefiant
    {imgVar: "img/game-covers/helldivers-2-cover.webp", linkVar: "steam://rungameid/553850"}, // Cyberpunk 2077
    {imgVar: "img/game-covers/watch-dogs-cover.webp", linkVar: "steam://rungameid/243470"}, // Watch Dogs
    {imgVar: "img/game-covers/dying-light-2-cover.webp", linkVar: "steam://rungameid/534380"}, // Dying Light 2
    {imgVar: "img/game-covers/halo-cover.webp", linkVar: "steam://rungameid/976730"}, // Halo
    {imgVar: "img/game-covers/palworld-cover.webp", linkVar: "steam://rungameid/1623730"}, // Palworld
    {imgVar: "img/game-covers/fall-guys-cover.webp", linkVar: "steam://rungameid/1097150"}, // Fall Guys
    {imgVar: "img/game-covers/back4blood-cover.webp", linkVar: "steam://rungameid/924970"}, // Back 4 Blood
    {imgVar: "img/game-covers/gta4-cover.webp", linkVar: "steam://rungameid/12210"}, // GTA 4
    {imgVar: "img/game-covers/red-dead-redemption-online-cover.webp", linkVar: "steam://rungameid/1404210"}, // Red Dead Redemption Online
    {imgVar: "img/game-covers/battlefield-bad-company-2-cover.webp", linkVar: "steam://rungameid/24960"}, // Battlefield 2
    {imgVar: "img/game-covers/yakuza0-cover.webp", linkVar: "steam://rungameid/638970"}, // Yakuza 0
    {imgVar: "img/game-covers/assassins-creed-cover.webp", linkVar: "steam://rungameid/15100"}, // Assassin's Creed
    {imgVar: "img/game-covers/crysis-cover.webp", linkVar: "steam://rungameid/17300"}, // Crysis
    {imgVar: "img/game-covers/far-cry-cover.webp", linkVar: "steam://rungameid/13520"}, // Far Cry
    {imgVar: "img/game-covers/flatout-cover.webp", linkVar: "steam://rungameid/6220"}, // FlatOut
    {imgVar: "img/game-covers/portal-cover.webp", linkVar: "steam://rungameid/400"}, // Portal
    {imgVar: "img/game-covers/the-witcher-cover.webp", linkVar: "steam://rungameid/20900"}, // The Witcher
    {imgVar: "img/game-covers/batman-arkham-asylum-cover.webp", linkVar: "steam://rungameid/35140"}, // Batman Arkham Asylum
    {imgVar: "img/game-covers/tomb-raider-cover.webp", linkVar: "steam://rungameid/203160"}, // Tomb Raider
    {imgVar: "img/game-covers/mafia-cover.webp", linkVar: "steam://rungameid/1030840"}, // Mafia
    {imgVar: "img/game-covers/la-noire-cover.webp", linkVar: "steam://rungameid/110800"}, // L.A. Noire
    {imgVar: "img/game-covers/sleeping-dogs-cover.webp", linkVar: "steam://rungameid/307690"}, // Sleeping Dogs
    {imgVar: "img/game-covers/bioshock-cover.webp", linkVar: "steam://rungameid/409710"}, // BioShock
    {imgVar: "img/game-covers/state-of-decay-cover.webp", linkVar: "steam://rungameid/329430"}, // State of Decay
    {imgVar: "img/game-covers/deus-ex-cover.webp", linkVar: "steam://rungameid/6910"}, // Deus Ex
    {imgVar: "img/game-covers/dishonored-cover.webp", linkVar: "steam://rungameid/205100"}, // Dishonored
    {imgVar: "img/game-covers/half-life-cover.webp", linkVar: "steam://rungameid/70"}, // Half-Life
    {imgVar: "img/game-covers/south-park-the-stick-of-truth-cover.webp", linkVar: "steam://rungameid/213670"}, // South Park The Stick of Truth
    {imgVar: "img/game-covers/supraland-six-inches-under-cover.webp", linkVar: "steam://rungameid/1522870"}, // Supraland Six Inches under
    {imgVar: "img/game-covers/the-forest-cover.webp", linkVar: "steam://rungameid/242760"}, // The Forest
    {imgVar: "img/game-covers/journey-to-the-savage-planet-cover.webp", linkVar: "steam://rungameid/973810"}, // Journey to the Savage Planet
];

// Check if there's something in the local storage when the page loads
function handleImages() {
    var images = JSON.parse(localStorage.getItem("images")) || [];

    if (images.length === 0) {
        // If there's nothing in the local storage, use the predetermined variables
        images = predeterminedImages;
        localStorage.setItem("images", JSON.stringify(images));
    }

    images.forEach(function(image) {
        addImageToContainer(image.imgVar, image.linkVar);
    });
}
// The imageContainer is not scrollable, hide the button
function handleScroll() {
    var myDiv = document.getElementById('imageContainer');
    var sbtnL = document.getElementById('scrollLeft');
    var sbtnR = document.getElementById('scrollRight');

    if (myDiv.scrollWidth <= myDiv.clientWidth) {
        sbtnL.style.display = 'none';
    }
    if (myDiv.scrollWidth <= myDiv.clientWidth) {
        sbtnR.style.display = 'none';
      }
}

window.addEventListener('load', handleImages);
window.addEventListener('load', handleScroll);


function displayImageAndLink() {
    var imgVar = document.getElementById("imageInput").value;
    var linkVar = document.getElementById("linkInput").value;

    // Save the input values to the local storage
    var images = JSON.parse(localStorage.getItem("images")) || [];
    images.push({imgVar: imgVar, linkVar: linkVar});
    localStorage.setItem("images", JSON.stringify(images));

    addImageToContainer(imgVar, linkVar);
}

function addImageToContainer(imgVar, linkVar) {
    var container = document.getElementById("imageContainer");

    var link = document.createElement("a");
    link.href = linkVar;
    link.target = "_blank";

    var img = document.createElement("img");
    img.src = imgVar;
    img.alt = "error";

    link.appendChild(img);
    container.appendChild(link);

    // Check if the container is overflowing horizontally
    if (container.scrollWidth > container.clientWidth) {
        // If it is, add left padding
        container.style.paddingLeft = '5px';
    }
}

function downloadData() {
    var images = JSON.parse(localStorage.getItem("images")) || [];
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(images));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "game-covers-data.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function uploadData() {
    var file = document.getElementById("uploadInput").files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var images = JSON.parse(event.target.result);

        // Clear the local storage and the image container
        localStorage.setItem("images", JSON.stringify(images));
        document.getElementById("imageContainer").innerHTML = "";

        images.forEach(function(image) {
            addImageToContainer(image.imgVar, image.linkVar);
        });
    };

    reader.readAsText(file);
}

function clearData() {
    // Clear the local storage and the image container
    localStorage.removeItem("images");
    document.getElementById("imageContainer").innerHTML = "";
}

// scroll buttons
    const buttonRight = document.getElementById('scrollRight');
    const buttonLeft = document.getElementById('scrollLeft');

buttonRight.onclick = function () {
    document.getElementById('imageContainer').scrollLeft += 300;
};
buttonLeft.onclick = function () {
    document.getElementById('imageContainer').scrollLeft -= 300;
};
// mouse wheel scroll 
    let scrollableDiv = document.getElementById('imageContainer');

scrollableDiv.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) scrollableDiv.scrollLeft += 100;
    else scrollableDiv.scrollLeft -= 100;
    e.preventDefault();
}, { passive: false });
