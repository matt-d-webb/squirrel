import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  CustomInput,
  Input,
  Badge,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title">
                <small>Messenger</small>
                <b>Talking to Kate</b>
              </div>
              <div className="card-header--actions">
                <Button
                  tag="a"
                  href="#/"
                  onClick={e => e.preventDefault()}
                  size="sm"
                  color="first"
                  id="SendMessageTooltip2">
                  <FontAwesomeIcon
                    icon={['fas', 'plus']}
                    className="font-size-sm"
                  />
                </Button>
                <UncontrolledTooltip target="SendMessageTooltip2">
                  Send new message
                </UncontrolledTooltip>
              </div>
            </CardHeader>
            <CardBody>
              <div className="scroll-area-sm shadow-overflow">
                <PerfectScrollbar>
                  <div className="chat-wrapper">
                    <div className="chat-item p-2 mb-2">
                      <div className="align-box-row">
                        <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                          <div className="avatar-icon rounded border-0">
                            <img alt="..." src={avatar7} />
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
                            <img alt="..." src={avatar3} />
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
                                    alt="..."
                                    className="img-fluid rounded m-1 shadow-sm"
                                    src={people1}
                                    width="54"
                                  />
                                </a>
                                <a href="#/" onClick={e => e.preventDefault()}>
                                  <img
                                    alt="..."
                                    className="img-fluid rounded m-1 shadow-sm"
                                    src={people2}
                                    width="54"
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
                            <img alt="..." src={avatar7} />
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
                            <img alt="..." src={avatar7} />
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
                            <img alt="..." src={avatar3} />
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
                                  className="m-1 p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle"
                                  id="MenuExampleTooltip11">
                                  <FontAwesomeIcon icon={['fas', 'lemon']} />
                                </a>
                                <UncontrolledTooltip target="MenuExampleTooltip11">
                                  Menu example
                                </UncontrolledTooltip>
                                <a
                                  href="#/"
                                  onClick={e => e.preventDefault()}
                                  color="link"
                                  className="m-1 p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle"
                                  id="MenuExampleTooltip18">
                                  <FontAwesomeIcon icon={['far', 'building']} />
                                </a>
                                <UncontrolledTooltip target="MenuExampleTooltip18">
                                  Menu Example
                                </UncontrolledTooltip>
                                <a
                                  href="#/"
                                  onClick={e => e.preventDefault()}
                                  color="link"
                                  className="m-1 p-0 bg-plum-plate d-inline-block text-center text-white font-size-xl d-40 rounded-circle"
                                  id="MenuExampleTooltip25">
                                  <FontAwesomeIcon icon={['far', 'gem']} />
                                </a>
                                <UncontrolledTooltip target="MenuExampleTooltip25">
                                  Menu Example
                                </UncontrolledTooltip>
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
                </PerfectScrollbar>
              </div>
            </CardBody>
            <div className="card-footer bg-light p-4">
              <div>
                <Input placeholder="Write your message and hit enter to send..." />
              </div>
              <div className="align-box-row mt-3">
                <div className="align-items-center">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    color="link"
                    className="btn-link-primary p-0 text-success"
                    id="AudioFileTooltip1">
                    <FontAwesomeIcon
                      icon={['far', 'file-audio']}
                      className="font-size-xl"
                    />
                  </a>
                  <UncontrolledTooltip target="AudioFileTooltip1">
                    Add audio file
                  </UncontrolledTooltip>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    color="link"
                    className="btn-link-primary p-0 mr-2 ml-2 text-danger"
                    id="VideoFileTooltip1">
                    <FontAwesomeIcon
                      icon={['far', 'file-video']}
                      className="font-size-xl"
                    />
                  </a>
                  <UncontrolledTooltip target="VideoFileTooltip1">
                    Add video file
                  </UncontrolledTooltip>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    color="link"
                    className="btn-link-primary p-0 text-info"
                    id="UploadDocumentsTooltip1">
                    <FontAwesomeIcon
                      icon={['far', 'file-excel']}
                      className="font-size-xl"
                    />
                  </a>
                  <UncontrolledTooltip target="UploadDocumentsTooltip1">
                    Upload Documents
                  </UncontrolledTooltip>
                </div>
                <div className="ml-auto">
                  <Button
                    tag="a"
                    href="#/"
                    onClick={e => e.preventDefault()}
                    color="primary">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title">
                <small>Tasks</small>
                <b>Today's list</b>
              </div>
              <div className="card-header--actions">
                <Badge pill color="neutral-warning" className="text-warning">
                  New Tasks
                </Badge>
              </div>
            </CardHeader>
            <CardBody>
              <div className="scroll-area-sm shadow-overflow">
                <PerfectScrollbar>
                  <div className="task-wrapper">
                    <div className="task-item">
                      <div className="align-box-row">
                        <CustomInput
                          type="checkbox"
                          id="checkboxProjects12"
                          className="align-self-center"
                          label="&nbsp;"
                        />
                        <div>
                          Finish tasks for today
                          <p className="text-black-50 mt-1 mb-0">
                            But I must explain to you how all this mistaken
                            idea.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="task-item">
                      <div className="align-box-row">
                        <CustomInput
                          type="checkbox"
                          id="checkboxProjects13"
                          className="align-self-center"
                          label="&nbsp;"
                        />
                        <div>
                          <b>Blinded by desire</b>
                          <p className="text-black-50 mt-1 mb-0">
                            A wonderful serenity has taken possession.
                          </p>
                          <div className="timeline-list mt-3">
                            <div className="timeline-item timeline-item-icon">
                              <div className="timeline-item--content">
                                <div className="timeline-item--icon-wrapper bg-danger text-white">
                                  <FontAwesomeIcon icon={['far', 'gem']} />
                                </div>
                                <h4 className="timeline-item--label mb-2 font-weight-bold">
                                  1998
                                </h4>
                                <p>
                                  Bill Clinton's presidential scandal makes it
                                  online.
                                </p>
                              </div>
                            </div>
                            <div className="timeline-item">
                              <div className="timeline-item--content">
                                <div className="timeline-item--icon" />
                                <h4 className="timeline-item--label mb-2 font-weight-bold">
                                  Java exam day
                                </h4>
                                <p>
                                  Bill Clinton's presidential scandal makes it
                                  online.
                                </p>
                                <div className="avatar-wrapper-overlap mt-2 mb-1">
                                  <div className="avatar-icon-wrapper avatar-icon-sm">
                                    <div className="avatar-icon">
                                      <img alt="..." src={avatar1} />
                                    </div>
                                  </div>
                                  <div className="avatar-icon-wrapper avatar-icon-sm">
                                    <div className="avatar-icon">
                                      <img alt="..." src={avatar7} />
                                    </div>
                                  </div>
                                  <div className="avatar-icon-wrapper avatar-icon-sm">
                                    <div className="avatar-icon">
                                      <img alt="..." src={avatar1} />
                                    </div>
                                  </div>
                                  <div className="avatar-icon-wrapper avatar-icon-sm">
                                    <div className="avatar-icon">
                                      <img alt="..." src={avatar2} />
                                    </div>
                                  </div>
                                  <div className="avatar-icon-wrapper avatar-icon-sm">
                                    <div className="avatar-icon">
                                      <img alt="..." src={avatar6} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="timeline-item">
                              <div className="timeline-item--content">
                                <div className="timeline-item--icon" />
                                <h4 className="timeline-item--label mb-2 font-weight-bold">
                                  Business investor meeting
                                  <Badge
                                    color="neutral-info"
                                    className="text-info ml-2">
                                    New
                                  </Badge>
                                </h4>
                                <p>
                                  Mosaic, the first graphical browser, is
                                  introduced to the average consumer.
                                </p>
                                <div className="mt-3">
                                  <Button size="sm" color="primary">
                                    Submit Report
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="task-item">
                      <div className="align-box-row">
                        <CustomInput
                          type="checkbox"
                          id="checkboxProjects14"
                          className="align-self-center"
                          label="&nbsp;"
                        />
                        <div className="w-100">
                          World among the stalks
                          <p className="text-black-50 mt-1">
                            Who formed us in his own image, and the breath.
                          </p>
                          <ListGroup flush>
                            <ListGroupItem className="bg-secondary d-flex justify-content-between align-items-center p-4">
                              <div className="w-100">
                                <div className="d-flex flex-wrap justify-content-between mb-2">
                                  <small className="line-height-xs text-uppercase text-muted">
                                    Nov 12, 11:25am
                                  </small>
                                  <small className="line-height-xs text-uppercase text-success">
                                    Due in 12 days
                                  </small>
                                </div>
                                <h6 className="pt-1 pb-1">
                                  <a
                                    href="#/"
                                    onClick={e => e.preventDefault()}>
                                    #56 - Deploy new website
                                  </a>
                                </h6>
                                <p className="mb-3">
                                  This is a dummy text acting ...
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                  <Badge
                                    pill
                                    color="danger"
                                    href="#/"
                                    onClick={e => e.preventDefault()}
                                    className="pl-3 pr-3">
                                    Files ready
                                  </Badge>
                                  <div>
                                    <Button size="sm" color="first">
                                      <span className="btn-wrapper--icon">
                                        <FontAwesomeIcon
                                          icon={['fas', 'plus']}
                                          className="font-size-sm"
                                        />
                                      </span>
                                      <span className="btn-wrapper--label">
                                        Add
                                      </span>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem className="d-flex justify-content-between align-items-center align-content-center pl-1">
                              <a
                                href="#/"
                                onClick={e => e.preventDefault()}
                                size="sm"
                                color="link"
                                id="CommentsTooltip1">
                                <span className="btn-wrapper--icon">
                                  <FontAwesomeIcon icon={['far', 'comments']} />
                                </span>
                                <span className="btn-wrapper--label ml-1">
                                  653
                                </span>
                              </a>
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
                            </ListGroupItem>
                          </ListGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
              <div className="text-center mt-3 mb-2">
                <Button color="link" className="btn-link-dark">
                  <span>
                    View completed tasks{' '}
                    <span className="text-muted">(87)</span>
                  </span>
                </Button>
              </div>
              <div>
                <Input placeholder="Add new task..." />
              </div>
              <div className="align-box-row mt-3">
                <div className="align-items-center">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    color="link"
                    className="btn-link-primary p-0 text-success"
                    id="AudioFileTooltip1">
                    <FontAwesomeIcon
                      icon={['far', 'file-audio']}
                      className="font-size-xl"
                    />
                  </a>
                  <UncontrolledTooltip target="AudioFileTooltip1">
                    Add audio file
                  </UncontrolledTooltip>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    color="link"
                    className="btn-link-primary p-0 mr-2 ml-2 text-danger"
                    id="VideoFileTooltip1">
                    <FontAwesomeIcon
                      icon={['far', 'file-video']}
                      className="font-size-xl"
                    />
                  </a>
                  <UncontrolledTooltip target="VideoFileTooltip1">
                    Add video file
                  </UncontrolledTooltip>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    color="link"
                    className="btn-link-primary p-0 text-info"
                    id="UploadDocumentsTooltip1">
                    <FontAwesomeIcon
                      icon={['far', 'file-excel']}
                      className="font-size-xl"
                    />
                  </a>
                  <UncontrolledTooltip target="UploadDocumentsTooltip1">
                    Upload Documents
                  </UncontrolledTooltip>
                </div>
                <div className="ml-auto">
                  <Button
                    tag="a"
                    href="#/"
                    onClick={e => e.preventDefault()}
                    size="sm"
                    color="primary">
                    <FontAwesomeIcon
                      icon={['fas', 'plus']}
                      className="font-size-sm"
                    />
                    Create Task
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
