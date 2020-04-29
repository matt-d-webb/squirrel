import React, { Fragment, useState } from 'react';

import { Button } from 'reactstrap';

import SweetAlert from 'sweetalert2-react';

export default function LivePreviewExample() {
  const [show1, setShow1] = useState(false);
  const [message34, setMessage34] = useState(false);
  const [message33, setMessage33] = useState(false);
  const [message32, setMessage32] = useState(false);
  const [message1, setMessage1] = useState(false);
  const [message2, setMessage2] = useState(false);

  return (
    <Fragment>
      <div className="text-center">
        <Button
          className="m-2"
          color="success"
          onClick={() => setShow1({ show: true })}>
          Success
        </Button>
        <Button
          className="m-2"
          color="danger"
          onClick={() => setMessage34({ message34: true })}>
          Danger
        </Button>
        <Button
          className="m-2"
          color="info"
          onClick={() => setMessage32({ message32: true })}>
          Info
        </Button>
        <Button
          className="m-2"
          color="warning"
          onClick={() => setMessage33({ message33: true })}>
          Warning
        </Button>
      </div>

      <div className="divider my-4" />

      <div className="text-center">
        <Button
          className="m-2"
          color="primary"
          onClick={() => setMessage1({ message1: true })}>
          Basic
        </Button>
        <Button
          className="m-2"
          color="primary"
          onClick={() => setMessage2({ message2: true })}>
          Title and Text
        </Button>
      </div>

      <SweetAlert
        title="Good job!"
        confirmButtonColor=""
        show={show1}
        text="You clicked the button!"
        type="success"
      />

      <SweetAlert
        title="Good job!"
        confirmButtonColor=""
        show={message34}
        text="You clicked the button!"
        type="error"
      />

      <SweetAlert
        title="Good job!"
        confirmButtonColor=""
        show={message32}
        text="You clicked the button!"
        type="info"
      />

      <SweetAlert
        title="Good job!"
        confirmButtonColor=""
        show={message33}
        text="You clicked the button!"
        type="warning"
      />

      <SweetAlert
        title=""
        confirmButtonColor=""
        show={message1}
        text="Here's a message!"
      />

      <SweetAlert
        title="Here's a message!"
        confirmButtonColor=""
        show={message2}
        text="It's pretty, isn't it?"
      />
    </Fragment>
  );
}
