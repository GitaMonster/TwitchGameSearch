import React from 'react';

class Sidebar extends React.Component {

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__title">{this.props.title}</div>
        <img src="https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x190.jpg"/>
      </div>
    );
  }
}

export default Sidebar;
