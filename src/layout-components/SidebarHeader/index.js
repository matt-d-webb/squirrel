import React, { Fragment, Component } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';

import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';

import projectLogo from '../../assets/images/squirrel.png';

class SidebarHeader extends Component {
  render() {
    return (
      <Fragment>
        <div className="app-sidebar--header">
          <div className="nav-logo">
            <Link
              to="/"
              title="Squirrel">
              <i>
                <img
                  alt="Squirrel"
                  src={projectLogo}
                />
              </i>
              <span>Squirrel</span>
            </Link>
          </div>
          <button
            onClick={this.toggleSidebar}
            className="btn btn-sm collapse-sidebar-btn"
            id="CollapseSidebarTooltip">
            <FontAwesomeIcon icon={['far', 'dot-circle']} size="lg" />
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sidebarToggle: state.ThemeOptions.sidebarToggle,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHeader);
