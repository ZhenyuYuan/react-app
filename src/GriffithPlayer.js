import Player from 'griffith'
import React, { Component } from 'react';

class GriffithPlayer extends Component {
    render() {
        const sources = {
            hd: {
              play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
            },
            sd: {
              play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
            },
          }
        return (
            <div>
            <Player sources={sources} />
            <video src="https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4" controls="controls"></video>
            </div>
        );
    }
}

export default GriffithPlayer;