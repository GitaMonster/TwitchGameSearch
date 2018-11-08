import React from 'react';

class ResultsItem extends React.Component {
  // constructor(props) {
    // super(props);
    // this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  render() {
    return (
      <button className="results-item" onClick={this.props.onClick}>{this.props.text}</button>
    );
  }
}

export default ResultsItem;
