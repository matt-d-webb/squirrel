import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col } from 'reactstrap';

import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import Select from 'rc-select';

const itemRender = (current, type, element) => {
  if (type === 'page') {
    return <a href={'#' + current}>{current}</a>;
  }
  return element;
};

const textItemRender = (current, type, element) => {
  if (type === 'prev') {
    return (
      <FontAwesomeIcon
        icon={['fas', 'chevron-left']}
        className="font-size-sm"
      />
    );
  }
  if (type === 'next') {
    return (
      <FontAwesomeIcon
        icon={['fas', 'chevron-right']}
        className="font-size-sm"
      />
    );
  }
  return element;
};

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <div>
            <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
              Basic
            </h5>
            <Pagination
              total={100}
              locale={localeInfo}
              itemRender={itemRender}
            />
          </div>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div>
            <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
              With icons
            </h5>
            <Pagination
              total={100}
              locale={localeInfo}
              itemRender={textItemRender}
            />
          </div>
        </Col>
      </Row>

      <div className="p-3 rounded bg-secondary d-flex align-items-center justify-content-center my-5">
        <Pagination
          selectComponentClass={Select}
          showQuickJumper
          showSizeChanger
          defaultPageSize={20}
          defaultCurrent={5}
          total={450}
          locale={localeInfo}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Pagination total={455} />
      </div>
      <div className="divider my-5" />
      <div className="d-flex align-items-center justify-content-center">
        <Pagination total={234} />
      </div>
      <div className="divider my-5" />
      <div className="d-flex align-items-center justify-content-center">
        <Pagination total={94} />
      </div>
      <div className="mb-2" />
    </Fragment>
  );
}
