import React, { Fragment } from 'react';

import { Row, Col } from 'reactstrap';

import Rating from 'react-rating';

export default function LivePreviewExample() {
  const value = 0;
  const value2 = 2.5;
  const value3 = 2;

  return (
    <Fragment>
      <Row className="text-center">
        <Col>
          <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
            Basic
          </h5>
          <div className="d-flex align-items-center justify-content-center">
            <Rating initialRating={value} />
          </div>
        </Col>
        <Col>
          <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
            Readonly
          </h5>
          <div className="d-flex align-items-center justify-content-center">
            <Rating initialRating={3} readonly />
          </div>
        </Col>
        <Col>
          <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
            Fractional
          </h5>
          <div className="d-flex align-items-center justify-content-center">
            <Rating initialRating={value2} />
          </div>
        </Col>
        <Col>
          <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
            Multiple symbols
          </h5>
          <div className="d-flex align-items-center justify-content-center">
            <Rating
              stop={4}
              initialRating={value3}
              emptySymbol={[
                'pe-7s-star font-size-xxl text-dark opacity-5 mr-1',
                'pe-7s-speaker font-size-xxl text-dark opacity-5 mr-1',
                'pe-7s-signal font-size-xxl text-dark opacity-5 mr-1',
                'pe-7s-like2 font-size-xxl text-dark opacity-5 mr-1'
              ]}
              fullSymbol={[
                'pe-7s-star font-size-xxl text-success mr-1',
                'pe-7s-speaker font-size-xxl text-warning mr-1',
                'pe-7s-signal font-size-xxl text-warning mr-1',
                'pe-7s-like2 font-size-xxl text-danger mr-1'
              ]}
            />
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
