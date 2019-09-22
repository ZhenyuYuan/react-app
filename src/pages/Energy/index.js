import React, { Component } from 'react';
import AbilityIntroduction from './components/AbilityIntroduction';

export default class Energy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="energy-page">
        {/* 产品能力介绍 */}
        <AbilityIntroduction />
      </div>
    );
  }
}
