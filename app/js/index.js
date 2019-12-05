async function lala () {
  await fetch('http://jsonplaceholder.typicode.com/users', {method: 'GET'})
    .then(response => response.json());
}

lala()
  .then(data => console.log(data));