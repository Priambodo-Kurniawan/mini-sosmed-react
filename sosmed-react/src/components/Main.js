import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Main.css';
import {Row, Col} from 'react-materialize'
import AvatarForm from './AvatarForm.js'
import Avatar from './Avatar.js'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="form-section">
          <div className="container">
          <h2 className="title is-1">{this.props.face.title}</h2>
          <Row>
            <Col s={6}>
              <AvatarForm />
            </Col>
            <Col s={6} className="flex-center">
              <Avatar />
              { (this.props.face.name !== 'default') ? <h5 className="center-align">Hello <strong>{this.props.face.name}</strong>!</h5> : null }
            </Col>
          </Row>
          <div className="columns">
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    face: state.face,
  };
}

export default connect(mapStateToProps, null)(Main);
