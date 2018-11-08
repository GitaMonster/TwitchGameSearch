import React from 'react';

class SearchField extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};

  //   this.updateValue = this.updateValue.bind(this);
  // }

  // updateValue(event) {
  //   this.setState({
  //     value: event.target.value
  //   });
  // }

  render() {
    return (
      <div className="input-area">
        <div className="search-label"><b>Search:</b></div>
        <form onChange={this.props.onChange}>
            <input type="text"/>
        </form>
      </div>
    );
  }
}

export default SearchField;
