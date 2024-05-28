document.getElementById('checkBirthdayBtn').addEventListener('click', function() {
    const inputDate = document.getElementById('birthdayInput').value;
    if (moment(inputDate, 'YYYY-MM-DD', true).isValid()) {
      const formattedBirthday = moment(inputDate, 'YYYY-MM-DD').format('DD.MM.YYYY');
      alert('Your birth date in "DD.MM.YYYY" format is : ' + formattedBirthday);
      document.getElementById('errorAlert').style.display = 'none';
    } else {
      document.getElementById('errorAlert').style.display = 'block';
    }
  });
  document.getElementById('openModalBtn').addEventListener('click', function() {
    $('#myModal').modal('show');
  });
  document.getElementById('showAlertBtn').addEventListener('click', function() {
    const alertDiv = document.getElementById('myAlert');
    if (alertDiv.style.display === 'none') {
      alertDiv.style.display = 'block';
    } else {
      alertDiv.style.display = 'none';
    }
  });