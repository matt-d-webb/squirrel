import React, { Fragment, Component } from 'react';

import { Row, Col, Button } from 'reactstrap';

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
        <Row className="text-center mb-5 mt-3">
          <Col>
            <SweetProgress
              percent={this.state.percent}
              type="circle"
              width={90}
              strokeWidth={this.props.strokeWidth}
            />
          </Col>
          <Col>
            <SweetProgress
              percent={this.state.percent}
              status="success"
              type="circle"
              width={92}
              strokeWidth={this.props.strokeWidth}
            />
          </Col>
          <Col>
            <SweetProgress
              percent={this.state.percent}
              status="error"
              type="circle"
              width={90}
              strokeWidth={this.props.strokeWidth}
            />
          </Col>
        </Row>

        <div className="divider my-2" />

        <div className="text-center">
          <Button
            onClick={this.onDecClick}
            className="m-2"
            size="sm"
            color="primary">
            -
          </Button>
          <Button
            onClick={this.onIncClick}
            className="m-2"
            size="sm"
            color="primary">
            +
          </Button>
        </div>

        <div className="divider mt-2 mb-5" />

        <Row className="text-center mb-3">
          <Col>
            <SweetProgress type="circle" width={52} percent={62} />
          </Col>
          <Col>
            <SweetProgress type="circle" width={72} percent={23} />
          </Col>
          <Col>
            <SweetProgress
              type="circle"
              strokeWidth={2}
              percent={70}
              status="error"
              width={92}
            />
          </Col>
          <Col>
            <SweetProgress type="circle" percent={34} width={112} />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
