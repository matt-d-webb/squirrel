import React, { Fragment, setState } from 'react';
import { Link } from 'react-router-dom';
import { logout, signInWithGoogle, signInWithGitHub } from "../../../helpers/auth";
import { auth } from "../../../services/firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  FormGroup,
  Input,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

import svgImage9 from '../../../assets/images/illustrations/data_points.svg';



export default function LivePreviewExample() {

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log("some err", error);
    }
  }

  auth().onAuthStateChanged(user => {
    console.log('State', user);
    if (user) {
    } else {
    }
  });



  return (
    <Fragment>
      <div className="app-wrapper min-vh-100">
        <div className="app-main min-vh-100">
          <Button
            tag={Link}
            size="lg"
            outline
            color="first"
            className="btn-go-back"
            to="/home">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['fas', 'arrow-left']} />
            </span>
            <span className="btn-wrapper--label">Back to Home</span>
          </Button>
          <div className="app-content p-0">
            <div className="app-content--inner d-flex align-items-center">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content py-5">
                  <div className="container">
                    <Row>
                      <Col
                        lg="5"
                        className="d-none d-lg-flex align-items-center">
                        <img
                          alt="..."
                          className="w-100 mx-auto d-block img-fluid"
                          src={svgImage9}
                        />
                      </Col>
                      <Col
                        lg="7"
                        sm="12"
                        className=" d-flex align-items-center">
                        <div className="pl-0 pl-md-5">
                          <div className="text-black mt-3">
                            <span className="text-left text-sm-center">
                              <h1 className="display-3 text-lg-left text-center mb-3 font-weight-bold">
                                Login to your account
                              </h1>
                              <p className="font-size-lg text-lg-left text-center mb-0 text-black-50">
                                Time to get your nuts in order.
                              </p>
                            </span>
                            <div className="bg-white rounded p-4 my-4">
                              <div className="text-black-50 text-center mb-3">
                                Sign in with
                              </div>
                              <Row>
                                <Col>
                                  <Button
                                    color="facebook"
                                    block
                                    id="btnFacebookTooltip"
                                    onClick={() => logout()}
                                    >
                                    <span className="btn-wrapper--icon">
                                      <FontAwesomeIcon
                                        icon={['fab', 'facebook']}
                                      />
                                    </span>
                                  </Button>
                                  <UncontrolledTooltip target="btnFacebookTooltip">
                                    Facebook
                                  </UncontrolledTooltip>
                                </Col>
                                <Col>
                                  <Button
                                    color="twitter"
                                    block
                                    id="btnTwitterTooltip"
                                    onClick={() => handleGoogleSignIn()}
                                  >
                                    <span className="btn-wrapper--icon">
                                      <FontAwesomeIcon
                                        icon={['fab', 'google']}
                                      />
                                    </span>
                                  </Button>
                                  <UncontrolledTooltip target="btnTwitterTooltip">
                                    Twitter
                                  </UncontrolledTooltip>
                                </Col>
                              </Row>
                            </div>
                            <div>
                              <form>
                                <FormGroup>
                                  <label>Email address</label>
                                  <Input
                                    placeholder="yourname@yourmail.com"
                                    type="email"
                                  />
                                </FormGroup>
                                <div className="form-group mb-4">
                                  <div className="d-flex justify-content-between">
                                    <label>Password</label>
                                    <Link to="/recover-password">
                                      Forgot password?
                                    </Link>
                                  </div>
                                  <Input
                                    placeholder="Enter your password"
                                    type="password"
                                  />
                                </div>

                                <Button size="lg" block={true} color="second">
                                  Login
                                </Button>
                              </form>
                            </div>
                            <div className="text-center pt-4 text-black-50">
                              Don't have an account?{' '}
                              <Link to="/register">Create an Account</Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
