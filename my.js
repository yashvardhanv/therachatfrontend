 function getBotResponse() {
      var rawText = $("#textInput").val();
      var userHtml = '<div class="ChatItem ChatItem--expert"><div class="ChatItem-chatText">' + rawText + "</div></div>";
      $("#textInput").val("");
      $("#chatbox").append(userHtml);
      document
        .getElementById("userInput")
        .scrollIntoView({ block: "start", behavior: "smooth" });
        var data= '<p style="color:black;">Please Wait While Content is Loading</p><iframe width="100%" height="100%" src="https://www.youtube.com/embed/XLBKy7g3yTc"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
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
