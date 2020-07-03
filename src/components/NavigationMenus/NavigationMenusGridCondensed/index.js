import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, Card, UncontrolledTooltip, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col lg="6">
          <div className="p-2 text-center menu-items-container-2">
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              color="primary"
              className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded"
              id="ExampleTooltip195">
              <FontAwesomeIcon
                icon={['far', 'building']}
                className="font-size-xxl text-white"
              />
            </Button>
            <UncontrolledTooltip
              target="ExampleTooltip195"
              container=".menu-items-container-2">
              Menu Example
            </UncontrolledTooltip>
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              color="success"
              className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded"
              id="ExampleTooltip196">
              <FontAwesomeIcon
                icon={['far', 'question-circle']}
                className="font-size-xxl text-white"
              />
            </Button>
            <UncontrolledTooltip
              target="ExampleTooltip196"
              container=".menu-items-container-2">
              Menu example
            </UncontrolledTooltip>
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              color="danger"
              className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded"
              id="ExampleTooltip197">
              <FontAwesomeIcon
                icon={['far', 'user-circle']}
                className="font-size-xxl text-white"
              />
            </Button>
            <UncontrolledTooltip
              target="ExampleTooltip197"
              container=".menu-items-container-2">
              Menu Example
            </UncontrolledTooltip>
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              color="primary"
              className="m-3 border-0 p-0 shadow-sm bg-sunny-morning d-inline-block text-center d-70 rounded"
              id="ExampleTooltip198">
              <FontAwesomeIcon
                icon={['far', 'object-group']}
                className="font-size-xxl text-white"
              />
            </Button>
            <UncontrolledTooltip
              target="ExampleTooltip198"
              container=".menu-items-container-2">
              Menu Example
            </UncontrolledTooltip>
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              color="primary"
              className="m-3 border-0 p-0 shadow-sm bg-strong-bliss d-inline-block text-center d-70 rounded"
              id="ExampleTooltip199">
              <FontAwesomeIcon
                icon={['far', 'keyboard']}
                className="font-size-xxl text-white"
              />
            </Button>
            <UncontrolledTooltip
              target="ExampleTooltip199"
              container=".menu-items-container-2">
              Menu Example
            </UncontrolledTooltip>
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              color="primary"
              className="m-3 border-0 p-0 shadow-sm bg-night-sky d-inline-block text-center d-70 rounded"
              id="ExampleTooltip194">
              <FontAwesomeIcon
                icon={['far', 'comment-dots']}
                className="font-size-xxl text-white"
              />
            </Button>
            <UncontrolledTooltip
              target="ExampleTooltip194"
              container=".menu-items-container-2">
              Menu Example
            </UncontrolledTooltip>
          </div>
        </Col>
        <Col lg="6">
          <Card className="card-box bg-premium-dark border-0">
            <div className="p-2 text-center menu-items-container">
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                id="MenuExampleTooltip535"
                color="link"
                className="m-3 p-0 border-0 bg-love-kiss d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'question-circle']}
                  className="font-size-xxl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip535"
                container=".menu-items-container">
                Menu example
              </UncontrolledTooltip>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                id="MenuExampleTooltip536"
                color="link"
                className="m-3 p-0 border-0 bg-ripe-malin d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'building']}
                  className="font-size-xxl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip536"
                container=".menu-items-container">
                Menu Example
              </UncontrolledTooltip>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                id="MenuExampleTooltip537"
                color="link"
                className="m-3 p-0 border-0 bg-grow-early d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'bell']}
                  className="font-size-xxl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip537"
                container=".menu-items-container">
                Menu Example
              </UncontrolledTooltip>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                id="MenuExampleTooltip538"
                color="link"
                className="m-3 p-0 border-0 bg-arielle-smile d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'file-excel']}
                  className="font-size-xxl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip538"
                container=".menu-items-container">
                Menu Example
              </UncontrolledTooltip>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                id="MenuExampleTooltip539"
                color="link"
                className="m-3 p-0 border-0 bg-night-fade d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'eye']}
                  className="font-size-xxl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip539"
                container=".menu-items-container">
                Menu Example
              </UncontrolledTooltip>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                id="MenuExampleTooltip534"
                color="link"
                className="m-3 p-0 border-0 bg-strong-bliss d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'chart-bar']}
                  className="font-size-xxl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip534"
                container=".menu-items-container">
                Menu Example
              </UncontrolledTooltip>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
