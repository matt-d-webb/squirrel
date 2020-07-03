import React, { Fragment, Component } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';

import { setHeaderSearchHover } from '../../reducers/ThemeOptions';

class HeaderSearch extends Component {
  toggleHeaderSearchHover = () => {
    let { headerSearchHover, setHeaderSearchHover } = this.props;
    setHeaderSearchHover(!headerSearchHover);
  };

  render() {
    let { headerSearchHover } = this.props;

    return (
      <Fragment>
        <div className="header-search-wrapper">
          <div
            className={clsx('search-wrapper', {
              'is-active': headerSearchHover
            })}>
            <label
              className="icon-wrapper text-black"
              htmlFor="header-search-input">
              <FontAwesomeIcon icon={['fas', 'search']} />
            </label>
            <input
              onFocus={this.toggleHeaderSearchHover}
              onBlur={this.toggleHeaderSearchHover}
              className="form-control"
              id="header-search-input"
              name="header-search-input"
              placeholder="Search terms..."
              type="search"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  headerSearchHover: state.ThemeOptions.headerSearchHover
});

const mapDispatchToProps = dispatch => ({
  setHeaderSearchHover: enable => dispatch(setHeaderSearchHover(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);
