import React, { Fragment } from 'react';

import { Row, Col } from 'reactstrap';

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000
  };

  state = {
    valuesIndex: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
      });
    }, this.props.interval);
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

const percentage = 66;
const percentage3 = 81;
const percentage4 = 38;
const percentage5 = 73;

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row className="text-center">
        <Col xl="2" md="4" sm="6">
          <div className="m-3">
            <CircularProgressbar
              value={34}
              styles={buildStyles({
                textColor: 'var(--success)',
                pathColor: 'var(--success)',
                trailColor: 'var(--light)'
              })}
            />
          </div>
        </Col>
        <Col xl="2" md="4" sm="6">
          <div className="m-3">
            <CircularProgressbar
              value={percentage}
              text={percentage + '%'}
              strokeWidth={5}
              styles={buildStyles({
                textColor: 'var(--dark)',
                pathColor: 'var(--danger)',
                trailColor: 'var(--secondary)'
              })}
            />
          </div>
        </Col>
        <Col xl="2" md="4" sm="6">
          <div className="m-3">
            <CircularProgressbar
              value={percentage3}
              text={percentage3 + '%'}
              styles={buildStyles({
                textColor: 'var(--danger)',
                pathColor: 'var(--primary)',
                trailColor: 'var(--light)'
              })}
            />
          </div>
        </Col>
        <Col xl="2" md="4" sm="6">
          <div className="m-3">
            <CircularProgressbar
              value={percentage4}
              text={percentage4 + '%'}
              styles={buildStyles({
                textSize: '14px',
                textColor: 'var(--second)',
                pathColor: 'var(--warning)',
                trailColor: 'var(--light)'
              })}
            />
          </div>
        </Col>
        <Col xl="2" md="4" sm="6">
          <div className="m-3">
            <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
              {percentage => (
                <CircularProgressbar
                  value={percentage}
                  text={percentage + '%'}
                />
              )}
            </ChangingProgressProvider>
          </div>
        </Col>
        <Col xl="2" md="4" sm="6">
          <div className="m-3">
            <CircularProgressbarWithChildren
              value={75}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: 'var(--neutral-first)',
                trailColor: 'transparent'
              })}>
              <div style={{ width: '84%' }}>
                <CircularProgressbar
                  value={70}
                  styles={buildStyles({
                    trailColor: 'transparent',
                    pathColor: 'var(--first)'
                  })}
                />
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </Col>
        <Col xl="2" md="4" sm="6">
          <div className="m-3">
            <CircularProgressbar
              value={percentage5}
              text={percentage5 + ' %'}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: 'var(--success)',
                textColor: '#fff',
                pathColor: '#fff',
                trailColor: 'transparent'
              })}
            />
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
