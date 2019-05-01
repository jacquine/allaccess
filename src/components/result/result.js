import React, { Component } from 'react'
import Museum from '../museum/museum.js'
import DropdownMenu from '../dropdownmenu/dropdownmenu.js'

export default class Result extends Component {
  render() {
    return (
      <div>
          
          <DropdownMenu className="menu"/>
          
          <div className="layout">

            <Museum 
              name = {'Cooper Hewitt Smithsonian Design Museum'}
              address = {'2 E 91st St, New York, NY 10128'}
              hours = {'10:00 AM to 6:00 PM'}
              phone = {'212-288-0700'}
              wheelchairAccess = {'Yes'}
            
            />

          </div>
          
          <Museum 
            name = {'The Frick Collection'} 
            address = {'1 E 70th St, New York, NY 10021'}
            hours = {'10:00 AM to 5:00 PM'}
            phone = {'212-288-0700'}
            wheelchairAccess = {'Yes'}  
          />

      </div>
    )
  }
}
