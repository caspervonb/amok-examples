var React       = require('react');
var Application = require('./application');

window.addEventListener('load', function() {
  React.render(<Application />, document.body);
});

window.addEventListener('source', function() {
  React.render(<Application />, document.body);
});
