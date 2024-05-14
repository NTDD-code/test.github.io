// JavaScript to handle finding text
document.getElementById('findTextButton').addEventListener('click', function() {
    var searchText = prompt('Nhập ký tự bạn muốn tìm vào đây: ');
    if (searchText) {
        var found = window.find(searchText);
        if (!found) {
            alert('Xin lỗi, chúng tôi không tìm thấy ký tự bạn muốn.');
        }
    }
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  
    // Store the user's preference in localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Check if the user has previously set dark mode preference and apply it
const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
    document.body.classList.add("dark-mode");
}


