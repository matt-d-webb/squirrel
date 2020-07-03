import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  UncontrolledPopover,
  ListGroup,
  ListGroupItem,
  Button,
  UncontrolledDropdown,
  Progress,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box shadow-none">
        <div className="card-header bg-light">
          <div className="card-header--title">
            <small className="d-block text-uppercase mt-1">Targets</small>
            <b>Monthly Stats</b>
          </div>
          <div className="card-header--actions">
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              color="link"
              className="btn-link-primary btn-transition-none p-0 text-primary"
              title="View options">
              <FontAwesomeIcon
                icon={['fas', 'ellipsis-h']}
                className="font-size-xl"
              />
            </Button>
          </div>
        </div>
        <div className="scroll-area-sm shadow-overflow">
          <PerfectScrollbar>
            <ListGroup flush>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar7} alt="..." />
                      </div>
                    </a>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      className="progress-bar-rounded progress-animated-alt"
                      color="success"
                      value="61">
                      61%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50">$</small>
                      1,628
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar5} alt="..." />
                      </div>
                    </a>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      value="44"
                      color="info"
                      className="progress-bar-rounded progress-animated-alt">
                      44%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-info">
                      <small className="text-black-50 pr-1">$</small>
                      7,389
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar1} alt="..." />
                      </div>
                    </a>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      value="29"
                      color="danger"
                      className="progress-bar-rounded progress-animated-alt">
                      29%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-danger">
                      <small className="text-black-50 pr-1">$</small>
                      8,493
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar2} alt="..." />
                      </div>
                    </a>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      value="38"
                      color="warning"
                      className="progress-bar-rounded progress-animated-alt">
                      38%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-warning">
                      <small className="text-black-50 pr-1">$</small>
                      2,594
                    </b>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </PerfectScrollbar>
        </div>
        <div className="card-footer bg-light text-center">
          <Button size="sm" color="first">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['far', 'question-circle']} />
            </span>
            <span className="btn-wrapper--label">Generate reports</span>
          </Button>
        </div>
      </Card>

      <div className="divider my-4" />

      <div className="text-center">
        <UncontrolledDropdown tag="span">
          <DropdownToggle
            color="primary"
            size="sm"
            className="mx-1 btn-transition-none"
            caret>
            Inside Dropdown
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-xxl overflow-hidden p-0">
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar>
                <ListGroup flush>
                  <ListGroupItem>
                    <div className="align-box-row">
                      <div className="mr-4">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0"
                          title="View details"
                          placement="right">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img src={avatar7} alt="..." />
                          </div>
                        </a>
                      </div>
                      <div className="flex-grow-1">
                        <Progress
                          className="progress-bar-rounded progress-animated-alt"
                          color="success"
                          value="61">
                          61%
                        </Progress>
                      </div>
                      <div className="line-height-sm text-center ml-4">
                        <small className="text-black-50 d-block text-uppercase">
                          Totals
                        </small>
                        <b className="font-size-lg text-success">
                          <small className="pr-1 text-black-50">$</small>
                          1,628
                        </b>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="align-box-row">
                      <div className="mr-4">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0"
                          title="View details"
                          placement="right">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img src={avatar5} alt="..." />
                          </div>
                        </a>
                      </div>
                      <div className="flex-grow-1">
                        <Progress
                          value="44"
                          color="info"
                          className="progress-bar-rounded progress-animated-alt">
                          44%
                        </Progress>
                      </div>
                      <div className="line-height-sm text-center ml-4">
                        <small className="text-black-50 d-block text-uppercase">
                          Totals
                        </small>
                        <b className="font-size-lg text-info">
                          <small className="text-black-50 pr-1">$</small>
                          7,389
                        </b>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="align-box-row">
                      <div className="mr-4">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0"
                          title="View details"
                          placement="right">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img src={avatar1} alt="..." />
                          </div>
                        </a>
                      </div>
                      <div className="flex-grow-1">
                        <Progress
                          value="29"
                          color="danger"
                          className="progress-bar-rounded progress-animated-alt">
                          29%
                        </Progress>
                      </div>
                      <div className="line-height-sm text-center ml-4">
                        <small className="text-black-50 d-block text-uppercase">
                          Totals
                        </small>
                        <b className="font-size-lg text-danger">
                          <small className="text-black-50 pr-1">$</small>
                          8,493
                        </b>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="align-box-row">
                      <div className="mr-4">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0"
                          title="View details"
                          placement="right">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img src={avatar2} alt="..." />
                          </div>
                        </a>
                      </div>
                      <div className="flex-grow-1">
                        <Progress
                          value="38"
                          color="warning"
                          className="progress-bar-rounded progress-animated-alt">
                          38%
                        </Progress>
                      </div>
                      <div className="line-height-sm text-center ml-4">
                        <small className="text-black-50 d-block text-uppercase">
                          Totals
                        </small>
                        <b className="font-size-lg text-warning">
                          <small className="text-black-50 pr-1">$</small>
                          2,594
                        </b>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </PerfectScrollbar>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>

        <Button
          size="sm"
          color="primary"
          className="btn-transition-none mx-1"
          id="progressbarPopover">
          Inside Popover
        </Button>
      </div>

      <UncontrolledPopover
        target="progressbarPopover"
        trigger="legacy"
        container="body"
        popperClassName="popover-custom-wrapper overflow-hidden popover-custom-md"
        placement="auto">
        <div className="scroll-area-sm shadow-overflow">
          <PerfectScrollbar>
            <ListGroup flush>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar7} alt="..." />
                      </div>
                    </a>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      className="progress-bar-rounded progress-animated-alt"
                      color="success"
                      value="61">
                      61%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50">$</small>
                      1,628
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar5} alt="..." />
                      </div>
                    </a>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      value="44"
                      color="info"
                      className="progress-bar-rounded progress-animated-alt">
                      44%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-info">
                      <small className="text-black-50 pr-1">$</small>
                      7,389
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar1} alt="..." />
                      </div>
                    </a>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      value="29"
                      color="danger"
                      className="progress-bar-rounded progress-animated-alt">
                      29%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-danger">
                      <small className="text-black-50 pr-1">$</small>
                      8,493
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar2} alt="..." />
                      </div>
                    </a>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      value="38"
                      color="warning"
                      className="progress-bar-rounded progress-animated-alt">
                      38%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-warning">
                      <small className="text-black-50 pr-1">$</small>
                      2,594
                    </b>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </PerfectScrollbar>
        </div>
      </UncontrolledPopover>
    </Fragment>
  );
}
