import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Table,
  CardBody,
  Card,
  CustomInput,
  Badge,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-5">
        <div className="card-header pr-2">
          <div className="card-header--title">
            <small>Tables</small>
            <b>Example table with custom content</b>
          </div>
          <div className="card-header--actions">
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              size="sm"
              color="link"
              className="text-primary"
              id="RefreshTooltip1">
              <FontAwesomeIcon icon={['fas', 'cog']} spin />
            </Button>
            <UncontrolledTooltip target="RefreshTooltip1">
              Refresh
            </UncontrolledTooltip>
          </div>
        </div>
        <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th className="text-center" style={{ width: '5%' }}>
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckbox3"
                      className="align-self-start"
                      label="&nbsp;"
                    />
                  </th>
                  <th>Company</th>
                  <th>Date</th>
                  <th className="text-center" style={{ width: '20%' }}>
                    Status
                  </th>
                  <th>Employee</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckbox4"
                      className="align-self-start"
                      label="&nbsp;"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        color="facebook"
                        className="btn-pill d-40 p-0 mr-3"
                        id="ViewFacebookTooltip6">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fab', 'facebook']}
                            className="font-size-lg"
                          />
                        </span>
                      </Button>
                      <UncontrolledTooltip target="ViewFacebookTooltip6">
                        View Facebook Profile
                      </UncontrolledTooltip>
                      <div>
                        <b>Facebook</b>
                        <span className="text-black-50 d-block">
                          Social media company
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">16 September 2020</div>
                  </td>
                  <td className="text-center">
                    <Badge color="warning" className="h-auto py-0 px-3">
                      Pending
                    </Badge>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral-first"
                        className=" px-2 py-0 no-caret">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </DropdownToggle>
                      <DropdownMenu
                        right
                        className="dropdown-menu-xl overflow-hidden p-0">
                        <Nav
                          pills
                          className="nav-neutral-first flex-column pt-2 pb-3">
                          <NavItem className="nav-item--header px-3">
                            <span className="text-capitalize text-black font-size-md font-weight-bold">
                              Export menu
                            </span>
                          </NavItem>
                          <li className="dropdown-divider" />
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              active>
                              <span>View details</span>
                              <Badge color="first" className="ml-auto">
                                New
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}>
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['fas', 'download']} />
                              </div>
                              <span>Download</span>
                            </NavLink>
                          </NavItem>
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}>
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['far', 'file-excel']} />
                              </div>
                              <span>Export to CSV</span>
                            </NavLink>
                          </NavItem>
                          <li className="dropdown-divider" />
                          <NavItem>
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="text-danger mx-3">
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['fas', 'times']} />
                              </div>
                              <span>Delete</span>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckbox5"
                      className="align-self-start"
                      label="&nbsp;"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        color="github"
                        className="btn-pill d-40 p-0 mr-3"
                        id="ViewDetailsTooltip31">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fab', 'github']}
                            className="font-size-lg"
                          />
                        </span>
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip31">
                        View details
                      </UncontrolledTooltip>
                      <div>
                        <b>Github</b>
                        <span className="text-black-50 d-block">
                          Recommended company
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row text-danger">
                      <b>17 September 2020</b>
                      <Badge color="neutral-info" className="text-info ml-2">
                        Due
                      </Badge>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="success" className="h-auto py-0 px-3">
                      Completed
                    </Badge>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Beck Simpson
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Developer
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral-first"
                        className=" px-2 py-0 no-caret">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </DropdownToggle>
                      <DropdownMenu
                        right
                        className="dropdown-menu-xl overflow-hidden p-0">
                        <Nav
                          pills
                          className="nav-neutral-first flex-column pt-2 pb-3">
                          <NavItem className="nav-item--header px-3">
                            <span className="text-capitalize text-black font-size-md font-weight-bold">
                              Export menu
                            </span>
                          </NavItem>
                          <li className="dropdown-divider" />
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              active>
                              <span>View details</span>
                              <Badge color="first" className="ml-auto">
                                New
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}>
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['fas', 'download']} />
                              </div>
                              <span>Download</span>
                            </NavLink>
                          </NavItem>
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}>
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['far', 'file-excel']} />
                              </div>
                              <span>Export to CSV</span>
                            </NavLink>
                          </NavItem>
                          <li className="dropdown-divider" />
                          <NavItem>
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="text-danger mx-3">
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['fas', 'times']} />
                              </div>
                              <span>Delete</span>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckbox1"
                      className="align-self-start"
                      label="&nbsp;"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        color="instagram"
                        className="btn-pill d-40 p-0 mr-3"
                        id="ViewDetailsTooltip32">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fab', 'instagram']}
                            className="font-size-lg"
                          />
                        </span>
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip32">
                        View details
                      </UncontrolledTooltip>
                      <div>
                        <b>Instagram</b>
                        <span className="text-black-50 d-block">
                          Sharing images since 2000
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">18 September 2020</div>
                  </td>
                  <td className="text-center">
                    <Badge color="danger" className="h-auto py-0 px-3">
                      Declined
                    </Badge>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Regan Norris
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Project Manager
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral-first"
                        className=" px-2 py-0 no-caret">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </DropdownToggle>
                      <DropdownMenu
                        right
                        className="dropdown-menu-xl overflow-hidden p-0">
                        <Nav
                          pills
                          className="nav-neutral-first flex-column pt-2 pb-3">
                          <NavItem className="nav-item--header px-3">
                            <span className="text-capitalize text-black font-size-md font-weight-bold">
                              Export menu
                            </span>
                          </NavItem>
                          <li className="dropdown-divider" />
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              active>
                              <span>View details</span>
                              <Badge color="first" className="ml-auto">
                                New
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}>
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['fas', 'download']} />
                              </div>
                              <span>Download</span>
                            </NavLink>
                          </NavItem>
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}>
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['far', 'file-excel']} />
                              </div>
                              <span>Export to CSV</span>
                            </NavLink>
                          </NavItem>
                          <li className="dropdown-divider" />
                          <NavItem>
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="text-danger mx-3">
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['fas', 'times']} />
                              </div>
                              <span>Delete</span>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckbox2"
                      className="align-self-start"
                      label="&nbsp;"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        color="twitter"
                        className="btn-pill d-40 p-0 mr-3"
                        id="ViewDetailsTooltip33">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="font-size-lg"
                          />
                        </span>
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip33">
                        View details
                      </UncontrolledTooltip>
                      <div>
                        <b>Twitter</b>
                        <span className="text-black-50 d-block">
                          140 characters at a time
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">19 September 2020</div>
                  </td>
                  <td className="text-center">
                    <Badge color="info" className="h-auto py-0 px-3">
                      Review
                    </Badge>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar4} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Finnlay Haney
                        </a>
                        <span className="text-black-50 d-block">
                          Professional Ingineer
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        size="sm"
                        color="neutral-first"
                        className=" px-2 py-0 no-caret">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </DropdownToggle>
                      <DropdownMenu
                        right
                        className="dropdown-menu-xl overflow-hidden p-0">
                        <Nav
                          pills
                          className="nav-neutral-first flex-column pt-2 pb-3">
                          <NavItem className="nav-item--header px-3">
                            <span className="text-capitalize text-black font-size-md font-weight-bold">
                              Export menu
                            </span>
                          </NavItem>
                          <li className="dropdown-divider" />
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              active>
                              <span>View details</span>
                              <Badge color="first" className="ml-auto">
                                New
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}>
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['fas', 'download']} />
                              </div>
                              <span>Download</span>
                            </NavLink>
                          </NavItem>
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}>
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['far', 'file-excel']} />
                              </div>
                              <span>Export to CSV</span>
                            </NavLink>
                          </NavItem>
                          <li className="dropdown-divider" />
                          <NavItem>
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="text-danger mx-3">
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['fas', 'times']} />
                              </div>
                              <span>Delete</span>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="divider" />
          <div className="divider" />
          <div className="p-3 d-flex justify-content-center">
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
        </CardBody>
      </Card>
    </Fragment>
  );
}
