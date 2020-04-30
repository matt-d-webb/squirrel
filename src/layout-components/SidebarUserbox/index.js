import React, { Fragment, Component } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Badge,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';

export default class SidebarUserbox extends Component {
  render() {
    return (
      <Fragment>
        <div className="app-sidebar--userbox">
          <div className="card-tr-actions">
            <UncontrolledDropdown className="card-tr-actions">
              <DropdownToggle
                color="link"
                className="p-0 border-0 text-white-50 no-caret">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </DropdownToggle>
              <DropdownMenu
                right
                className=" text-nowrap overflow-hidden px-2 pt-2 pb-0">
                <ListGroup flush className="text-left bg-transparent">
                  <ListGroupItem className="rounded-top p-2">
                    <div className="align-box-row align-items-center">
                      <div className="avatar-icon-wrapper avatar-icon-md">
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div className="pl-3">
                        <span className="pb-1 d-block">Emma Taylor</span>
                        <Badge color="success">Active</Badge>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent d-flex justify-content-center">
                    <div className="d-flex py-2 align-items-center">
                      <div className="pr-3">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-xxl text-success"
                        />
                      </div>
                      <div className="line-height-sm">
                        <b className="font-size-lg">14,596</b>
                        <span className="text-black-50 d-block">reports</span>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="rounded-bottom p-3 text-center">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      size="sm"
                      className="mx-2 btn-facebook"
                      id="FacebookTooltip35">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                      </span>
                    </a>
                    <UncontrolledTooltip target="FacebookTooltip35">
                      Facebook
                    </UncontrolledTooltip>
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      size="sm"
                      className="mx-2 btn-twitter"
                      id="btnTwitterTooltip">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </span>
                    </a>
                  </ListGroupItem>
                </ListGroup>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <div className="avatar-icon-wrapper avatar-icon-md">
            <Badge color="danger" className="badge-circle">
              Offline
            </Badge>
            <div className="avatar-icon rounded-circle">
              <img alt="..." src={avatar2} />
            </div>
          </div>
          <div className="my-3 userbox-details">
            Matthew D Webb
            <small className="d-block text-white-50">
              (matt.d.webb)
            </small>
          </div>
          <Link size="sm" className="btn-userbox" to="/PagesProfile">
            View profile
          </Link>
        </div>
      </Fragment>
    );
  }
}
