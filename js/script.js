// Start of Theme Switcher
var themeSwitch = document.getElementById('theme-switcher');
var theme = document.cookie.split('; ').find(row => row.startsWith('theme='));
  if (theme) {
    var themeValue = theme.split('=')[1];
    themeSwitch.checked = themeValue === 'dark';
  }
  
  themeSwitch.addEventListener('change', function() {
    document.cookie = `theme=${this.checked ? 'dark' : 'light'}; path=/`;
});

document.getElementById('theme-switcher').addEventListener('change', function() {
var rssLight = document.getElementById('rssLight');
var rssDark = document.getElementById('rssDark');
  
  if(this.checked) {
      rssLight.style.display = 'none';
      rssDark.style.display = 'block';
  } else {
      rssDark.style.display = 'none';
      rssLight.style.display = 'block';
  }
});
//End of Theme Switcher

// Start of Dropdown Content
function dropdown(dropdownId) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].id !== dropdownId) {
          dropdowns[i].classList.remove("show");
      }
  }
  document.getElementById(dropdownId).classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.idropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
// End of Dropdown content

// Start of *arr right-click
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
// End of *arr right-click

// Start of Percentage Calculator
function percentage_1() {
  var percent = document.getElementById("percent").value;
  var num = document.getElementById("num").value;
  document.getElementById("value1")
      .value = (num / 100) * percent;
}
      
function percentage_2() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  document.getElementById("value2")
      .value = (num1 * 100) / num2 + "%";
}
// End of Percentage Calculator