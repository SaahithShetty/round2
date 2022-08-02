import { PHONE_LOGIN, USER_DETAIL } from "../Constants";

const initialState = {
  uid: null,
  token: null,
  phone_number: "",
  first_name: "",
  last_name: "",
  email_id: "",
  dob: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PHONE_LOGIN:
      return {
        ...state,
        uid: action.uid,
        token: action.token,
        phone_number: action.phone_number,
        email_id: action.email_id,
        first_name: action.first_name,
        last_name: action.last_name,
        dob: action.dob,
      };
    case USER_DETAIL:
      return {
        ...state,
        email_id: action.email_id,
        first_name: action.first_name,
        last_name: action.last_name,
        dob: action.dob,
      };
    default:
      return state;
  }
};
