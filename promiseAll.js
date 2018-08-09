const posts = [{
        title: 'Post 1',
        body: 'Body 1'
    },
    {
        title: 'Post 2',
        body: 'Body 2'
    }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    console.log('create post');

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const error = false;

            if (!error) {
                posts.push(post);
                resolve();
            } else {
                reject('Error: Huston we got the problem');
            }

        }, 2000);
    })

}

//promise.all

const promise1 = Promise.resolve('Hi new promise');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbay');
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4])
    .then((values) => console.log(values));