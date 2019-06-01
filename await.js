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
        output +="<br>"
        document.querySelector('.container').innerHTML = output;
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

//Async/Await - without then - cleaner way

async function init() {
    await createPost({
        title: 'Hello from await promise',
        body: 'Promise gives you body'
    });
    getPosts();
}
init();

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);
    let output = '';
    data.forEach(v =>{
        output += `<li>${v.name}</li>`;
    })    
    
    document.querySelector(".fetch").innerHTML = output 

}
fetchUsers();