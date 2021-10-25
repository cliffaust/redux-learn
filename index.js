const USERNAME = "USERNAME";

function buyCake() {
  return {
    type: USERNAME,
    info: "first redux action",
  };
}

const initialState = {
  numOfCake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERNAME:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };

    default:
      return state;
  }
};
