import React from 'react'
import { connect } from 'react-redux';

import {Row, Input, Col} from 'react-materialize'

import {
  changeTypeAction,
  changeNameAction,
  changeSizeAction,
  changeBorderRadiusAction,
} from '../actions';

const AvatarForm = (props) => {
  return (
    <div className="avatar-form">
      <Row>
        <Input s={12} label="Your Name" validate onChange={(e) => props.changeName(e.target.value)}></Input>
      </Row>
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
          <span className="label">Avatar Type</span>
          <div className="typeRadio">
            <Input s={6} name='type' type='radio' value='urban' label='Urban' className='with-gap' onClick={(e) => props.changeType(e.target.value)} />
            <Input s={6} name='type' type='radio' value='male-pixel' label='Male-Pixel' className='with-gap' onClick={(e) => props.changeType(e.target.value)} />
            <Input s={6} name='type' type='radio' value='robo' label='Robo' className='with-gap' onClick={(e) => props.changeType(e.target.value)} />
            <Input s={6} name='type' type='radio' value='female-pixel' label='Female-Pixel' className='with-gap' onClick={(e) => props.changeType(e.target.value)} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeType: (type) => dispatch(changeTypeAction(type)),
    changeName: (name) => dispatch(changeNameAction(name)),
    changeSize: (size) => dispatch(changeSizeAction(size)),
    changeBorderRadius: (value) => dispatch(changeBorderRadiusAction(value)),
  }
}

const mapStateToProps = (state) => {
  return {
    face: state.face,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarForm);
