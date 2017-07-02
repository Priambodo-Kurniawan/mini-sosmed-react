import React from 'react'
import { connect } from 'react-redux';

import {Row, Col} from 'react-materialize'

import {
  changeTypeAction,
  changeNameAction,
  changeSizeAction,
  changeBorderRadiusAction,
  changeColorAction,
} from '../actions';

const CustomAvatarForm = (props) => {
  return (
    <div className="avatar-form">
      <Row>
        <Col s={12}>
          <span className="label">Size</span>
          <span className="results-label">{props.face.size}px</span>
          <p className="range-field">
          <input type="range" id="test5" min="100" max="285" onChange={(e) => props.changeSize(e.target.value)} />
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <span className="label">Border Radius</span>
          <span className="results-label">{props.face.borderRadius}%</span>
          <p className="range-field">
          <input type="range" id="test5" min="0" max="50" onChange={(e) => props.changeBorderRadius(e.target.value)} />
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <span className="label">Selected Color</span>
          <span className="results-label">#{props.face.components.color}</span>
          <p className="range-field">
          <input type="color" name="favcolor" onChange={(e) => props.changeColor(replaceColor(e.target.value))} />
          </p>
        </Col>
      </Row>
    </div>
  )
}

function replaceColor(value) {
  return value.slice(1)
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeType: (type) => dispatch(changeTypeAction(type)),
    changeName: (name) => dispatch(changeNameAction(name)),
    changeSize: (size) => dispatch(changeSizeAction(size)),
    changeBorderRadius: (value) => dispatch(changeBorderRadiusAction(value)),
    changeColor: (value) => dispatch(changeColorAction(value)),
  }
}

const mapStateToProps = (state) => {
  return {
    face: state.face,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomAvatarForm);
