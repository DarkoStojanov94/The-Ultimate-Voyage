document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');

    const posts = [
        {
            title: 'Exploring the Mountains',
            date: '2024-01-01',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo vitae urna bibendum, nec malesuada lacus bibendum.'
        },
        {
            title: 'A Day at the Beach',
            date: '2024-02-15',
            content: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit.'
        },
        {
            title: 'City Lights at Night',
            date: '2024-03-10',
            content: 'Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.'
        }
    ];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><em>${post.date}</em></p>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
    });
});
