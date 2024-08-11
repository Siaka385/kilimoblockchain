
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    const pageLinks = document.querySelectorAll('.sidebar a');
    const pages = document.querySelectorAll('.page-content');

    // Toggle sidebar
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside of it
    mainContent.addEventListener('click', function() {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    // Handle page navigation
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = e.target.id.replace('-link', '-page');

            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // Show the target page
            document.getElementById(targetPage).classList.add('active');
        });
    });
});
