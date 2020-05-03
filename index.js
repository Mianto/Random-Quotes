$(document).ready(function() {
  updateQuote();
  $('#next').on('click', updateQuote);
});
function updateQuote(){
  $.ajax({
    url: "http://quotes.stormconsultancy.co.uk/random.json",
    method: "GET",
    dataType: "json",
    error: function(err) { alert(err); },
    }).done(function(data){
      $("#quote").text(data.quote);
      $(".author").text("- " + data.author);
      $('.twitter-share').attr('href','https://twitter.com/intent/tweet?text=' + data.quote + ' '+data.author +'');
      $('.tumblr-share').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption='+encodeURIComponent(data.quote)+'&content=' + encodeURIComponent(data.author)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    })
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);