import React, { Component } from "react";
import MenuButton from './MenuButton';

class DropdownMenu extends Component {

constructor(props, context) {
  super(props, context);

  this.state = {
    visible: false
  };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
}

handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

toggleMenu() {
  this.setState({
      visible: !this.state.visible
  });
}
  render() {
    return (
    <>
    <MenuButton handleMouseDown={this.handleMouseDown}/>
      <div>
        <div>
          <p>Can you spot the item that doesn&#39;t belong?</p>
          <ul id="container">
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
            </div>
        </div>
        </>
    );
  }
}

export default DropdownMenu;