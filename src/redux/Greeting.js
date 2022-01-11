const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

export const getGreetingsSuccess = (payload) => ({
  type: GET_GREETING_SUCCESS,
  payload,
});

export const getGreeting = () => async (dispatch) => {
  const greeting = await fetch('http://localhost:3000/messages');
  const result = await greeting.json();
  const data = result.Messages;
  data.map((g) => dispatch(getGreetingsSuccess(g.greeting)));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_GREETING_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
