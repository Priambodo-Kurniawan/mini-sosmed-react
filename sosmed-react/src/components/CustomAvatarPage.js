import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Main.css';
import {Row, Col} from 'react-materialize'
import CustomAvatarForm from './CustomAvatarForm.js'
import TabChoices from './TabChoices.js'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="form-section">
          <div className="container">
            <Row>
              <Col s={6} className="flex-center">
                <img
                src={`https://api.adorable.io/avatars/face/${this.props.face.components.eyes}/${this.props.face.components.nose}/${this.props.face.components.mouth}/${this.props.face.components.color}`}
                style={{
                  borderRadius:`${this.props.face.borderRadius}%`,
                  width:`${this.props.face.size}px`,
                  height:`${this.props.face.size}px`,
                  margin: 'auto'
                }} alt='' />
                <h5 className="title is-1 center-align">Avatar Creator</h5>
              </Col>
              <Col s={6}>
                <CustomAvatarForm />
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <TabChoices />
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
