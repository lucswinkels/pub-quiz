const getData = async () => {
  const res = await fetch("http://localhost:3000/posts");
  const data = await res.json().then((data) => console.log(data));
};

getData();
