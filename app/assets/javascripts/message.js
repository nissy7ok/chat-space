$(function() {
  function buildHTML(message) {
    if (message.image) {
      let html =
        `<div class="Message-box" data-message-id=${message.id}>
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
          <img class="Message-box__image" src="${message.image}">
        </div>` 
      return html;
    } else {
      let html =
      `<div class="Message-box" data-message-id=${message.id}>
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
      $('.Main-chat__message-list').append(html);
      $('.Main-chat__message-list').animate({ scrollTop: $('.Main-chat__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('input').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
  let reloadMessages = function() {
    let last_message_id = $('.Message-box:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.Main-chat__message-list').append(insertHTML);
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});