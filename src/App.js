import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';

// 数据源
const data = [
  { genre: 'Sports', sold: 275, income: 2300 },
  { genre: 'Strategy', sold: 115, income: 667 },
  { genre: 'Action', sold: 120, income: 982 },
  { genre: 'Shooter', sold: 350, income: 5271 },
  { genre: 'Other', sold: 150, income: 3710 }
];

// 定义度量
const cols = {
  sold: { alias: '销售量' },
  genre: { alias: '游戏种类' }
};




class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button>点我</Button>
          <Button>再点我</Button>
        </header> */}
        <Chart 
        // onGetG2Instance={chartIns => {
        //   chartIns.downloadImage();
        // }}
        width={600} height={400} data={data} scale={cols}>
          <Axis name="genre" title />
          <Axis name="sold" title />
          <Legend position="top" dy={-20} />
          <Tooltip />
          <Geom type="interval" position="genre*sold" color="genre" />
        </Chart>
      </div>
    );
  }
}

export default App;
