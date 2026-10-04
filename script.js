// Booking form: builds a WhatsApp message from the answers and opens the chat.
(function () {
  var WHATSAPP_NUMBER = '23057475324';
  var form = document.getElementById('booking-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var lines = [form.dataset.greeting, ''];
    form.querySelectorAll('[data-label]').forEach(function (field) {
      var value = field.value.trim();
      if (value) lines.push(field.dataset.label + ' : ' + value);
    });
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');
  });
})();
