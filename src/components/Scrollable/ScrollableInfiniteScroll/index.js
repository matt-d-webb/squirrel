import React, { Fragment, Component } from 'react';

import { Card, Alert } from 'reactstrap';

import InfiniteScroll from 'react-infinite-scroll-component';
import { BarLoader } from 'react-spinners';

export default class LivePreviewExample extends Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 200) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };

  render() {
    return (
      <Fragment>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={
            <div className="d-flex align-items-center justify-content-center py-3">
              <BarLoader color={'var(--primary)'} loading={true} />
            </div>
          }
          height={380}
          endMessage={
            <div className="mb-2 mr-3">
              <Alert color="success">This is the end of the list!</Alert>
            </div>
          }>
          {this.state.items.map((i, index) => (
            <Card
              className="card-box py-2 px-5 shadow-none mb-2 mr-3"
              key={index}>
              List item: #{index}
            </Card>
          ))}
        </InfiniteScroll>
      </Fragment>
    );
  }
}
