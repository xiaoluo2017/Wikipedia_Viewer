$(document).ready(function() {
  $("#keyword").keypress(function(event){
    var val = $(this).val();
    var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=" + val;
    if (event.keyCode == '13') {
      $.getJSON(url, function(json) {
        var title = [], content = [];
        for (var i = 0; i < json.query.search.length; i++) {
          title.push(json.query.search[i].title);
          content.push(json.query.search[i].snippet);
        } 
        addLinks(title);
        addResults(title, content);
      });
    }
  });
});

function addLinks(title) {
  // add links
  var link = "https://en.wikipedia.org/wiki/";
  if (title.length > 0) {
    document.getElementById("result-0").onclick = function() {
      window.open(link + title[0]);
    };
  }

  if (title.length > 1) {
    document.getElementById("result-1").onclick = function() {
      window.open(link + title[1]);
    };
  }

  if (title.length > 2) {
    document.getElementById("result-2").onclick = function() {
      window.open(link + title[2]);
    };
  }

  if (title.length > 3) {
    document.getElementById("result-3").onclick = function() {
      window.open(link + title[3]);
    };
  }

  if (title.length > 4) {
    document.getElementById("result-4").onclick = function() {
      window.open(link + title[4]);
    };
  }

  if (title.length > 5) {
    document.getElementById("result-5").onclick = function() {
      window.open(link + title[5]);
    };
  } 

  if (title.length > 6) {
    document.getElementById("result-6").onclick = function() {
      window.open(link + title[6]);
    };
  }

  if (title.length > 7) {
    document.getElementById("result-7").onclick = function() {
      window.open(link + title[7]);
    };
  }

  if (title.length > 8) {
    document.getElementById("result-8").onclick = function() {
      window.open(link + title[8]);
    };
  }

  if (title.length > 9) {
    document.getElementById("result-9").onclick = function() {
      window.open(link + title[9]);
    }; 
  }
}

function addResults(title, content) {
  for (var i = 0; i < title.length; i++) {
    var id = "#result-" + i;
    $(id).html('<h4>' + title[i] + "</h4><p>" + content[i] + "</p>"); 
    // add title and content

    $(id).addClass("res");
    // add border and background
  }
  $(".blank").removeClass("blank");
}

