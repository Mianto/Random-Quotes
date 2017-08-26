$(document).ready(function() {
  updateQuote();
  $('#next').on('click', updateQuote);
});
  function updateQuote(){
    $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com?cat=famous",
      method: "GET",
      dataType: "json",
      error: function(err) { alert(err); },
      beforeSend: function(xhr){
        xhr.setRequestHeader("X-Mashape-Authorization", "k41RJAjbdZmshe5gUSx4NwHMoYkap1SKYa9jsnjJ2hKtqiQcnt");
      }
      }).done(function(data){
        $("#quote").text(data.quote);
        $(".author").text("- " + data.author);
        $('.twitter-share').attr('href','https://twitter.com/intent/tweet?text=' + data.quote + ' '+data.author +'');
        $('.tumblr-share').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption='+encodeURIComponent(data.quote)+'&content=' + encodeURIComponent(data.author)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
      })
}