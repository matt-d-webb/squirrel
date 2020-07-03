import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, Card } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="3" md="6">
          <Card className="card-box border-0 card-shadow-first p-4 mb-5">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-first text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'keyboard']} />
              </div>
              <div className="text-black-50">Current</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-down']}
                className="font-size-sm text-danger mr-2"
              />
              <div>£3,485</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+36%</b> from last month
            </div>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="card-box border-0 card-shadow-success p-4 mb-5">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-success text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'file-excel']} />
              </div>
              <div className="text-black-50">Reports</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['far', 'dot-circle']}
                className="font-size-sm text-warning mr-2"
              />
              <div>436</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+65%</b> from last month
            </div>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="card-box border-0 card-shadow-danger p-4 mb-5">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-danger text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'user']} />
              </div>
              <div className="text-black-50">Customers</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-up']}
                className="font-size-sm text-success mr-2"
              />
              <div>4867</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+22%</b> from last month
            </div>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="card-box border-0 card-shadow-primary p-4 mb-5">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-primary text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'user']} />
              </div>
              <div className="text-black-50">Sales</div>
            </div>
            <div className="display-3 text-center line-height-sm text-black-50 text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-down']}
                className="font-size-sm text-first mr-2"
              />
              <div>433</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+32%</b> from last month
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
