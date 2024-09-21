document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.read-more');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const post = button.closest('.post');
            const fullArticle = post.querySelector('.full-article');

            if (fullArticle.classList.contains('show')) {
                fullArticle.classList.remove('show');
                post.classList.remove('expanded');
                button.textContent = 'Read More';
                document.body.style.overflow = 'auto';
            } else {
                fullArticle.classList.add('show');
                post.classList.add('expanded');
                button.textContent = 'Show Less';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close expanded post when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.post') && document.querySelector('.post.expanded')) {
            const expandedPost = document.querySelector('.post.expanded');
            const fullArticle = expandedPost.querySelector('.full-article');
            const button = expandedPost.querySelector('.read-more');

            fullArticle.classList.remove('show');
            expandedPost.classList.remove('expanded');
            button.textContent = 'Read More';
            document.body.style.overflow = 'auto';
        }
    });
});