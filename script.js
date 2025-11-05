const btn = document.getElementById('fetch-btn');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
  fetch('http://localhost:5000/api/hello') // Change to your AWS backend URL
    .then(res => res.json())
    .then(data => {
      message.textContent = data.message;
    })
    .catch(err => {
      console.error(err);
      message.textContent = "Error fetching data";
    });
});
