$(function() {
  function buildHTML(message) {
    if (message.image) {
      let html =
        `<div class="Message-box">
          <div class="Message-info">
            <div class="Message-info__user-name">
              ${message.user_name}
            </div>
            <div class="Message-info__date">
              ${message.created_at}
            </div>
          </div>
          <p class="Message-box__message">
            ${message.message}
          </p>
          <img class="Message__image" src="${message.image}">
        </div>` 
      return html;
    } else {
      let html =
      `<div class="Message-box">
        <div class="Message-info">
          <div class="Message-info__user-name">
            ${message.user_name}
          </div>
          <div class="Message-info__date">
            ${message.created_at}
          </div>
        </div>
        <p class="Message-box__message">
          ${message.message}
          </p>
          </div>`
      return html
    }
  }
  $('.Form').on('submit', function(e) {
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
    })
  })
});