import React from "react";

class Hello extends React.Component {
  render() {
    return (<div>Hello</div>);
  }
}

React.render(<Hello />, document.body);

window.addEventListener('source', () => {
  React.render(<Hello />, document.body);
});