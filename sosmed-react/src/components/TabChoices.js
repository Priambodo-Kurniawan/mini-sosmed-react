import React from 'react';
import { connect } from 'react-redux';

import FaceComponentChoice from './FaceComponentChoice'

const TabChoices = (props) => {
  return (
    <div>
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3"><a href="#test1">Mouth</a></li>
          <li className="tab col s3"><a className="active" href="#test2">Nose</a></li>
          <li className="tab col s3"><a href="#test4">Eyes</a></li>
        </ul>
      </div>
      <div id="test1" className="col s12 table-content">
        <div className="choices-wraper">
          <h4><strong>Mouth Choices</strong></h4>
          <ul style={{display:'flex', flexWrap: 'wrap'}}>
            {props.face.mouths.map((mouth) => (
              <FaceComponentChoice mouth={mouth} name={'mouth'} key={mouth} className={'mouth-img-wrapper'}/>
            ))}
          </ul>
        </div>
      </div>
      <div id="test2" className="col s12 table-content">
        <div className="choices-wraper">
          <h4><strong>Nose Choices</strong></h4>
          <ul style={{display:'flex', flexWrap: 'wrap'}}>
            {props.face.noses.map((nose) => (
              <FaceComponentChoice nose={nose} name={'nose'} key={nose} className={'mouth-img-wrapper nose'}/>
            ))}
          </ul>
        </div>
      </div>
      <div id="test4" className="col s12 table-content">
        <div className="choices-wraper">
          <h4><strong>Eyes Choices</strong></h4>
          <ul style={{display:'flex', flexWrap: 'wrap'}}>
            {props.face.eyes.map((eye) => (
              <FaceComponentChoice width={'100px'} name={'eyes'} eyes={eye} key={eye} className={'mouth-img-wrapper eyes'}/>
            ))}
          </ul>
        </div>
      </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    face: state.face.faceComponents,
  };
}

export default connect(mapStateToProps, null)(TabChoices);
