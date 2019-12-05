async function lala () {
  await {a: 1};
}

lala()
  .then(data => console.log(data));