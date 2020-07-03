import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col md="6">
          <Pagination className="mb-4 pagination-warning">
            <PaginationItem disabled>
              <PaginationLink first href="#/" onClick={e => e.preventDefault()}>
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
              <PaginationLink next href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <Pagination className="mb-4 pagination-success">
            <PaginationItem disabled>
              <PaginationLink first href="#/" onClick={e => e.preventDefault()}>
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
              <PaginationLink next href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <Pagination className="mb-4 pagination-info">
            <PaginationItem disabled>
              <PaginationLink first href="#/" onClick={e => e.preventDefault()}>
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
              <PaginationLink next href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <Pagination className="mb-4 pagination-dark">
            <PaginationItem disabled>
              <PaginationLink first href="#/" onClick={e => e.preventDefault()}>
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
              <PaginationLink next href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </Col>
        <Col md="6">
          <Pagination className="mb-4 pagination-danger">
            <PaginationItem disabled>
              <PaginationLink first href="#/" onClick={e => e.preventDefault()}>
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
              <PaginationLink next href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <Pagination className="mb-4 pagination-primary">
            <PaginationItem disabled>
              <PaginationLink first href="#/" onClick={e => e.preventDefault()}>
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
              <PaginationLink next href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <Pagination className="mb-4 pagination-danger">
            <PaginationItem disabled>
              <PaginationLink first href="#/" onClick={e => e.preventDefault()}>
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
              <PaginationLink next href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <Pagination className="mb-4 pagination-first">
            <PaginationItem disabled>
              <PaginationLink first href="#/" onClick={e => e.preventDefault()}>
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
              <PaginationLink next href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <Pagination className="mb-4 pagination-second">
            <PaginationItem disabled>
              <PaginationLink first href="#/" onClick={e => e.preventDefault()}>
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
              <PaginationLink next href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#/" onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </Col>
      </Row>
    </Fragment>
  );
}
