document.getElementById('openModalBtn').addEventListener('click', function() {
  $('#myModal').modal('show');
});

// Показать или скрыть алерт при нажатии на кнопку
document.getElementById('alertBtn').addEventListener('click', function() {
  const alertDiv = document.getElementById('myAlert');
  if (alertDiv.style.display === 'none') {
    alertDiv.style.display = 'block';
  } else {
    alertDiv.style.display = 'none';
  }
});

// Получение даты рождения от пользователя и преобразование формата
const userBirthday = prompt('Введите дату вашего рождения в формате "YYYY-MM-DD":');

if (moment(userBirthday, 'YYYY-MM-DD', true).isValid()) {
  const formattedBirthday = moment(userBirthday, 'YYYY-MM-DD').format('DD.MM.YYYY');
  alert('Ваша дата рождения в формате "DD.MM.YYYY": ' + formattedBirthday);
} else {
  alert('Ошибка! Неверный формат даты.');
}