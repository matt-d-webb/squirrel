import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  CardBody,
  Card,
  CardHeader,
  UncontrolledPopover,
  UncontrolledTooltip,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box shadow-none">
        <CardHeader>
          <div className="card-header--title">
            <small>Messenger</small>
            <b>Talking to Kate</b>
          </div>
          <div className="card-header--actions">
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              size="sm"
              color="first"
              className="btn-transition-none"
              id="SendMessageTooltip30">
              <FontAwesomeIcon icon={['fas', 'plus']} />
            </a>
            <UncontrolledTooltip target="SendMessageTooltip30">
              Send new message
            </UncontrolledTooltip>
          </div>
        </CardHeader>
        <div className="scroll-area-sm shadow-overflow">
          <PerfectScrollbar>
            <CardBody>
              <div className="chat-wrapper">
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar7} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Hello, John.</p>
                        <p>This is Kenny. How are you?</p>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item chat-item-reverse p-2 mb-2">
                  <div className="align-box-row flex-row-reverse">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar3} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Hey, Kate.</p>
                        <p>I'm attaching the pictures you requested below:</p>
                        <Card className="mt-3 mb-2 pt-2 pb-2 text-center">
                          <div>
                            <a href="#/" onClick={e => e.preventDefault()}>
                              <img
                                src={people1}
                                alt="..."
                                width="54"
                                className="img-fluid rounded m-1 shadow-sm"
                              />
                            </a>
                            <a href="#/" onClick={e => e.preventDefault()}>
                              <img
                                src={people2}
                                alt="..."
                                width="54"
                                className="img-fluid rounded m-1 shadow-sm"
                              />
                            </a>
                          </div>
                        </Card>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar7} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Thanks.</p>
                        <p>Really appreciate it!</p>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar7} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Bye for now, talk to you later.</p>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item chat-item-reverse p-2 mb-2">
                  <div className="align-box-row flex-row-reverse">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar3} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Almost forgot about your tasks.</p>
                        <p>
                          <b>Check the links below:</b>
                        </p>
                        <Card className="bg-premium-dark p-2 mt-3 mb-2">
                          <div className="text-center py-2">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              color="link"
                              className="m-1 p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                              <FontAwesomeIcon icon={['far', 'object-group']} />
                            </a>
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              color="link"
                              className="m-1 p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                              <FontAwesomeIcon icon={['far', 'lightbulb']} />
                            </a>
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              color="link"
                              className="m-1 p-0 bg-plum-plate d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                              <FontAwesomeIcon icon={['far', 'keyboard']} />
                            </a>
                          </div>
                        </Card>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:03 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </PerfectScrollbar>
        </div>
        <div className="card-footer bg-light p-3">
          <div>
            <input
              className="form-control form-control-sm"
              placeholder="Your message here..."
            />
          </div>
          <div className="align-box-row mt-3">
            <div className="align-items-center">
              <Button
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                color="link"
                className="btn-link-primary p-0 text-success"
                title="Add audio file">
                <FontAwesomeIcon
                  icon={['far', 'file-audio']}
                  className="font-size-xxl"
                />
              </Button>
              <Button
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                color="link"
                className="btn-link-primary p-0 mr-2 ml-2 text-danger"
                title="Add video file">
                <FontAwesomeIcon
                  icon={['far', 'file-video']}
                  className="font-size-xxl"
                />
              </Button>
              <Button
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                color="link"
                className="btn-link-primary p-0 text-info"
                title="Upload documents">
                <FontAwesomeIcon
                  icon={['far', 'file-excel']}
                  className="font-size-xxl"
                />
              </Button>
            </div>
            <div className="ml-auto">
              <Button
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                size="sm"
                color="primary">
                Send
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="divider my-4" />

      <div className="text-center">
        <UncontrolledDropdown tag="span" direction="up">
          <DropdownToggle
            color="primary"
            size="sm"
            className="mx-1 btn-transition-none"
            caret>
            Inside Dropdown
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-xxl overflow-hidden p-0">
            <div className="scroll-area shadow-overflow">
              <PerfectScrollbar>
                <div className="p-3">
                  <div className="chat-wrapper">
                    <div className="chat-item p-2 mb-2">
                      <div className="align-box-row">
                        <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                          <div className="avatar-icon rounded border-0">
                            <img src={avatar7} alt="..." />
                          </div>
                        </div>
                        <div>
                          <div className="chat-box bg-first text-white">
                            <p>Hello, John.</p>
                            <p>This is Kenny. How are you?</p>
                          </div>
                          <small className="mt-2 d-block text-black-50">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1 opacity-5"
                            />
                            11:01 AM | Yesterday
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="chat-item chat-item-reverse p-2 mb-2">
                      <div className="align-box-row flex-row-reverse">
                        <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                          <div className="avatar-icon rounded border-0">
                            <img src={avatar3} alt="..." />
                          </div>
                        </div>
                        <div>
                          <div className="chat-box bg-first text-white">
                            <p>Hey, Kate.</p>
                            <p>
                              I'm attaching the pictures you requested below:
                            </p>
                            <Card className="mt-3 mb-2 pt-2 pb-2 text-center">
                              <div>
                                <a href="#/" onClick={e => e.preventDefault()}>
                                  <img
                                    src={people1}
                                    alt="..."
                                    width="54"
                                    className="img-fluid rounded m-1 shadow-sm"
                                  />
                                </a>
                                <a href="#/" onClick={e => e.preventDefault()}>
                                  <img
                                    src={people2}
                                    alt="..."
                                    width="54"
                                    className="img-fluid rounded m-1 shadow-sm"
                                  />
                                </a>
                              </div>
                            </Card>
                          </div>
                          <small className="mt-2 d-block text-black-50">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1 opacity-5"
                            />
                            11:01 AM | Yesterday
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="chat-item p-2 mb-2">
                      <div className="align-box-row">
                        <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                          <div className="avatar-icon rounded border-0">
                            <img src={avatar7} alt="..." />
                          </div>
                        </div>
                        <div>
                          <div className="chat-box bg-first text-white">
                            <p>Thanks.</p>
                            <p>Really appreciate it!</p>
                          </div>
                          <small className="mt-2 d-block text-black-50">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1 opacity-5"
                            />
                            11:01 AM | Yesterday
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="chat-item p-2 mb-2">
                      <div className="align-box-row">
                        <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                          <div className="avatar-icon rounded border-0">
                            <img src={avatar7} alt="..." />
                          </div>
                        </div>
                        <div>
                          <div className="chat-box bg-first text-white">
                            <p>Bye for now, talk to you later.</p>
                          </div>
                          <small className="mt-2 d-block text-black-50">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1 opacity-5"
                            />
                            11:01 AM | Yesterday
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="chat-item chat-item-reverse p-2 mb-2">
                      <div className="align-box-row flex-row-reverse">
                        <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                          <div className="avatar-icon rounded border-0">
                            <img src={avatar3} alt="..." />
                          </div>
                        </div>
                        <div>
                          <div className="chat-box bg-first text-white">
                            <p>Almost forgot about your tasks.</p>
                            <p>
                              <b>Check the links below:</b>
                            </p>
                            <Card className="bg-premium-dark p-2 mt-3 mb-2">
                              <div className="text-center py-2">
                                <a
                                  href="#/"
                                  onClick={e => e.preventDefault()}
                                  color="link"
                                  className="m-1 p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                  <FontAwesomeIcon
                                    icon={['far', 'object-group']}
                                  />
                                </a>
                                <a
                                  href="#/"
                                  onClick={e => e.preventDefault()}
                                  color="link"
                                  className="m-1 p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                  <FontAwesomeIcon
                                    icon={['far', 'lightbulb']}
                                  />
                                </a>
                                <a
                                  href="#/"
                                  onClick={e => e.preventDefault()}
                                  color="link"
                                  className="m-1 p-0 bg-plum-plate d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                  <FontAwesomeIcon icon={['far', 'keyboard']} />
                                </a>
                              </div>
                            </Card>
                          </div>
                          <small className="mt-2 d-block text-black-50">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1 opacity-5"
                            />
                            11:03 AM | Yesterday
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PerfectScrollbar>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>

        <Button
          size="sm"
          color="primary"
          className="btn-transition-none mx-1"
          id="chatPopover">
          Inside Popover
        </Button>
      </div>

      <UncontrolledPopover
        target="chatPopover"
        trigger="legacy"
        container="body"
        popperClassName="popover-custom-wrapper overflow-hidden popover-custom-xl"
        placement="auto">
        <div className="scroll-area shadow-overflow">
          <PerfectScrollbar>
            <div className="p-3">
              <div className="chat-wrapper">
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar7} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Hello, John.</p>
                        <p>This is Kenny. How are you?</p>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item chat-item-reverse p-2 mb-2">
                  <div className="align-box-row flex-row-reverse">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar3} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Hey, Kate.</p>
                        <p>I'm attaching the pictures you requested below:</p>
                        <Card className="mt-3 mb-2 pt-2 pb-2 text-center">
                          <div>
                            <a href="#/" onClick={e => e.preventDefault()}>
                              <img
                                src={people1}
                                alt="..."
                                width="54"
                                className="img-fluid rounded m-1 shadow-sm"
                              />
                            </a>
                            <a href="#/" onClick={e => e.preventDefault()}>
                              <img
                                src={people2}
                                alt="..."
                                width="54"
                                className="img-fluid rounded m-1 shadow-sm"
                              />
                            </a>
                          </div>
                        </Card>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar7} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Thanks.</p>
                        <p>Really appreciate it!</p>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar7} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Bye for now, talk to you later.</p>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item chat-item-reverse p-2 mb-2">
                  <div className="align-box-row flex-row-reverse">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar3} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Almost forgot about your tasks.</p>
                        <p>
                          <b>Check the links below:</b>
                        </p>
                        <Card className="bg-premium-dark p-2 mt-3 mb-2">
                          <div className="text-center py-2">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              color="link"
                              className="m-1 p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                              <FontAwesomeIcon icon={['far', 'object-group']} />
                            </a>
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              color="link"
                              className="m-1 p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                              <FontAwesomeIcon icon={['far', 'lightbulb']} />
                            </a>
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              color="link"
                              className="m-1 p-0 bg-plum-plate d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                              <FontAwesomeIcon icon={['far', 'keyboard']} />
                            </a>
                          </div>
                        </Card>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:03 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </UncontrolledPopover>
    </Fragment>
  );
}
