const Reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        ...action.payload,
      };
    case 'ADD_DIRTY_FIELD':
      if (state.dirtyFields.includes(action.payload)) {
        return { ...state };
      } else {
        const newState = [...state.dirtyFields];
        newState.push(action.payload);

        return {
          ...state,
          dirtyFields: newState,
        };
      }
    case 'HANDLE_CAPTCHA':
      return {
        ...state,
        captcha: action.payload,
      };
    case 'HANDLE_SUBMITTING':
      return {
        ...state,
        isSubmitting: action.payload,
      };
    case 'ERROR_SUBMITTING':
      return {
        ...state,
        errorSubmitting: action.payload,
      };
    case 'SUBMIT_COUNT':
      return {
        ...state,
        submitCount: state.submitCount + 1,
      };
    case 'RESET_FIELDS':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
