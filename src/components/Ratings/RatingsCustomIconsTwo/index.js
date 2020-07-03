import React, { Fragment } from 'react';

import Rating from 'react-rating';

import MdHeart from 'react-ionicons/lib/MdHeart';
import MdStar from 'react-ionicons/lib/MdStar';
import IosThumbsUp from 'react-ionicons/lib/IosThumbsUp';
import IosBatteryDead from 'react-ionicons/lib/IosBatteryDead';
import IosBatteryFull from 'react-ionicons/lib/IosBatteryFull';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Rating
        initialRating={2}
        stop={10}
        emptySymbol={
          <MdHeart color="var(--light)" fontSize="2rem" beat={true} />
        }
        fullSymbol={
          <MdHeart color="var(--primary)" fontSize="2rem" beat={true} />
        }
      />
      <div className="divider my-4" />
      <Rating
        initialRating={2}
        stop={10}
        emptySymbol={
          <MdStar color="var(--secondary)" fontSize="2.2rem" rotate={true} />
        }
        fullSymbol={
          <MdStar color="var(--danger)" fontSize="2.2rem" rotate={true} />
        }
      />
      <div className="divider my-4" />
      <Rating
        initialRating={2}
        stop={10}
        emptySymbol={<IosThumbsUp color="var(--light)" fontSize="3.2rem" />}
        fullSymbol={<IosThumbsUp color="var(--success)" fontSize="3.2rem" />}
      />
      <div className="divider my-4" />
      <Rating
        initialRating={2}
        stop={10}
        emptySymbol={<IosBatteryDead color="var(--light)" fontSize="2.8rem" />}
        fullSymbol={<IosBatteryFull color="var(--first)" fontSize="2.8rem" />}
      />
    </Fragment>
  );
}
