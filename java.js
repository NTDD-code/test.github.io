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
