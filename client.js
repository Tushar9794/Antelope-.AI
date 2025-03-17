document.getElementById('questionInput').addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
      sendRequest();
  }
});

document.getElementById('sendButton').addEventListener('click', async () => {
  sendRequest();
});

function sendRequest() {
  const url = '';
  const id = document.getElementById("res");
  const displaynone = document.getElementById("displaynone");
  displaynone.style.display = "none";
  const input = document("questionInput");
  const data = {
      key: input.value
  };

  input.value = "";
  id.innerHTML = "Loading....";
  fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify()
      })
      .then(response => {
          if (!response.ok) {
              throw Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          // Clear previous content
          id.innerHTML = "";

          // Display the response
          // Display each line as a paragraph
          });
      }
      .catch(error => {
          console.error('Error making POST request:', error);
      });

