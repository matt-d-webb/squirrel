import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Rating from 'react-rating';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Rating
        initialRating={2}
        stop={10}
        emptySymbol={
          <span className="text-muted opacity-3">
            <FontAwesomeIcon icon={['far', 'star']} />
          </span>
        }
        fullSymbol={
          <span className="text-primary">
            <FontAwesomeIcon icon={['far', 'star']} />
          </span>
        }
      />
      <div className="divider my-4" />
      <Rating
        stop={8}
        initialRating={4}
        emptySymbol={
          <span className="text-muted mr-1 opacity-2">
            <FontAwesomeIcon size="2x" icon={['far', 'thumbs-up']} />
          </span>
        }
        fullSymbol={
          <span className="text-success mr-1">
            <FontAwesomeIcon size="2x" icon={['far', 'thumbs-up']} />
          </span>
        }
      />
      <div className="divider my-4" />
      <Rating
        stop={5}
        initialRating={1}
        emptySymbol={
          <span className="text-warning mr-1 opacity-2">
            <FontAwesomeIcon size="3x" icon={['fas', 'heart']} />
          </span>
        }
        fullSymbol={
          <span className="text-warning mr-1">
            <FontAwesomeIcon size="3x" icon={['fas', 'heart']} />
          </span>
        }
      />
      <div className="divider my-4" />
      <Rating
        stop={6}
        emptySymbol={
          <span className="text-danger mr-1 opacity-3">
            <FontAwesomeIcon size="4x" icon={['fas', 'smile']} />
          </span>
        }
        fullSymbol={
          <span className="text-focus mr-1">
            <FontAwesomeIcon size="4x" icon={['fas', 'smile']} />
          </span>
        }
      />
      <div className="divider my-4" />
      <Rating
        stop={6}
        emptySymbol={
          <span className="text-primary mr-1 opacity-3">
            <FontAwesomeIcon size="3x" icon={['fas', 'battery-empty']} />
          </span>
        }
        fullSymbol={
          <span className="text-success mr-1">
            <FontAwesomeIcon size="3x" icon={['fas', 'battery-full']} />
          </span>
        }
      />
    </Fragment>
  );
}
