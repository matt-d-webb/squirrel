import React, { Fragment } from 'react';

import { Row, Col, Button } from 'reactstrap';

import svgImage15 from '../../../assets/images/stock-logos/1.svg';
import svgImage16 from '../../../assets/images/stock-logos/2.svg';
import svgImage17 from '../../../assets/images/stock-logos/3.svg';
import svgImage18 from '../../../assets/images/stock-logos/4.svg';
import svgImage19 from '../../../assets/images/stock-logos/5.svg';
import svgImage20 from '../../../assets/images/stock-logos/6.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="bg-malibu-beach py-5">
        <div className="container">
          <Row>
            <Col xl="4">
              <div className="text-center text-xl-right text-white mb-5 mb-xl-0 pt-0 pt-xl-4 pr-0 pr-xl-4">
                <h1 className="display-2 mb-0 font-weight-bold">Partners</h1>
                <div className="divider border-2 my-4 border-white bg-white opacity-2 rounded-circle w-100" />
                <Button
                  tag="a"
                  href="#/"
                  onClick={e => e.preventDefault()}
                  color="warning"
                  size="lg">
                  View case studies
                </Button>
              </div>
            </Col>
            <Col xl="8">
              <Row>
                <Col md="6" className="d-flex align-items-stretch">
                  <div className="p-4 card mb-5 w-100">
                    <img src={svgImage15} className="w-50 m-auto" alt="..." />
                  </div>
                </Col>
                <Col md="6" className="d-flex align-items-stretch">
                  <div className="p-4 card mb-5 w-100">
                    <img src={svgImage16} className="w-50 m-auto" alt="..." />
                  </div>
                </Col>
                <Col md="6" className="d-flex align-items-stretch">
                  <div className="p-4 card mb-5 w-100">
                    <img src={svgImage17} className="w-50 m-auto" alt="..." />
                  </div>
                </Col>
                <Col md="6" className="d-flex align-items-stretch">
                  <div className="p-4 card mb-5 w-100">
                    <img src={svgImage18} className="w-50 m-auto" alt="..." />
                  </div>
                </Col>
                <Col md="6" className="d-flex align-items-stretch">
                  <div className="p-4 card mb-5 w-100">
                    <img src={svgImage19} className="w-50 m-auto" alt="..." />
                  </div>
                </Col>
                <Col md="6" className="d-flex align-items-stretch">
                  <div className="p-4 card mb-5 w-100">
                    <img src={svgImage20} className="w-50 m-auto" alt="..." />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
}
