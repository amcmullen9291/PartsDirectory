import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DepartmentListings from './DepartmentListings';

class MenuButton extends Component {

constructor(props, context) {
  super(props, context);

  this.state = {
    visible: true,
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
  let buttonText = document.getElementById('roundButton');
  buttonText.innerHTML = "";
  let menu = document.getElementById('menuArea');
  menu.style.visibility = 'visible';
  }
    if(window.visibility === false){
  let menu = document.getElementById('menuArea');
  menu.style.visibility = 'hidden';
      setTimeout(() => {  let buttonText = document.getElementById('roundButton');
      buttonText.innerHTML = "Sort Results by Department Again"; }, 2000);

    }
}

   sortByDepartment(e){
    const newList = DepartmentListings.inventory.filter(item=> item.department === e.target.value);
            console.log("Department:", e.target.value);
            console.log("New List:", newList);
            DepartmentListings.setInventory(newList);
    }

handleChange(value) {console.log("Department: ", value.value);}

  render() {

  const options = [
    'Kitchen', 'Small Tools & Accessories', 'Bathrooms', 'Garden', 'Lumber', 'Home', 'Paints', 'ToolBox Kits'
  ];
  const defaultOption = options[0];

    return (
    <>
      <button id="roundButton" onClick={this.toggleMenu}> Sort Results by Department</button>
      <div id="menuArea">
      <div id="slide">
        <Dropdown id="DepartmentsLists" options={options} onChange={this.handleChange} value={this.state.selected} onClick={(e) => {this.sortByDepartment(e)}} placeholder="Select an option" />
      </div>
      </div>
     </>
    );
  }
}

export default MenuButton;