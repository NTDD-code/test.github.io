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

// JavaScript to handle scrolling to course content
document.addEventListener('DOMContentLoaded', function() {
    var courseLinks = document.querySelectorAll('.course-list a');

    // Add click event listener to each course link
    courseLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the target course ID from the href attribute
            var targetId = this.getAttribute('href').substring(1);

            // Scroll smoothly to the target course
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
