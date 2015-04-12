var React = require('react');
var List  = require('./list');
var Input = require('./input');

module.exports = React.createClass({
  getInitialState: function() {
    return {items: []}
  },

  addItem: function(itemName) {
    this.setState({items: this.state.items.concat([itemName])})
    return true
  },

  render: function() {
    return (
      <div>
        <h1>Todo</h1>
        <Input onAdd={this.addItem} />
        <List items={this.state.items} />
      </div>
    )
  }
})
