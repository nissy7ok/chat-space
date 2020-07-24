$(function() {
  $('.Form').on('submit', function(e) {
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action')
    console.log(formData);
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  })
});