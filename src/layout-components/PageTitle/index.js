import React, { Fragment, Component } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Row,
  Col,
  Badge,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import { connect } from 'react-redux';

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar5 from '../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';

import people3 from '../../assets/images/stock-photos/people-3.jpg';

class PageTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    let {
      pageTitleStyle,
      pageTitleBackground,
      pageTitleShadow,
      pageTitleBreadcrumb,
      pageTitleIconBox,
      pageTitleDescription
    } = this.props;
    return (
      <Fragment>
        <div
          className={clsx(
            'app-page-title',
            pageTitleStyle,
            pageTitleBackground,
            { 'app-page-title--shadow': pageTitleShadow }
          )}>
          <div>
            {pageTitleBreadcrumb && (
              <ol className="app-page-title--breadcrumb breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <FontAwesomeIcon icon={['fas', 'tachometer-alt']} />
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Dashboards</Link>
                </li>
                <li className="breadcrumb-item active">
                  <span>{this.props.titleHeading}</span>
                </li>
              </ol>
            )}

            <div className="app-page-title--first">
              {pageTitleIconBox && (
                <div className="app-page-title--iconbox d-70">
                  <div className="d-70 d-flex gradient-icon align-items-center justify-content-center">
                    <i className="pe-7s-piggy display-3 gradient-icon bg-ripe-malin"></i>
                  </div>
                </div>
              )}
              <div className="app-page-title--heading">
                <h1>{this.props.titleHeading}</h1>
                {pageTitleDescription && (
                  <div className="app-page-title--description">
                    {this.props.titleDescription}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div className="d-flex align-items-center">
            <Button
              onClick={this.toggleModal}
              size="sm"
              className="text-nowrap"
              color="primary">
              <span className="d-none d-xl-block">Open dialog</span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['far', 'object-group']}
                  className="d-block d-xl-none"
                />
              </span>
            </Button>
            <UncontrolledDropdown className="mx-3">
              <DropdownToggle size="sm" color="primary" caret>
                <span className="btn-wrapper--label pr-2">Actions</span>
              </DropdownToggle>
              <DropdownMenu right className="dropdown-menu-xl p-0">
                <div className="bg-composed-wrapper bg-vicious-stance mt-0">
                  <div className="bg-composed-wrapper--image bg-composed-img-5" />
                  <div className="bg-composed-wrapper--content text-light text-center p-4">
                    <h5 className="mb-1">Scrollable</h5>
                    <p className="mb-0 opacity-7">
                      This menu box is scrollable (sm)
                    </p>
                  </div>
                </div>
                <div className="scroll-area-sm shadow-overflow">
                  <PerfectScrollbar>
                    <Nav className=" flex-column py-2">
                      <NavItem>
                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['far', 'chart-bar']} />
                          </div>
                          <span>Services</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#/"
                          onClick={e => e.preventDefault()}
                          active>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon
                              icon={['far', 'question-circle']}
                            />
                          </div>
                          <span>Layouts</span>
                          <Badge color="warning" className="ml-auto">
                            512
                          </Badge>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="disabled">
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['far', 'user-circle']} />
                          </div>
                          <span>Reports</span>
                        </NavLink>
                      </NavItem>
                      <NavItem className="nav-item--header">
                        <span>Others</span>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['far', 'object-group']} />
                          </div>
                          <span>Components</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['far', 'chart-bar']} />
                          </div>
                          <span>Services</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </PerfectScrollbar>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <Button size="sm" color="neutral-success">
                    Action
                  </Button>
                  <Button
                    color="link"
                    size="sm"
                    className="btn-link-success px-0">
                    <span>View details</span>
                  </Button>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button size="sm" color="success" id="AddEntryTooltip20">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['fas', 'plus']}
                  className="opacity-8 font-size-xs"
                />
              </span>
            </Button>
            <UncontrolledTooltip target="AddEntryTooltip20">
              Add new entry
            </UncontrolledTooltip>
          </div> */}
        </div>

        <Modal
          centered
          size="xl"
          isOpen={this.state.modal}
          zIndex={1300}
          toggle={this.toggleModal}
          contentClassName="border-0 bg-transparent">
          <Row className="no-gutters">
            <Col lg="5">
              <div className="bg-white rounded-left">
                <div className="p-4 text-center">
                  <div className="avatar-icon-wrapper rounded-circle mx-auto">
                    <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first">
                      <div className="rounded-circle border-3 border-white overflow-hidden">
                        <img alt="..." className="img-fluid" src={avatar5} />
                      </div>
                    </div>
                  </div>
                  <h4 className="font-size-lg font-weight-bold my-2">
                    Marion Devine
                  </h4>
                  <div className="text-center my-4">
                    <Badge
                      pill
                      color="neutral-first"
                      className="text-first mx-1">
                      Web developer
                    </Badge>
                    <Badge
                      pill
                      color="neutral-warning"
                      className="text-warning mx-1">
                      Javascript
                    </Badge>
                    <Badge
                      pill
                      color="neutral-danger"
                      className="text-danger mx-1">
                      Angular
                    </Badge>
                  </div>

                  <p className="text-muted mb-4">
                    I should be incapable of drawing a single stroke at the
                    present moment; and yet I feel that I never was a greater
                    artist than now.
                  </p>

                  <div className="divider my-4" />
                  <Row>
                    <Col lg="6">
                      <span className="opacity-6 pb-2">Current month</span>
                      <div className="d-flex align-items-center justify-content-center">
                        <span className="font-weight-bold font-size-lg">
                          <small className="opacity-6 pr-1">$</small>
                          46,362
                        </span>
                        <Badge
                          color="neutral-danger"
                          className="ml-2 text-danger">
                          -8%
                        </Badge>
                      </div>
                    </Col>
                    <Col lg="6">
                      <span className="opacity-6 pb-2">Last year</span>
                      <div className="d-flex align-items-center justify-content-center">
                        <span className="font-weight-bold font-size-lg">
                          <small className="opacity-6 pr-1">$</small>
                          34,546
                        </span>
                        <Badge
                          color="neutral-success"
                          className="text-success ml-2">
                          +13%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                  <div className="divider my-4" />
                  <div className="font-weight-bold text-uppercase text-black-50 text-center mb-3">
                    Team members
                  </div>
                  <div className="avatar-wrapper-overlap d-flex justify-content-center mb-3">
                    <div className="avatar-icon-wrapper" id="DelaneyTooltip1">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <UncontrolledTooltip
                      target="DelaneyTooltip1"
                      popperClassName="tooltip-danger">
                      Chelsey Delaney
                    </UncontrolledTooltip>

                    <div className="avatar-icon-wrapper" id="SantosTooltip1">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar7} />
                      </div>
                    </div>
                    <UncontrolledTooltip
                      target="SantosTooltip1"
                      popperClassName="tooltip-first">
                      Laibah Santos
                    </UncontrolledTooltip>

                    <div className="avatar-icon-wrapper" id="WeberTooltip1">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <UncontrolledTooltip
                      target="WeberTooltip1"
                      popperClassName="tooltip-second">
                      Ksawery Weber
                    </UncontrolledTooltip>

                    <div className="avatar-icon-wrapper" id="MaganaTooltip1">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <UncontrolledTooltip
                      target="MaganaTooltip1"
                      popperClassName="tooltip-info">
                      Killian Magana
                    </UncontrolledTooltip>

                    <div className="avatar-icon-wrapper" id="BanksTooltip1">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar6} />
                      </div>
                    </div>
                    <UncontrolledTooltip
                      target="BanksTooltip1"
                      popperClassName="tooltip-success">
                      Kean Banks
                    </UncontrolledTooltip>
                  </div>
                  <div className="divider my-4" />
                  <Button outline color="first" className="mt-2">
                    View complete profile
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="7">
              <div className="hero-wrapper bg-composed-wrapper h-100 rounded-right">
                <div className="flex-grow-1 w-100 d-flex align-items-end">
                  <div
                    className="bg-composed-wrapper--image rounded-right opacity-9 bg-composed-filter-rm"
                    style={{ backgroundImage: 'url(' + people3 + ')' }}
                  />
                  <div className="bg-composed-wrapper--content text-center p-5">
                    <div className="text-white mt-3">
                      <h1 className="display-3 my-3 font-weight-bold">
                        Wonderful serenity has possession
                      </h1>
                      <p className="font-size-lg mb-0 text-white-50">
                        A free hour, when our power of choice is untrammelled
                        and when nothing prevents.
                      </p>
                      <div className="divider border-1 mx-auto my-4 border-light opacity-2 rounded w-25" />
                      <div>
                        <Button
                          tag="a"
                          href="#/"
                          onClick={e => e.preventDefault()}
                          color="success"
                          size="lg"
                          className="btn-pill">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['far', 'envelope']} />
                          </span>
                          <span className="btn-wrapper--label">
                            Get in touch
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pageTitleStyle: state.ThemeOptions.pageTitleStyle,
  pageTitleBackground: state.ThemeOptions.pageTitleBackground,
  pageTitleShadow: state.ThemeOptions.pageTitleShadow,
  pageTitleBreadcrumb: state.ThemeOptions.pageTitleBreadcrumb,
  pageTitleIconBox: state.ThemeOptions.pageTitleIconBox,
  pageTitleDescription: state.ThemeOptions.pageTitleDescription
});

export default connect(mapStateToProps)(PageTitle);
