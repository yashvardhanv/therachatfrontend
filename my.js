 function getBotResponse() {
      var rawText = $("#textInput").val();
      var userHtml = '<div class="ChatItem ChatItem--expert"><div class="ChatItem-chatText">' + rawText + "</div></div>";
      $("#textInput").val("");
      $("#chatbox").append(userHtml);
      document
        .getElementById("userInput")
        .scrollIntoView({ block: "start", behavior: "smooth" });
        var data= "<img src='1.jpg' height='100%' width='100%'>"
        var botHtml = '<div class="ChatItem ChatItem--customer"><div class="ChatItem-chatText">' + data + "</div></div>";
        $("#chatbox").append(botHtml);
        document
          .getElementById("userInput")
          .scrollIntoView({ block: "start", behavior: "smooth" });
      
    }
    $("#textInput").keypress(function (e) {
      if (e.which == 13) {
        getBotResponse();
      }
    });
