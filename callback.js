const posts = [{
        title: 'Post 1',
        body: 'Body 1'
    },
    {
        title: 'Post 2',
        body: 'Body 2'
    }
]

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}
getPost();