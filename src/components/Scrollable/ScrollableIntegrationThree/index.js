import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  UncontrolledPopover,
  Badge,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box shadow-none">
        <div className="bg-composed-wrapper bg-vicious-stance">
          <div className="bg-composed-wrapper--image bg-composed-img-5" />
          <div className="bg-composed-wrapper--content text-light text-center p-4">
            <h5 className="mb-1">Scrollable</h5>
            <p className="mb-0 opacity-7">This menu box is scrollable (sm)</p>
          </div>
        </div>
        <PerfectScrollbar className="scroll-area-xs shadow-overflow">
          <Nav className=" flex-column py-2">
            <NavItem>
              <NavLink href="#/" onClick={e => e.preventDefault()}>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'building']} />
                </div>
                <span>Dashboard</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/" onClick={e => e.preventDefault()} active>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
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
        <div className="card-footer d-flex justify-content-between">
          <Button size="sm" color="neutral-success">
            Action
          </Button>
          <Button color="link" size="sm" className="btn-link-success px-0">
            <span>View details</span>
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
            <div className="bg-composed-wrapper bg-vicious-stance">
              <div className="bg-composed-wrapper--image bg-composed-img-5" />
              <div className="bg-composed-wrapper--content text-light text-center p-4">
                <h5 className="mb-1">Scrollable</h5>
                <p className="mb-0 opacity-7">
                  This menu box is scrollable (sm)
                </p>
              </div>
            </div>
            <PerfectScrollbar className="scroll-area-xs shadow-overflow">
              <Nav className=" flex-column py-2">
                <NavItem>
                  <NavLink href="#/" onClick={e => e.preventDefault()}>
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'building']} />
                    </div>
                    <span>Dashboard</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#/" onClick={e => e.preventDefault()} active>
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
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
            <div className="card-footer d-flex justify-content-between">
              <Button size="sm" color="neutral-success">
                Action
              </Button>
              <Button color="link" size="sm" className="btn-link-success px-0">
                <span>View details</span>
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>

        <Button
          size="sm"
          color="primary"
          className="btn-transition-none mx-1"
          id="menuPopover">
          Inside Popover
        </Button>
      </div>

      <UncontrolledPopover
        target="menuPopover"
        trigger="legacy"
        container="body"
        popperClassName="popover-custom-wrapper overflow-hidden popover-custom-md"
        placement="auto">
        <div className="bg-composed-wrapper bg-vicious-stance">
          <div className="bg-composed-wrapper--image bg-composed-img-5" />
          <div className="bg-composed-wrapper--content text-light text-center p-4">
            <h5 className="mb-1">Scrollable</h5>
            <p className="mb-0 opacity-7">This menu box is scrollable (sm)</p>
          </div>
        </div>
        <PerfectScrollbar className="scroll-area-xs shadow-overflow">
          <Nav className=" flex-column py-2">
            <NavItem>
              <NavLink href="#/" onClick={e => e.preventDefault()}>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'building']} />
                </div>
                <span>Dashboard</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/" onClick={e => e.preventDefault()} active>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
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
        <div className="card-footer d-flex justify-content-between">
          <Button size="sm" color="neutral-success">
            Action
          </Button>
          <Button color="link" size="sm" className="btn-link-success px-0">
            <span>View details</span>
          </Button>
        </div>
      </UncontrolledPopover>
    </Fragment>
  );
}
