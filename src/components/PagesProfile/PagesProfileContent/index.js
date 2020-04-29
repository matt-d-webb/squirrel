import React, { Fragment, useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  CardBody,
  Card,
  Badge,
  UncontrolledTooltip,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button
} from 'reactstrap';
import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import hero1 from '../../../assets/images/hero-bg/hero-1.jpg';
import hero2 from '../../../assets/images/hero-bg/hero-2.jpg';
import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';
import hero4 from '../../../assets/images/hero-bg/hero-4.jpg';
import hero5 from '../../../assets/images/hero-bg/hero-5.jpg';
import hero6 from '../../../assets/images/hero-bg/hero-6.jpg';

const LivePreviewExample = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <Row>
        <Col xl="4" lg="6">
          <div className="bg-midnight-bloom p-3 rounded text-white h-100">
            <div className="d-flex align-items-start justify-content-between">
              <div className="avatar-icon-wrapper d-100">
                <Badge color="success" className="badge-circle">
                  Online
                </Badge>
                <div className="avatar-icon d-100">
                  <img alt="..." src={avatar7} />
                </div>
              </div>
              <Button
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                size="sm"
                color="first"
                className="shadow-none">
                Follow
              </Button>
            </div>
            <div className="font-weight-bold font-size-lg d-flex align-items-center mt-2 mb-0">
              <span>Kate Stacey</span>
            </div>
            <p className="mb-4 font-size-md text-white-50">@kateST</p>
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              size="sm"
              outline
              color="light"
              className="shadow-none mr-2">
              Send message
            </Button>
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              size="sm"
              color="warning"
              className="shadow-none"
              id="AddFavouritesTooltip1">
              <FontAwesomeIcon icon={['fas', 'star']} />
            </Button>
            <UncontrolledTooltip target="AddFavouritesTooltip1">
              Add to favourites
            </UncontrolledTooltip>
            <p className="text-white-50 mb-0 py-4">
              Short profile bio description here. Pleasure of the moment, so
              blinded by desire, that they cannot foresee...{' '}
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="text-white">
                Read more
              </a>
            </p>

            <div className="pt-3 pb-4">
              <Row className="no-gutters text-center">
                <Col>
                  <b className="d-block font-weight-bold font-size-lg">456</b>
                  <small className="text-uppercase text-white-50">
                    friends
                  </small>
                </Col>
                <Col>
                  <b className="d-block font-weight-bold font-size-lg">1.3k</b>
                  <small className="text-uppercase text-white-50">
                    updates
                  </small>
                </Col>
                <Col>
                  <b className="d-block font-weight-bold font-size-lg">34</b>
                  <small className="text-uppercase text-white-50">
                    followers
                  </small>
                </Col>
              </Row>
            </div>
            <div className="font-weight-bold font-size-lg d-flex align-items-center mb-3">
              <span>Followers</span>
              <div className="ml-auto font-size-xs">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="text-white"
                  id="AddSubscriber">
                  <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                </a>
                <UncontrolledTooltip target="AddSubscriber">
                  Add new subscriber
                </UncontrolledTooltip>
              </div>
            </div>
            <div className="py-2">
              <div className="align-box-row">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="avatar-icon-wrapper avatar-icon-md text-white">
                  <Badge color="success" className="badge-circle">
                    Online
                  </Badge>
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar1} />
                  </div>
                </a>
                <div className="pl-2">
                  <span className="d-block">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="text-white">
                      Adella Galen
                    </a>
                    <small className="d-block text-white-50">
                      (Galen@example.com)
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="align-box-row">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="avatar-icon-wrapper avatar-icon-md text-white">
                  <Badge color="danger" className="badge-circle">
                    Offline
                  </Badge>
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar2} />
                  </div>
                </a>
                <div className="pl-2">
                  <span className="d-block">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="text-white">
                      Mandy Erle
                    </a>
                    <small className="d-block text-white-50">
                      (Mandyrle@gma.com)
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="align-box-row">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="avatar-icon-wrapper avatar-icon-md text-white">
                  <Badge color="success" className="badge-circle">
                    Online
                  </Badge>
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar3} />
                  </div>
                </a>
                <div className="pl-2">
                  <span className="d-block">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="text-white">
                      John Doe
                    </a>
                    <small className="d-block text-white-50">
                      (Galen@example.com)
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="align-box-row">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="avatar-icon-wrapper avatar-icon-md text-white">
                  <Badge color="warning" className="badge-circle">
                    Idle
                  </Badge>
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar4} />
                  </div>
                </a>
                <div className="pl-2">
                  <span className="d-block">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="text-white">
                      Napoleon Stacey
                    </a>
                    <small className="d-block text-white-50">
                      (Napoleon@test.com)
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="divider opacity-2 my-4" />
            <div className="font-weight-bold font-size-lg d-flex align-items-center mb-3">
              <span>Mutual connections</span>
            </div>
            <div className="py-2">
              <div className="avatar-wrapper-overlap mb-3">
                <div className="avatar-icon-wrapper">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar1} />
                  </div>
                </div>
                <div className="avatar-icon-wrapper">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar7} />
                  </div>
                </div>
                <div className="avatar-icon-wrapper">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar1} />
                  </div>
                </div>
                <div className="avatar-icon-wrapper">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar2} />
                  </div>
                </div>
                <div className="avatar-icon-wrapper">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar6} />
                  </div>
                </div>
              </div>
            </div>
            <small className="text-white-50">
              <b className="d-block pb-1 text-white-50">
                You have 25 mutual connections
              </b>
              You and John both know Kate Erle, Napoleon Stacey, and 23 others
            </small>
            <div className="divider opacity-2 my-4" />
            <div className="font-weight-bold font-size-lg d-flex align-items-center mb-3">
              <span>Job titles</span>
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between">
                <span className="d-block">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="text-white">
                    Software developer
                  </a>
                </span>
                <Badge color="dark">22</Badge>
              </div>
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between">
                <span className="d-block">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="text-white">
                    QA Engineer
                  </a>
                </span>
                <Badge color="dark">23</Badge>
              </div>
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between">
                <span className="d-block">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="text-white">
                    UX Specialist
                  </a>
                </span>
                <Badge color="dark">76</Badge>
              </div>
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between">
                <span className="d-block">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="text-white">
                    Frontend Architect
                  </a>
                </span>
                <Badge color="dark">15</Badge>
              </div>
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between">
                <span className="d-block">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="text-white">
                    DevOps Manager
                  </a>
                </span>
                <Badge color="dark">5</Badge>
              </div>
            </div>
            <div className="divider opacity-3 my-4" />
            <Card className="card-box mt-4 mb-4 bg-white text-light">
              <CardBody>
                <div className="align-box-row align-items-start">
                  <div className="font-weight-bold">
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Contacts
                    </small>
                    <span className="font-size-xxl text-black mt-1">
                      23,274
                    </span>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-midnight-bloom text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'building']} />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-up']}
                    className="text-warning"
                  />
                  <span className="text-warning px-1">12.1%</span>
                  <span className="text-black-50">same as before</span>
                </div>
              </CardBody>
            </Card>
            <Row className="font-size-xs">
              <Col>
                <Card className="text-center my-2 p-3">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="font-size-xxl text-success"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg text-black">345</b>
                    <span className="text-black-50 d-block">friends</span>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="text-center my-2 p-3">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xxl text-danger"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg text-black">2,693</b>
                    <span className="text-black-50 d-block">messages</span>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl="8" lg="6">
          <div className="tabs-animated tabs-animated-line mt-5 mt-lg-0">
            <Nav tabs justified>
              <NavItem>
                <NavLink
                  className={clsx({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}>
                  <span className="d-flex justify-content-center align-items-center pb-3">
                    <span className="d-inline-block w-auto">Updates</span>
                    <Badge
                      color="neutral-primary"
                      className="ml-2 d-inline-block w-auto text-primary">
                      51
                    </Badge>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={clsx({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}>
                  <span className="d-flex justify-content-center align-items-center pb-3">
                    <span className="d-inline-block w-auto">New posts</span>
                    <Badge
                      color="neutral-primary"
                      className="ml-2 d-inline-block w-auto text-primary">
                      625
                    </Badge>
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row className="mt-5">
                <Col lg="12" xl="6" md="6">
                  <div className="rounded card card-box bg-white mb-5">
                    <div className="p-4">
                      <div className="align-box-row">
                        <div className="font-weight-bold">
                          <small className="text-black-50 d-block mt-2 mb-2 text-uppercase">
                            New Accounts
                          </small>
                          <span className="font-size-xxl ">586,356</span>
                        </div>
                        <div className="ml-auto">
                          <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle">
                            <FontAwesomeIcon icon={['far', 'lightbulb']} />
                          </div>
                        </div>
                      </div>
                      <div className="mt-1">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-up']}
                          className="text-danger"
                        />
                        <span className="text-success pr-1">15.4%</span>
                        <span className="text-black-50">increase</span>
                      </div>
                      <div className="mt-4">
                        <Button className="btn-pill" outline color="primary">
                          <span className="btn-wrapper--label">
                            View report
                          </span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'angle-right']} />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="12" xl="6" md="6">
                  <div className="rounded card card-box bg-white mb-5">
                    <div className="p-4">
                      <div className="align-box-row">
                        <div className="font-weight-bold">
                          <small className="text-black-50 d-block mt-2 mb-2 text-uppercase">
                            New followers
                          </small>
                          <span className="font-size-xxl ">4,725</span>
                        </div>
                        <div className="ml-auto">
                          <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle">
                            <FontAwesomeIcon icon={['far', 'thumbs-up']} />
                          </div>
                        </div>
                      </div>
                      <div className="mt-1">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-up']}
                          className="text-danger"
                        />
                        <span className="text-warning pr-1">-5.34%</span>
                        <span className="text-black-50">decrease</span>
                      </div>
                      <div className="mt-4">
                        <Button className="btn-pill" outline color="primary">
                          <span className="btn-wrapper--label">
                            View report
                          </span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'angle-right']} />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Card className="card-box shadow-none bg-white mb-5">
                <CardBody>
                  <Row>
                    <Col lg="6" md="3">
                      <div className="text-center">
                        <span className="text-black-50 d-block">Users</span>
                        <b className="font-size-xxl">1,466</b>
                      </div>
                    </Col>
                    <Col lg="6" md="3">
                      <div className="text-center">
                        <span className="text-black-50 d-block">Revenue</span>
                        <b className="font-size-xxl text-danger">$6,465</b>
                      </div>
                    </Col>
                    <Col lg="12" md="6" className="align-box-row">
                      <div className="w-100 mt-3 mt-md-0">
                        <div className="mb-1">
                          <span className="text-black-50">Progress:</span>
                          <span className="text-warning">-5</span>
                        </div>
                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                          <div
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="43"
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: '43%' }}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card className="card-box mb-5">
                <div className="card-header bg-light">
                  <div className="card-header--title">
                    <small>Profiles</small>
                    <b className="font-size-lg d-flex align-items-center">
                      Latest activities
                    </b>
                  </div>
                  <div className="card-header--actions">
                    <Button
                      tag="a"
                      href="#/"
                      onClick={e => e.preventDefault()}
                      color="link"
                      className="btn-link-primary p-0 font-size-xl text-primary"
                      id="ViewOptionsTooltip1">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </Button>
                    <UncontrolledTooltip target="ViewOptionsTooltip1">
                      View options
                    </UncontrolledTooltip>
                  </div>
                </div>
                <CardBody>
                  <div className="d-flex align-items-center mb-3">
                    <div className="align-box-row">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="avatar-icon-wrapper avatar-icon-md text-white">
                        <Badge color="success" className="badge-circle">
                          Online
                        </Badge>
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar1} />
                        </div>
                      </a>
                      <div className="pl-2">
                        <span className="d-block">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-back">
                            Adella Galen
                          </a>
                          <small className="d-block text-back-50">
                            (Galen@example.com)
                          </small>
                        </span>
                      </div>
                    </div>
                    <small className="ml-auto text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="opacity-6 mr-2"
                      />
                      12 hours ago
                    </small>
                  </div>
                  <p>
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain, but because
                    occasionally circumstances occur in which toil and pain can
                    procure him some great pleasure.
                  </p>

                  <p>
                    To take a trivial example, which of us ever undertakes
                    laborious physical exercise, except to obtain some advantage
                    from it?
                  </p>

                  <div className="rounded p-4 bg-secondary">
                    <b className="d-block pb-1">Job description title</b>
                    <p>But who has any right to find fault with a man.</p>
                    <small className="d-block text-black-50">
                      Posted in San Francisco, CA
                    </small>
                  </div>
                </CardBody>
                <div className="card-footer d-flex justify-content-between align-items-center align-content-center">
                  <Button
                    tag="a"
                    href="#/"
                    onClick={e => e.preventDefault()}
                    size="sm"
                    color="link"
                    id="CommentsTooltip1">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'comments']} />
                    </span>
                    <span className="btn-wrapper--label ml-1">653</span>
                  </Button>
                  <UncontrolledTooltip
                    target="CommentsTooltip1"
                    placement="top">
                    There are 653 new comments available!
                  </UncontrolledTooltip>
                  <div>
                    <small className="text-muted mr-1">(21)</small>
                    <FontAwesomeIcon
                      icon={['fas', 'star']}
                      className="text-warning"
                    />
                    <FontAwesomeIcon
                      icon={['fas', 'star']}
                      className="text-warning"
                    />
                    <FontAwesomeIcon
                      icon={['fas', 'star']}
                      className="text-warning"
                    />
                    <FontAwesomeIcon
                      icon={['fas', 'star']}
                      className="text-warning"
                    />
                    <FontAwesomeIcon
                      icon={['fas', 'star']}
                      className="text-warning"
                    />
                  </div>
                </div>
              </Card>
              <Card className="card-box">
                <div className="card-header bg-light">
                  <div className="card-header--title">
                    <small>Companies</small>
                    <b className="font-size-lg d-flex align-items-center">
                      Social interests
                    </b>
                  </div>
                  <div className="card-header--actions">
                    <Button
                      tag="a"
                      href="#/"
                      onClick={e => e.preventDefault()}
                      color="link"
                      className="btn-link-primary p-0 font-size-xl text-primary"
                      id="ViewOptionsTooltip1">
                      <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </Button>
                    <UncontrolledTooltip target="ViewOptionsTooltip1">
                      View options
                    </UncontrolledTooltip>
                  </div>
                </div>
                <div className="px-5 pt-5">
                  <Row>
                    <Col lg="12" xl="6" md="6">
                      <div className="feature-box d-flex align-items-start text-black mb-5">
                        <div>
                          <div className="bg-brand-facebook text-center text-white font-size-xl d-50 rounded-circle">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                          </div>
                        </div>
                        <div className="pl-3">
                          <h3 className="font-size-lg font-weight-bold">
                            Facebook
                          </h3>
                          <p className="text-black-50 mt-2">
                            Who are so beguiled and demoralized by the charms of
                            pleasure.
                          </p>
                          <Button size="sm" outline color="dark">
                            View profile
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col lg="12" xl="6" md="6">
                      <div className="feature-box d-flex align-items-start text-black mb-5">
                        <div>
                          <div className="bg-brand-github text-center text-white font-size-xl d-50 rounded-circle">
                            <FontAwesomeIcon icon={['fab', 'github']} />
                          </div>
                        </div>
                        <div className="pl-3">
                          <h3 className="font-size-lg font-weight-bold">
                            Github
                          </h3>
                          <p className="text-black-50 mt-2">
                            Which toil and pain can procure him some great
                            pleasure.
                          </p>
                          <Button size="sm" outline color="dark">
                            View profile
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col lg="12" xl="6" md="6">
                      <div className="feature-box d-flex align-items-start text-black mb-5">
                        <div>
                          <div className="bg-brand-twitter text-center text-white font-size-xl d-50 rounded-circle">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                          </div>
                        </div>
                        <div className="pl-3">
                          <h3 className="font-size-lg font-weight-bold">
                            Twitter
                          </h3>
                          <p className="text-black-50 mt-2">
                            To take a trivial example, which of us avoids
                            pleasure, some great pleasure.
                          </p>
                          <Button size="sm" outline color="dark">
                            View profile
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col lg="12" xl="6" md="6">
                      <div className="feature-box d-flex align-items-start text-black mb-5">
                        <div>
                          <div className="bg-brand-dribbble text-center text-white font-size-xl d-50 rounded-circle">
                            <FontAwesomeIcon icon={['fab', 'dribbble']} />
                          </div>
                        </div>
                        <div className="pl-3">
                          <h3 className="font-size-lg font-weight-bold">
                            Dribbble
                          </h3>
                          <p className="text-black-50 mt-2">
                            To take a trivial example, which of us avoids
                            pleasure, some great pleasure.
                          </p>
                          <Button size="sm" outline color="dark">
                            View profile
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </TabPane>
            <TabPane tabId="2">
              <div className="text-left mt-5 mb-5">
                <h1 className="display-4 text-black mb-2 font-weight-bold">
                  Blog posts
                </h1>
                <p className="font-size-lg text-black-50">
                  Indignation and dislike men who are so beguiled and
                  demoralized.
                </p>
              </div>
              <Row>
                <Col md="6" lg="12" xl="6">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box-hover-rise mb-5">
                    <div className="card-badges">
                      <Badge pill color="warning">
                        Warning
                      </Badge>
                    </div>
                    <img alt="..." className="card-img-top" src={hero6} />
                    <div className="card-body card-body-avatar">
                      <div className="avatar-icon-wrapper">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <h5 className="card-title font-weight-bold font-size-lg">
                        Card title
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="card-date mt-2">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="text-muted mr-1"
                        />
                        <small className="text-muted">added moments ago</small>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col md="6" lg="12" xl="6">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box-hover-rise mb-5">
                    <div className="card-badges">
                      <Badge pill color="success">
                        Success
                      </Badge>
                      <Badge pill color="neutral-info" className="text-info">
                        Info
                      </Badge>
                    </div>
                    <img alt="..." className="card-img-top" src={hero5} />
                    <div className="card-body card-body-avatar">
                      <div className="avatar-icon-wrapper">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <h5 className="card-title font-weight-bold font-size-lg">
                        Card title
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="card-date mt-2">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="text-muted mr-1"
                        />
                        <small className="text-muted">added moments ago</small>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col md="6" lg="12" xl="6">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box-hover-rise mb-5">
                    <div className="card-badges">
                      <Badge color="danger">Danger</Badge>
                    </div>
                    <img alt="..." className="card-img-top" src={hero4} />
                    <div className="card-body card-body-avatar">
                      <div className="avatar-icon-wrapper">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <h5 className="card-title font-weight-bold font-size-lg">
                        Card title
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="card-date mt-2">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="text-muted mr-1"
                        />
                        <small className="text-muted">added moments ago</small>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col md="6" lg="12" xl="6">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box-hover-rise mb-5">
                    <div className="card-badges">
                      <Badge pill color="warning">
                        Warning
                      </Badge>
                    </div>
                    <img alt="..." className="card-img-top" src={hero3} />
                    <div className="card-body card-body-avatar">
                      <div className="avatar-icon-wrapper">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <h5 className="card-title font-weight-bold font-size-lg">
                        Card title
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="card-date mt-2">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="text-muted mr-1"
                        />
                        <small className="text-muted">added moments ago</small>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col md="6" lg="12" xl="6">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box-hover-rise mb-5">
                    <div className="card-badges">
                      <Badge pill color="success">
                        Success
                      </Badge>
                      <Badge pill color="neutral-info" className="text-info">
                        Info
                      </Badge>
                    </div>
                    <img alt="..." className="card-img-top" src={hero2} />
                    <div className="card-body card-body-avatar">
                      <div className="avatar-icon-wrapper">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <h5 className="card-title font-weight-bold font-size-lg">
                        Card title
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="card-date mt-2">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="text-muted mr-1"
                        />
                        <small className="text-muted">added moments ago</small>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col md="6" lg="12" xl="6">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="card card-box-hover-rise mb-5">
                    <div className="card-badges">
                      <Badge color="danger">Danger</Badge>
                    </div>
                    <img alt="..." className="card-img-top" src={hero1} />
                    <div className="card-body card-body-avatar">
                      <div className="avatar-icon-wrapper">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <h5 className="card-title font-weight-bold font-size-lg">
                        Card title
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="card-date mt-2">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="text-muted mr-1"
                        />
                        <small className="text-muted">added moments ago</small>
                      </div>
                    </div>
                  </a>
                </Col>
              </Row>
              <div className="bg-light p-3 d-block rounded mb-5 d-flex justify-content-center">
                <Pagination className="pagination-first">
                  <PaginationItem disabled>
                    <PaginationLink
                      first
                      href="#/"
                      onClick={e => e.preventDefault()}>
                      <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem disabled>
                    <PaginationLink
                      previous
                      href="#/"
                      onClick={e => e.preventDefault()}>
                      <FontAwesomeIcon icon={['fas', 'chevron-left']} />
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      next
                      href="#/"
                      onClick={e => e.preventDefault()}>
                      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      last
                      href="#/"
                      onClick={e => e.preventDefault()}>
                      <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </div>
              <div className="text-center my-5">
                <h1 className="display-4 text-black mb-2 font-weight-bold">
                  Alternate blog posts
                </h1>
                <p className="font-size-lg text-black-50">
                  Indignation and dislike men who are so beguiled and
                  demoralized.
                </p>
              </div>
              <Row>
                <Col md="6" lg="12" xl="6">
                  <Card className="card-transparent mb-5">
                    <div className="card-img-wrapper">
                      <div className="card-badges card-badges-bottom">
                        <Badge pill color="warning">
                          Warning
                        </Badge>
                      </div>
                      <img
                        alt="..."
                        className="card-img-top rounded"
                        src={stock1}
                      />
                    </div>
                    <div className="card-body text-black text-center">
                      <h5 className="card-title font-weight-bold font-size-lg">
                        Card title
                      </h5>
                      <p className="card-text text-black-50">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button
                        size="sm"
                        outline
                        color="primary"
                        className="btn-pill mt-1 shadow-none">
                        View Details
                      </Button>
                    </div>
                  </Card>
                </Col>
                <Col md="6" lg="12" xl="6">
                  <Card className="card-transparent mb-5">
                    <div className="card-img-wrapper">
                      <div className="card-badges card-badges-bottom">
                        <Badge pill color="success">
                          Success
                        </Badge>
                        <Badge pill color="neutral-info" className="text-info">
                          Info
                        </Badge>
                      </div>
                      <img
                        alt="..."
                        className="card-img-top rounded"
                        src={stock2}
                      />
                    </div>
                    <div className="card-body text-black text-center">
                      <h5 className="card-title font-weight-bold font-size-lg">
                        Card title
                      </h5>
                      <p className="card-text text-black-50">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button
                        size="sm"
                        outline
                        color="primary"
                        className="btn-pill mt-1 shadow-none">
                        View Details
                      </Button>
                    </div>
                  </Card>
                </Col>
                <Col md="6" lg="12" xl="6">
                  <Card className="card-transparent mb-5">
                    <div className="card-img-wrapper">
                      <div className="card-badges card-badges-bottom">
                        <Badge color="danger">Danger</Badge>
                      </div>
                      <img
                        alt="..."
                        className="card-img-top rounded"
                        src={stock3}
                      />
                    </div>
                    <div className="card-body text-black text-center">
                      <h5 className="card-title font-weight-bold font-size-lg">
                        Card title
                      </h5>
                      <p className="card-text text-black-50">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button
                        size="sm"
                        outline
                        color="primary"
                        className="btn-pill mt-1 shadow-none">
                        View Details
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
      <div className="sidebar-inner-layout-overlay" />
    </Fragment>
  );
};

export default LivePreviewExample;
