const initialState = {
  title: 'Avatar Creator',
  name: 'default',
  size: 280,
  borderRadius: 10,
  type: 'urban',
  components: {
    mouth: 'mouth1',
    nose: 'nose2',
    eyes: 'eyes1',
    color: 'FF9800'
  },
  faceComponents: {
    mouths: [
      "mouth1",
      "mouth10",
      "mouth11",
      "mouth3",
      "mouth5",
      "mouth6",
      "mouth7",
      "mouth9"
    ],
    noses: [
      "nose2",
      "nose3",
      "nose4",
      "nose5",
      "nose6",
      "nose7",
      "nose8",
      "nose9"
    ],
    eyes: [
      "eyes1",
      "eyes10",
      "eyes2",
      "eyes3",
      "eyes4",
      "eyes5",
      "eyes6",
      "eyes7",
      "eyes9"
    ],
  }
}

export default (state = initialState, action) => {
  if(action.type === 'CHANGE_TYPE') {
    return {...state, type: action.payload};
  }
  else if(action.type === 'CHANGE_NAME') {
    return {...state, name: action.payload};
  }
  else if(action.type === 'CHANGE_SIZE') {
    return {...state, size: action.payload};
  }
  else if(action.type === 'CHANGE_BORDER_RADIUS') {
    return {...state, borderRadius: action.payload};
  }
  else if(action.type === 'CHANGE_COLOR') {
    return {...state, components: {...state.components, color: action.payload}};
  }
  else if(action.type === 'CHANGE_EYES') {
    return {...state, components: {...state.components, eyes: action.payload}};
  }
  else if(action.type === 'CHANGE_MOUTH') {
    return {...state, components: {...state.components, mouth: action.payload}};
  }
  else if(action.type === 'CHANGE_NOSE') {
    return {...state, components: {...state.components, nose: action.payload}};
  }
  return state
}
