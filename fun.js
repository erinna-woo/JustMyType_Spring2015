console.log("this file is running!");
 $(function() {
 $("form").submit(function() { return false; });
      });

      $('#keyword').keypress(function (e) {
        if (e.keyCode == 13) {
          var text = $('#keyword').val();
          $('#keyword').val('');
          window.location = "/play";
        }
      });