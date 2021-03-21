async function getData(url) {
  const data = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.results;
    });
  return data;
}

export { getData };
