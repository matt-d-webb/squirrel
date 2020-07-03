import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, Card, Badge, Button } from 'reactstrap';
import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row className="no-gutters">
        <Col xl="4" lg="6">
          <Card className="card-transparent m-4">
            <span className="ribbon-vertical ribbon-vertical--danger">
              <span>New</span>
            </span>
            <span className="ribbon-vertical ribbon-vertical--first ribbon-vertical--right text-uppercase">
              <span>-30%</span>
            </span>
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                <Badge pill color="success" className="mr-2">
                  Success
                </Badge>
                <Badge pill color="neutral-info" className="text-info">
                  Info
                </Badge>
              </div>
              <img src={stock2} className="card-img-top rounded" alt="..." />
            </div>
          </Card>
        </Col>
        <Col xl="4" lg="6">
          <Card className="card-transparent m-4">
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              color="warning"
              className="ribbon-vertical ribbon-vertical--warning">
              <span>
                <FontAwesomeIcon
                  icon={['far', 'keyboard']}
                  className="font-size-lg"
                />
              </span>
            </Button>
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              color="success"
              className="ribbon-vertical ribbon-vertical--success ribbon-vertical--right text-uppercase">
              <span>
                <FontAwesomeIcon
                  icon={['far', 'building']}
                  className="font-size-lg"
                />
              </span>
            </Button>
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                <Badge pill color="warning">
                  Warning
                </Badge>
              </div>
              <img src={stock1} className="card-img-top rounded" alt="..." />
            </div>
          </Card>
        </Col>
        <Col xl="4" lg="12">
          <Card className="card-transparent m-4">
            <span className="ribbon-vertical ribbon-vertical--primary text-uppercase">
              <span>New</span>
            </span>
            <span className="ribbon-vertical ribbon-vertical--info ribbon-vertical--right text-uppercase">
              <span>-30%</span>
            </span>
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                <Badge pill color="first">
                  New
                </Badge>
              </div>
              <img src={stock3} className="card-img-top rounded" alt="..." />
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
