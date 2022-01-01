import React, { Component } from "react";
import DropdownMenu from './DropdownMenu';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

var visibility = "";
class MenuButton extends Component {

constructor(props, context) {
  super(props, context);

  this.state = {
    visible: true
  };

  this.toggleMenu = this.toggleMenu.bind(this);
}


toggleMenu() {
  this.setState({
      visible: !this.state.visible,
  });
  window.visibility = !window.visibility;
  console.log("Visibility: ", window.visibility);
  if(window.visibility === true){
  let menu = document.getElementById('menuArea');
  menu.style.visibility = 'visible';
  }
    if(window.visibility === false){
  let menu = document.getElementById('menuArea');
  menu.style.visibility = 'hidden';
    }
}
  render() {

  const options = [
    'Kitchen', 'Small Tools & Appliances', 'Bathroom', 'Garden', 'Lumber'
  ];
  const defaultOption = options[0];

    return (
    <>
      <button id="roundButton" onClick={this.toggleMenu}> Departments</button>
      <div id="menuArea">
      <div id="slide">
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
      </div>
      </div>
     </>
    );
  }
}

export default MenuButton;