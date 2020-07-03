import React, { Fragment, Component } from 'react';

import { Button } from 'reactstrap';

import { Progress as SweetProgress } from 'react-sweet-progress';

export default class LivePreviewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: props.percent || 55
    };
  }

  onDecClick = () => {
    this.setState({
      percent: this.state.percent - 10 > 0 ? this.state.percent - 10 : 0
    });
  };

  onIncClick = () => {
    this.setState({
      percent: this.state.percent + 10 < 100 ? this.state.percent + 10 : 100
    });
  };

  render() {
    return (
      <Fragment>
        <SweetProgress
          className="mb-5"
          percent={this.state.percent}
          width={this.props.width}
          strokeWidth={this.props.strokeWidth}
        />
        <SweetProgress
          className="mb-5"
          percent={this.state.percent}
          status="success"
          width={this.props.width}
          strokeWidth={this.props.strokeWidth}
        />
        <SweetProgress
          className="mb-5"
          percent={this.state.percent}
          status="error"
          width={this.props.width}
          strokeWidth={this.props.strokeWidth}
        />
        <div className="text-center">
          <Button
            onClick={this.onDecClick}
            size="sm"
            className="m-2"
            color="primary">
            -
          </Button>
          <Button
            onClick={this.onIncClick}
            size="sm"
            className="m-2"
            color="primary">
            +
          </Button>
        </div>
      </Fragment>
    );
  }
}
