const init = {
  formations: [],
  user: {},
  languages: [],
  studies: [],
  experiences: [],
  skills: [],
};

const cvBuilderReducer = (state = init, action = {}) => {
  switch (action.type) {
    case 'value':
      break;

    default:
      return state;
  }
  return state;
};

export default cvBuilderReducer;
