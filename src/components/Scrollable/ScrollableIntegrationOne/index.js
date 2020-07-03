import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  UncontrolledPopover,
  Badge,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <PerfectScrollbar className="card card-box shadow-none scroll-area-sm shadow-overflow">
        <div className="p-3">
          <div className="timeline-list">
            <div className="timeline-item timeline-item-icon">
              <div className="timeline-item--content">
                <div className="timeline-item--icon-wrapper bg-primary text-white">
                  <FontAwesomeIcon icon={['far', 'building']} />
                </div>
                <h4 className="timeline-item--label mb-2 font-weight-bold">
                  1991
                </h4>
                <p>The World Wide Web goes live with its first web page.</p>
              </div>
            </div>
            <div className="timeline-item timeline-item-icon">
              <div className="timeline-item--content">
                <div className="timeline-item--icon-wrapper bg-danger text-white">
                  <FontAwesomeIcon icon={['far', 'gem']} />
                </div>
                <h4 className="timeline-item--label mb-2 font-weight-bold">
                  1998
                </h4>
                <p>Bill Clinton's presidential scandal makes it online.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label mb-2 font-weight-bold">
                  1991
                </h4>
                <p>The World Wide Web goes live with its first web page.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label mb-2 font-weight-bold">
                  Java exam day
                </h4>
                <p>Bill Clinton's presidential scandal makes it online.</p>
                <div className="avatar-wrapper-overlap mt-2 mb-1">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="avatar-icon">
                      <img src={avatar1} alt="..." />
                    </div>
                  </div>
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="avatar-icon">
                      <img src={avatar7} alt="..." />
                    </div>
                  </div>
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="avatar-icon">
                      <img src={avatar1} alt="..." />
                    </div>
                  </div>
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="avatar-icon">
                      <img src={avatar2} alt="..." />
                    </div>
                  </div>
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="avatar-icon">
                      <img src={avatar6} alt="..." />
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
                  <Badge color="neutral-info" className="text-info ml-2">
                    New
                  </Badge>
                </h4>
                <p>
                  Mosaic, the first graphical browser, is introduced to the
                  average consumer.
                </p>
                <div className="mt-3">
                  <a href="#/" onClick={e => e.preventDefault()}>
                    <img
                      src={people3}
                      alt="..."
                      width="70"
                      className="img-fluid rounded mr-3 shadow-sm"
                    />
                  </a>
                  <a href="#/" onClick={e => e.preventDefault()}>
                    <img
                      src={people2}
                      alt="..."
                      width="70"
                      className="img-fluid rounded shadow-sm"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="timeline-item timeline-item-icon">
              <div className="timeline-item--content">
                <div className="timeline-item--icon-wrapper bg-amy-crisp text-white">
                  <FontAwesomeIcon icon={['far', 'keyboard']} />
                </div>
                <h4 className="timeline-item--label mb-2 font-weight-bold">
                  2003
                </h4>
                <p>MySpace becomes the most popular social network.</p>
              </div>
            </div>
          </div>
        </div>
      </PerfectScrollbar>

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
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar>
                <div className="p-3">
                  <div className="timeline-list">
                    <div className="timeline-item timeline-item-icon">
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon-wrapper bg-primary text-white">
                          <FontAwesomeIcon icon={['far', 'building']} />
                        </div>
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          1991
                        </h4>
                        <p>
                          The World Wide Web goes live with its first web page.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item timeline-item-icon">
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon-wrapper bg-danger text-white">
                          <FontAwesomeIcon icon={['far', 'gem']} />
                        </div>
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          1998
                        </h4>
                        <p>
                          Bill Clinton's presidential scandal makes it online.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon" />
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          1991
                        </h4>
                        <p>
                          The World Wide Web goes live with its first web page.
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
                          Bill Clinton's presidential scandal makes it online.
                        </p>
                        <div className="avatar-wrapper-overlap mt-2 mb-1">
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img src={avatar1} alt="..." />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img src={avatar7} alt="..." />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img src={avatar1} alt="..." />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img src={avatar2} alt="..." />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img src={avatar6} alt="..." />
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
                          Mosaic, the first graphical browser, is introduced to
                          the average consumer.
                        </p>
                        <div className="mt-3">
                          <a href="#/" onClick={e => e.preventDefault()}>
                            <img
                              src={people3}
                              alt="..."
                              width="70"
                              className="img-fluid rounded mr-3 shadow-sm"
                            />
                          </a>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            <img
                              src={people2}
                              alt="..."
                              width="70"
                              className="img-fluid rounded shadow-sm"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item timeline-item-icon">
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon-wrapper bg-amy-crisp text-white">
                          <FontAwesomeIcon icon={['far', 'keyboard']} />
                        </div>
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          2003
                        </h4>
                        <p>MySpace becomes the most popular social network.</p>
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
          id="timelinePopover">
          Inside Popover
        </Button>
      </div>

      <UncontrolledPopover
        target="timelinePopover"
        trigger="legacy"
        container="body"
        popperClassName="popover-custom-wrapper overflow-hidden popover-custom-md"
        placement="auto">
        <div className="scroll-area-sm shadow-overflow">
          <PerfectScrollbar>
            <div className="p-3">
              <div className="timeline-list">
                <div className="timeline-item timeline-item-icon">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon-wrapper bg-primary text-white">
                      <FontAwesomeIcon icon={['far', 'building']} />
                    </div>
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      1991
                    </h4>
                    <p>The World Wide Web goes live with its first web page.</p>
                  </div>
                </div>
                <div className="timeline-item timeline-item-icon">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon-wrapper bg-danger text-white">
                      <FontAwesomeIcon icon={['far', 'gem']} />
                    </div>
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      1998
                    </h4>
                    <p>Bill Clinton's presidential scandal makes it online.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon" />
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      1991
                    </h4>
                    <p>The World Wide Web goes live with its first web page.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon" />
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      Java exam day
                    </h4>
                    <p>Bill Clinton's presidential scandal makes it online.</p>
                    <div className="avatar-wrapper-overlap mt-2 mb-1">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src={avatar1} alt="..." />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src={avatar7} alt="..." />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src={avatar1} alt="..." />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src={avatar2} alt="..." />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img src={avatar6} alt="..." />
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
                      <Badge color="neutral-info" className="text-info ml-2">
                        New
                      </Badge>
                    </h4>
                    <p>
                      Mosaic, the first graphical browser, is introduced to the
                      average consumer.
                    </p>
                    <div className="mt-3">
                      <a href="#/" onClick={e => e.preventDefault()}>
                        <img
                          src={people3}
                          alt="..."
                          width="70"
                          className="img-fluid rounded mr-3 shadow-sm"
                        />
                      </a>
                      <a href="#/" onClick={e => e.preventDefault()}>
                        <img
                          src={people2}
                          alt="..."
                          width="70"
                          className="img-fluid rounded shadow-sm"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="timeline-item timeline-item-icon">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon-wrapper bg-amy-crisp text-white">
                      <FontAwesomeIcon icon={['far', 'keyboard']} />
                    </div>
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      2003
                    </h4>
                    <p>MySpace becomes the most popular social network.</p>
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
