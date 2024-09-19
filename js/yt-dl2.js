
  function loginButton() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    google.script.run
      .withSuccessHandler(handleLoginResponse)
      .handleLogin(username, password);
  }

  
  function loadPage1() {
        google.script.run.withSuccessHandler(function(content) {
          document.getElementById('content').innerHTML = content;
        }).getPage1Content();
      }

  function handleLoginResponse(response) {
    if (response.success) {
      document.getElementById("login-container").style.display = "none";
      document.getElementById("data-container").style.display = "block";
      loadYouTubeData();
    } else {
      document.getElementById("loginError").textContent = response.error;
    }
  }

  function loadYouTubeData(searchTerm = "") {
    google.script.run
      .withSuccessHandler(displayData)
      .loadYouTubeDataFromServer(searchTerm);
  }
  function searchButton() {
    const searchTerm = document.getElementById("search").value;
    loadYouTubeData(searchTerm);
  }

  function displayData(data) {
    const container = document.getElementById("data-table");
    container.innerHTML = ""; // Clear previous results
    const table = document.createElement("table");

    table.innerHTML = `
      <thead>
        <tr>
          <th>Video Title</th>
          <th>Video ID</th>
          <th>Subtitles</th>
        </tr>
      </thead>
      <tbody>
        ${data.length > 0 ? data.map(item => `
          <tr>
            <td>${item.title}</td>
            <td>${item.videoId}</td>
            <td><a href="${item.subtitles}" target="_blank">${item.subtitles ? 'View Subtitles' : 'No Subtitles'}</a></td>
          </tr>
        `).join('') : '<tr><td colspan="3">No results found</td></tr>'}
      </tbody>
    `;

    container.appendChild(table);
  }
