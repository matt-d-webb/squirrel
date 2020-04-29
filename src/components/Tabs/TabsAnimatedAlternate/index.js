import React, { Fragment, useState } from 'react';

import clsx from 'clsx';

import {
  Row,
  Col,
  Card,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const LivePreviewExample = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <div className="tabs-animated tabs-animated-shadow tabs-bordered">
              <Nav tabs justified>
                <NavItem>
                  <NavLink
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span>Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span>Profile</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span>Messages</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <p className="mb-0 p-3">
                  I am alone, and feel the charm of existence in this spot,
                  which was created for the bliss of souls like mine.
                </p>
              </TabPane>
              <TabPane tabId="2">
                <p className="mb-0 p-3">
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents.
                </p>
              </TabPane>
              <TabPane tabId="3">
                <p className="mb-0 p-3">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart.
                </p>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box p-2 mb-5">
            <div className="tabs-animated tabs-animated-line">
              <Nav tabs justified>
                <NavItem>
                  <NavLink
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span>Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span>Profile</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span>Messages</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <p className="mb-0 p-3">
                  I am alone, and feel the charm of existence in this spot,
                  which was created for the bliss of souls like mine.
                </p>
              </TabPane>
              <TabPane tabId="2">
                <p className="mb-0 p-3">
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents.
                </p>
              </TabPane>
              <TabPane tabId="3">
                <p className="mb-0 p-3">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart.
                </p>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LivePreviewExample;
