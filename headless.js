var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = {width: 1920, height: 1080};

page.onConsoleMessage = function(msg) {
  console.log(msg);
}

page.open('http://localhost:1337/#/todo', function start(status) {
  var title = page.evaluate(function() {
    return document.title
  })
  console.log('Page title is' + title);
  page.includeJs('https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js',
  function() {
    page.evaluate(function() {
      console.log("my page is evaluating")
      $('#add').click();
    })
  })
})

setTimeout(function() {
  page.render('after.jpeg', {format: 'jpeg', quality: '100'})
},500)

//phantom.exit();
