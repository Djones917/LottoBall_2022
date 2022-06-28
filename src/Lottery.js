import React, { Component } from "react";

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }
    constructor() {
        super(props);
        this.state = {nums: []};
    }
}

export default Lottery;