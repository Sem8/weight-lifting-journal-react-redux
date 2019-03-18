import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class WorkoutPage extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    
  render() {
    return (
      <div>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Add Workout
            </DropdownToggle>
            <DropdownMenu>          
              <DropdownItem>Cardio Exercise(s)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Weight Lifting</DropdownItem>
            </DropdownMenu>
      </ButtonDropdown>

      <span><i className='fas fa-window-close' /></span> {'  '}  
      <div>
        </div>    
      
      
        
      </div>
    )
  }
}

export default WorkoutPage;