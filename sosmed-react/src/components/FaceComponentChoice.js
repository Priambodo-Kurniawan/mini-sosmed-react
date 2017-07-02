import React from 'react';
import { connect } from 'react-redux';

import {
  changeEyesAction,
  changeMouthAction,
  changeNoseAction,
} from '../actions';

const FaceComponentChoice = (props) => {
  return (
    <li className="radio-image" style={{width:`${props.width || '135px'}`}} >
      <input
        name={`${props.name || 'group'}`}
        type="radio"
        id={`${props.nose || props.eyes || props.mouth }`}
        value={`${props.nose || props.eyes || props.mouth }`}
        className='hide-radio'
        onClick={(e) => {
          if (props.eyes){
            props.changeEyes(e.target.value)
          } else if (props.nose) {
            props.changeNose(e.target.value)
          } else if (props.mouth) {
            props.changeMouth(e.target.value)
          }
        }}
      />
      <label htmlFor={`${props.nose || props.eyes || props.mouth }`} style={{
        height: 90,
        padding: 0
      }}>
        <div className={props.className}>
          <img
            src={`https://api.adorable.io/avatars/face/${props.eyes || null}/${props.nose || null}/${props.mouth || null}/FF9800`}
            style={{
              width:'200px',
              margin: 'auto'
            }} alt=''
          />
        </div>
      </label>
    </li>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeEyes: (type) => dispatch(changeEyesAction(type)),
    changeMouth: (type) => dispatch(changeMouthAction(type)),
    changeNose: (type) => dispatch(changeNoseAction(type)),
  }
}

export default connect(null, mapDispatchToProps)(FaceComponentChoice);
