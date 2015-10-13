'use strict';

(function () {

  var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

  $.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    method: 'get'
  }).then(function (response) {
    console.log(response);

    //   // console.log('It Works!');
    //   // console.log($);
    //   // console.log(_);

    // var theItems = etsy;

    //TEMPLATE STRING
    var itemTemplate = $('#info-template').text();

    //MAKE TEMPLATE FUNCTION
    var renderTemplate = _.template(itemTemplate);

    _.each(response.results, function (i) {

      var freshHTML = renderTemplate(i);

      $('#TheScript').append(freshHTML);
    });
  });

  // // console.dir(etsy)
})();