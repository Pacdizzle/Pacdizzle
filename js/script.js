var themeSwitch = document.getElementById('theme-switcher');
var theme = document.cookie.split('; ').find(row => row.startsWith('theme='));
  if (theme) {
    var themeValue = theme.split('=')[1];
    themeSwitch.checked = themeValue === 'dark';
  }
  
  themeSwitch.addEventListener('change', function() {
    document.cookie = `theme=${this.checked ? 'dark' : 'light'}; path=/`;
  });

const prowlarr = document.getElementById("prowlarr");
prowlarr.addEventListener("contextmenu", (e) => {e.preventDefault(window.open("http://localhost:9696/","_self"))});

const sonarr = document.getElementById("sonarr");
sonarr.addEventListener("contextmenu", (e) => {e.preventDefault(window.open("http://localhost:8989/","_self"))});

const radarr = document.getElementById("radarr");
radarr.addEventListener("contextmenu", (e) => {e.preventDefault(window.open("http://localhost:7878/","_self"))});

const lidarr = document.getElementById("lidarr");
lidarr.addEventListener("contextmenu", (e) => {e.preventDefault(window.open("http://localhost:8686/","_self"))});

const readarr = document.getElementById("readarr");
readarr.addEventListener("contextmenu", (e) => {e.preventDefault(window.open("http://localhost:8787/","_self"))});

var l1 = document.getElementById("1");
var l2 = document.getElementById("2");
var l3 = document.getElementById("3");
var l4 = document.getElementById("4");
var l5 = document.getElementById("5");
var l6 = document.getElementById("6");

function l01() {
    if (l1.style.display === "none") {
      l1.style.display = "block";
      l2.style.display = "none";
      l3.style.display = "none";
      l4.style.display = "none";
      l5.style.display = "none";
      l6.style.display = "none";
    } else {
      l1.style.display = "none";
    }
  }
  function l02() {
    if (l2.style.display === "none") {
        l1.style.display = "none";
        l2.style.display = "block";
        l3.style.display = "none";
        l4.style.display = "none";
        l5.style.display = "none";
        l6.style.display = "none";
    } else {
      l2.style.display = "none";
    }
  } 
  function l03() {
    if (l3.style.display === "none") {
        l1.style.display = "none";
        l2.style.display = "none";
        l3.style.display = "block";
        l4.style.display = "none";
        l5.style.display = "none";
        l6.style.display = "none";
    } else {
      l3.style.display = "none";
    }
  } 
  function l04() {
    if (l4.style.display === "none") {
        l1.style.display = "none";
        l2.style.display = "none";
        l3.style.display = "none";
        l4.style.display = "block";
        l5.style.display = "none";
        l6.style.display = "none";
    } else {
      l4.style.display = "none";
    }
  } 
  function l05() {
    if (l5.style.display === "none") {
        l1.style.display = "none";
        l2.style.display = "none";
        l3.style.display = "none";
        l4.style.display = "none";
        l5.style.display = "block";
        l6.style.display = "none";
    } else {
      l5.style.display = "none";
    }
  }
  function l06() {
    if (l6.style.display === "none") {
        l1.style.display = "none";
        l2.style.display = "none";
        l3.style.display = "none";
        l4.style.display = "none";
        l5.style.display = "none";
        l6.style.display = "block";
    } else {
      l6.style.display = "none";
    }
  }