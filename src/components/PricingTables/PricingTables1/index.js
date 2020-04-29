import React, { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, Card, Button, Modal } from 'reactstrap';

import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

import svgImage1 from '../../../assets/images/illustrations/business_plan.svg';

export default function LivePreviewExample() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <Fragment>
      <div className="bg-premium-dark py-3 py-xl-5">
        <div className="container py-3 py-xl-5">
          <div className="mb-5 text-center">
            <h1 className="display-3 text-white mb-2 font-weight-bold">
              Plans & pricing
            </h1>
            <p className="font-size-lg text-white-50">
              Indignation and dislike men who are so beguiled and demoralized.
            </p>
            <div role="group" className="btn-group mt-3">
              <Button
                href="#/"
                onClick={e => e.preventDefault()}
                active
                outline
                color="secondary"
                className="shadow-none">
                Monthly plans
              </Button>
              <Button
                href="#/"
                onClick={e => e.preventDefault()}
                outline
                color="secondary"
                className="shadow-none">
                Yearly plans
              </Button>
            </div>
          </div>
          <Col md="9" className="mx-auto">
            <Row className="no-gutters">
              <Col
                xl="6"
                className="order-2 order-xl-1 d-flex align-items-center">
                <Card className="bg-secondary w-100 p-5 br-xl-right-0">
                  <h5 className="font-size-xl">
                    Standard License
                    <strong className="pt-2 font-weight-bold d-block">
                      $69
                      <small className="opacity-5">one time fee</small>
                    </strong>
                  </h5>
                  <ul className="list-unstyled text-left my-4 font-weight-bold">
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['far', 'check-circle']}
                        className="text-success font-size-lg mr-2"
                      />
                      Unlimited Tasks
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['far', 'check-circle']}
                        className="text-success font-size-lg mr-2"
                      />
                      Unlimited Teams
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['far', 'check-circle']}
                        className="text-success font-size-lg mr-2"
                      />
                      All Integrations
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['far', 'times-circle']}
                        className="text-danger font-size-lg mr-2"
                      />
                      Premium support
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    block={true}
                    color="primary"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    Buy now
                  </Button>
                  <div className="mt-3">
                    <Button
                      color="link"
                      className="text-primary px-0"
                      onClick={toggleModal}
                      title="Licenses Details">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                      <span className="btn-wrapper--label">
                        Licenses Details
                      </span>
                    </Button>
                  </div>
                </Card>
              </Col>
              <Col xl="6" className="order-1 mb-5 mb-xl-0 order-xl-2">
                <Card className="w-100 shadow-lg p-5 text-white p-5 bg-plum-plate">
                  <div className="py-4">
                    <h5 className="font-size-xl">
                      Extended License
                      <strong className="pt-2 font-weight-bold d-block">
                        $99
                        <small className="opacity-5">one time fee</small>
                      </strong>
                    </h5>
                    <ul className="list-unstyled text-left my-4 font-weight-bold">
                      <li className="px-4 py-2">
                        <FontAwesomeIcon
                          icon={['far', 'check-circle']}
                          className="text-success font-size-lg mr-2"
                        />
                        Unlimited Tasks
                      </li>
                      <li className="px-4 py-2">
                        <FontAwesomeIcon
                          icon={['far', 'check-circle']}
                          className="text-success font-size-lg mr-2"
                        />
                        Unlimited Teams
                      </li>
                      <li className="px-4 py-2">
                        <FontAwesomeIcon
                          icon={['far', 'check-circle']}
                          className="text-success font-size-lg mr-2"
                        />
                        All Integrations
                      </li>
                      <li className="px-4 py-2">
                        <FontAwesomeIcon
                          icon={['far', 'times-circle']}
                          className="text-danger font-size-lg mr-2"
                        />
                        Premium support
                      </li>
                    </ul>
                    <Button
                      tag="a"
                      size="lg"
                      block={true}
                      color="warning"
                      href="#/"
                      onClick={e => e.preventDefault()}>
                      Buy now
                    </Button>
                    <div className="mt-3">
                      <Button
                        color="link"
                        className="text-white px-0"
                        onClick={toggleModal}
                        title="Licenses Details">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'question-circle']} />
                        </span>
                        <span className="btn-wrapper--label">
                          Licenses Details
                        </span>
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </div>
      </div>

      <Modal
        centered
        size="lg"
        isOpen={modal}
        toggle={toggleModal}
        zIndex={2000}>
        <div>
          <Row className="no-gutters">
            <Col lg="4">
              <img
                src={stock3}
                className="rounded-left img-fit-container"
                alt="..."
              />
            </Col>
            <Col lg="8">
              <div className="p-5">
                <img
                  src={svgImage1}
                  className="w-25 d-block img-fluid"
                  alt="..."
                />
                <h1 className="display-4 my-3 font-weight-bold">
                  License details
                </h1>
                <p className="font-size-lg text-black">
                  A free hour, when our power of choice is untrammelled and when
                  nothing prevents.
                </p>
                <p className="font-size-sm mb-3 text-black-50">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics
                </p>
                <Button
                  tag="a"
                  href="#/"
                  onClick={toggleModal}
                  block
                  color="primary">
                  Close this window
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </Fragment>
  );
}
