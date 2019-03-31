
export const ACTION_SET = 'REDUX_ONE_SET';

export const set (id, payload) => ({
  type: ACTION_SET, id, payload
});

export default (state, { type, id, payload }) => {
  switch (type) {
    case ACTION_SET:
      return { ...state, [id]: { ...state[id], ...payload } };
    default:
      return state;
  }
};
