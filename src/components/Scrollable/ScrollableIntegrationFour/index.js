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
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box shadow-none">
        <div className="bg-composed-wrapper bg-plum-plate mt-0">
          <div className="bg-composed-wrapper--image bg-composed-img-2" />
          <div className="bg-composed-wrapper--content text-light p-3">
            <h6 className="mb-1 font-weight-bold">Composed backgrounds</h6>
            <p className="mb-0 opacity-7">
              Highly configurable & easy to integrate.
            </p>
          </div>
        </div>
        <ListGroup flush>
          <div className="scroll-area shadow-overflow">
            <PerfectScrollbar>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-grow-early text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Sales
                    </div>
                    <small className="text-success">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="text-success mr-1"
                      />
                      <span>15.4% increase</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-danger text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Income
                    </div>
                    <small className="text-danger">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="text-danger mr-1"
                      />
                      <span>5.2% decrease</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Expenses
                    </div>
                    <small className="text-warning">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-down']}
                        className="text-warning mr-1"
                      />
                      <span>5.2% down</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-success text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['fas', 'cog']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Customers
                    </div>
                    <small className="text-danger">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-down']}
                        className="text-danger mr-1"
                      />
                      <span>32%</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'user']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Employees
                    </div>
                    <small className="text-dark">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="text-info mr-1"
                      />
                      <span>56% improvement</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-dark text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'lightbulb']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Reports
                    </div>
                    <small className="text-warning">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="text-success mr-1"
                      />
                      <span>12.2% up</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
            </PerfectScrollbar>
          </div>
        </ListGroup>
        <div className="card-footer bg-light text-center">
          <Button size="sm" color="primary">
            View Details
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
            <div className="bg-composed-wrapper bg-plum-plate mt-0">
              <div className="bg-composed-wrapper--image bg-composed-img-2" />
              <div className="bg-composed-wrapper--content text-light p-3">
                <h6 className="mb-1 font-weight-bold">Composed backgrounds</h6>
                <p className="mb-0 opacity-7">
                  Highly configurable & easy to integrate.
                </p>
              </div>
            </div>
            <ListGroup flush>
              <div className="scroll-area shadow-overflow">
                <PerfectScrollbar>
                  <ListGroupItem
                    tag="a"
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="list-group-item-action align-box-row">
                    <div className="align-box-row w-100">
                      <div className="mr-3">
                        <div className="bg-grow-early text-center text-white font-size-xl d-50 rounded-circle">
                          <FontAwesomeIcon icon={['far', 'bell']} />
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold text-primary d-block">
                          Sales
                        </div>
                        <small className="text-success">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-up']}
                            className="text-success mr-1"
                          />
                          <span>15.4% increase</span>
                        </small>
                      </div>
                      <div className="ml-auto card-hover-indicator align-self-center">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-right']}
                          className="font-size-md"
                        />
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem
                    tag="a"
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="list-group-item-action align-box-row">
                    <div className="align-box-row w-100">
                      <div className="mr-3">
                        <div className="bg-danger text-center text-white font-size-xl d-50 rounded-circle">
                          <FontAwesomeIcon icon={['far', 'object-group']} />
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold text-primary d-block">
                          Income
                        </div>
                        <small className="text-danger">
                          <FontAwesomeIcon
                            icon={['fas', 'arrow-up']}
                            className="text-danger mr-1"
                          />
                          <span>5.2% decrease</span>
                        </small>
                      </div>
                      <div className="ml-auto card-hover-indicator align-self-center">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-right']}
                          className="font-size-md"
                        />
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem
                    tag="a"
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="list-group-item-action align-box-row">
                    <div className="align-box-row w-100">
                      <div className="mr-3">
                        <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle">
                          <FontAwesomeIcon icon={['far', 'chart-bar']} />
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold text-primary d-block">
                          Expenses
                        </div>
                        <small className="text-warning">
                          <FontAwesomeIcon
                            icon={['fas', 'arrow-down']}
                            className="text-warning mr-1"
                          />
                          <span>5.2% down</span>
                        </small>
                      </div>
                      <div className="ml-auto card-hover-indicator align-self-center">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-right']}
                          className="font-size-md"
                        />
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem
                    tag="a"
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="list-group-item-action align-box-row">
                    <div className="align-box-row w-100">
                      <div className="mr-3">
                        <div className="bg-success text-center text-white font-size-xl d-50 rounded-circle">
                          <FontAwesomeIcon icon={['fas', 'cog']} />
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold text-primary d-block">
                          Customers
                        </div>
                        <small className="text-danger">
                          <FontAwesomeIcon
                            icon={['fas', 'arrow-down']}
                            className="text-danger mr-1"
                          />
                          <span>32%</span>
                        </small>
                      </div>
                      <div className="ml-auto card-hover-indicator align-self-center">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-right']}
                          className="font-size-md"
                        />
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem
                    tag="a"
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="list-group-item-action align-box-row">
                    <div className="align-box-row w-100">
                      <div className="mr-3">
                        <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle">
                          <FontAwesomeIcon icon={['far', 'user']} />
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold text-primary d-block">
                          Employees
                        </div>
                        <small className="text-dark">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-up']}
                            className="text-info mr-1"
                          />
                          <span>56% improvement</span>
                        </small>
                      </div>
                      <div className="ml-auto card-hover-indicator align-self-center">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-right']}
                          className="font-size-md"
                        />
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem
                    tag="a"
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="list-group-item-action align-box-row">
                    <div className="align-box-row w-100">
                      <div className="mr-3">
                        <div className="bg-dark text-center text-white font-size-xl d-50 rounded-circle">
                          <FontAwesomeIcon icon={['far', 'lightbulb']} />
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold text-primary d-block">
                          Reports
                        </div>
                        <small className="text-warning">
                          <FontAwesomeIcon
                            icon={['fas', 'arrow-up']}
                            className="text-success mr-1"
                          />
                          <span>12.2% up</span>
                        </small>
                      </div>
                      <div className="ml-auto card-hover-indicator align-self-center">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-right']}
                          className="font-size-md"
                        />
                      </div>
                    </div>
                  </ListGroupItem>
                </PerfectScrollbar>
              </div>
            </ListGroup>
            <div className="card-footer bg-light text-center">
              <Button size="sm" color="primary">
                View Details
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>

        <Button
          size="sm"
          color="primary"
          className="btn-transition-none mx-1"
          id="navigationPopover">
          Inside Popover
        </Button>
      </div>

      <UncontrolledPopover
        target="navigationPopover"
        trigger="legacy"
        container="body"
        popperClassName="popover-custom-wrapper overflow-hidden popover-custom-xl"
        placement="auto">
        <div className="bg-composed-wrapper bg-plum-plate mt-0">
          <div className="bg-composed-wrapper--image bg-composed-img-2" />
          <div className="bg-composed-wrapper--content text-light p-3">
            <h6 className="mb-1 font-weight-bold">Composed backgrounds</h6>
            <p className="mb-0 opacity-7">
              Highly configurable & easy to integrate.
            </p>
          </div>
        </div>
        <ListGroup flush>
          <div className="scroll-area shadow-overflow">
            <PerfectScrollbar>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-grow-early text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Sales
                    </div>
                    <small className="text-success">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="text-success mr-1"
                      />
                      <span>15.4% increase</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-danger text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Income
                    </div>
                    <small className="text-danger">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="text-danger mr-1"
                      />
                      <span>5.2% decrease</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Expenses
                    </div>
                    <small className="text-warning">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-down']}
                        className="text-warning mr-1"
                      />
                      <span>5.2% down</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-success text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['fas', 'cog']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Customers
                    </div>
                    <small className="text-danger">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-down']}
                        className="text-danger mr-1"
                      />
                      <span>32%</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'user']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Employees
                    </div>
                    <small className="text-dark">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="text-info mr-1"
                      />
                      <span>56% improvement</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-dark text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'lightbulb']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Reports
                    </div>
                    <small className="text-warning">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="text-success mr-1"
                      />
                      <span>12.2% up</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-md"
                    />
                  </div>
                </div>
              </ListGroupItem>
            </PerfectScrollbar>
          </div>
        </ListGroup>
        <div className="card-footer bg-light text-center">
          <Button size="sm" color="primary">
            View Details
          </Button>
        </div>
      </UncontrolledPopover>
    </Fragment>
  );
}
