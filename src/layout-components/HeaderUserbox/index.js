import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Badge,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';
export default class HeaderUserbox extends Component {
  render() {
    return (
      <Fragment>
        <UncontrolledDropdown className="user-box position-relative ml-2">
          <DropdownToggle
            color="link"
            className="p-0 text-left d-flex align-items-center">
            <div className="d-block p-0 avatar-icon-wrapper">
              <Badge color="success" className="badge-circle p-top-a">
                Online
              </Badge>
              <div className="avatar-icon rounded">
                <img src={avatar7} alt="..." />
              </div>
            </div>
            <div className="d-none d-xl-block pl-2">
              <div className="font-weight-bold">Matthew Webb</div>
              <span className="text-black-50">Software Engineer</span>
            </div>
            <span className="pl-1 pl-xl-3">
              <FontAwesomeIcon
                icon={['fas', 'angle-down']}
                className="opacity-5"
              />
            </span>
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-lg overflow-hidden p-0">
            <ListGroup flush className="text-left bg-transparent">
              <ListGroupItem className="rounded-top">
                <Nav pills className="nav-neutral-primary flex-column">
                  <NavItem className="nav-header d-flex text-primary pt-1 pb-2 font-weight-bold align-items-center">
                    <div>Profile options</div>
                    <div className="ml-auto font-size-xs">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        id="ChangeSettingsTooltip">
                        <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                      </a>
                      <UncontrolledTooltip
                        target="ChangeSettingsTooltip"
                        container="body">
                        Change settings
                      </UncontrolledTooltip>
                    </div>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#/" onClick={e => e.preventDefault()}>
                      My Account
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#/" onClick={e => e.preventDefault()}>
                      Profile settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#/" onClick={e => e.preventDefault()}>
                      Active tasks
                    </NavLink>
                  </NavItem>
                </Nav>
              </ListGroupItem>
              <ListGroupItem className="bg-transparent p-0">
                <div className="grid-menu grid-menu-2col">
                  <div className="py-3">
                    <div className="d-flex justify-content-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'chart-bar']}
                            className="font-size-xxl text-info"
                          />
                        </div>
                        <div className="pl-3 line-height-sm">
                          <b className="font-size-lg">£9,693</b>
                          <span className="text-black-50 d-block">current account</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Fragment>
    );
  }
}
