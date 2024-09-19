
      function loadPage2() {
        google.script.run.withSuccessHandler(function(content) {
          document.getElementById('content').innerHTML = content;
        }).getPage2Content();
      }
  document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var channelId = document.getElementById('channelId').value;
    var videoId = document.getElementById('videoId').value;
    /*
    var sheetId = document.getElementById('sheetId').value;
    var folderId = document.getElementById('folderId').value;
    */

    if ((channelId || videoId)/* && sheetId && folderId*/) {
      // Call the Apps Script function using a Web App URL
      google.script.run.withSuccessHandler(onSuccess).fetchVideosAndSubtitles(channelId, videoId/*, sheetId, folderId*/);
    } else {
      document.getElementById('message').textContent = 'Please fill out all fields.';
    }
  });

  function onSuccess() {
    document.getElementById('message').textContent = 'Videos have been successfully processed and saved!';
  }
