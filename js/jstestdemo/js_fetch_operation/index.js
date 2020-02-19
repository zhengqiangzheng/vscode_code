async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  console.log(posts);
  console.log(response);
  const root = document.querySelector('#root');
  const ul = document.createElement('ul');
  posts.forEach(element => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute(
      'href',
      `https://jsonplaceholder.typicode.com/posts/${element.id}`
    );
    a.appendChild(document.createTextNode(element.title));
    li.appendChild(a);
    ul.appendChild(li);
  });
  root.appendChild(ul);
}
getData();
console.log(123);
