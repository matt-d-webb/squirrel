import React, { Fragment } from 'react';

import { Row, Col, Card, Button } from 'reactstrap';
import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="4" lg="6">
          <Card className="m-3">
            <span className="ribbon-horizontal ribbon-horizontal--first">
              <span>Special Offer</span>
            </span>
            <Button
              tag="a"
              color="danger"
              href="#/"
              onClick={e => e.preventDefault()}
              className="ribbon-horizontal ribbon-horizontal--bottom ribbon-horizontal--danger">
              <span>Bottom positioned ribbon</span>
            </Button>
            <div className="card-img-wrapper">
              <img src={stock1} className="card-img-top rounded" alt="..." />
            </div>
          </Card>
        </Col>
        <Col xl="4" lg="6">
          <Card className="m-3">
            <span className="ribbon-horizontal ribbon-horizontal--primary font-weight-normal font-size-lg">
              <span>Primary ribbon</span>
            </span>
            <Button
              tag="a"
              color="success"
              href="#/"
              onClick={e => e.preventDefault()}
              className="ribbon-horizontal ribbon-horizontal--bottom ribbon-horizontal--success">
              <span>Bottom success</span>
            </Button>
            <div className="card-img-wrapper">
              <img src={stock2} className="card-img-top rounded" alt="..." />
            </div>
          </Card>
        </Col>
        <Col xl="4" lg="12">
          <Card className="m-3">
            <span className="ribbon-horizontal ribbon-horizontal--warning">
              <span>Warning ribbon</span>
            </span>
            <Button
              tag="a"
              color="info"
              href="#/"
              onClick={e => e.preventDefault()}
              className="ribbon-horizontal ribbon-horizontal--bottom ribbon-horizontal--info">
              <span>Bottom info ribbon</span>
            </Button>
            <div className="card-img-wrapper">
              <img src={stock3} className="card-img-top rounded" alt="..." />
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
