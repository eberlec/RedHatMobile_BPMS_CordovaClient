document.getElementById('say_hello').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
  $fh.cloud(
      {
        path: 'hello',
        data: {
          applicantName: document.getElementById('applicantName').value,
          emailAddress: document.getElementById('emailAddress').value,
          numberOfTravelers: document.getElementById('numberOfTravelers').value,
          fromDestination: document.getElementById('fromDestination').value,
          toDestination: document.getElementById('toDestination').value,
          dateOfArrival: document.getElementById('dateOfArrival').value,
          dateOfDeparture: document.getElementById('dateOfDeparture').value
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p>" + res.msg + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};