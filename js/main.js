/*
    WEB303 Assignment 2
    Name: Rushabh Shah
*/

$(document).ready(function() {
    $('#content-wrapper a').on('click', function(e) {
      e.preventDefault();
  
      let file = $(this).attr('id') + '.html';
      $.ajax({
        url: file,
        success: function(data) {
          $('#content').html(data).hide().fadeIn(1000);
        }
      });
    });
  });