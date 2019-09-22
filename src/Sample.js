import React from 'react';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.onClickButton1 = this.onClickButton1.bind(this);
  }

  onClickButton1() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  onClickButton2 (){
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <span>State: {count}</span>
        <button className="button1" onClick={this.onClickButton1}>Button1</button>
        <button className="button2" onClick={this.onClickButton2}>Button2</button>
      </div>
    );
  }
}

export default Sample;