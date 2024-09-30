fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => getData(data))


function getData(data){
    const postContainer = document.getElementById('posts-here');
    for( user of data){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h4>from user ${user.userId}</h4>
            <h5>${user.title}</h5>
            <h5>${user.body}<h5>
        `;
        postContainer.appendChild(div);
    }
}