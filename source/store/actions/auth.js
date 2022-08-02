import api_utils from "../../../assets/api";
import endPoints from "../../../assets/end_points";
import { PHONE_LOGIN, USER_DETAIL } from "../Constants";

export const PhoneNumberLogin = (phone_number, uid, token) => {
  return async (dispatch) => {
    const check = await fetch(
      `${api_utils.baseURL_Demo}${endPoints.users}${uid}/profile.json?`
    );

    const checkData = await check.json();
    if (!checkData) {
      const response = await fetch(
        `${api_utils.baseURL_Demo}${endPoints.users}${uid}/profile.json?`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone_number,
            token,
            first_name: "",
            last_name: "",
            email_id: "",
            dob: "",
          }),
        }
      );
      const resData = await response.json();
      dispatch({
        type: PHONE_LOGIN,
        uid: uid,
        phone_number: phone_number,
        token: token,
      });
    } else {
      let keys = "";
      for (keys in checkData);

      dispatch({
        type: PHONE_LOGIN,
        uid: uid,
        phone_number: phone_number,
        token: token,
        email_id: checkData[keys].email_id,
        first_name: checkData[keys].first_name,
        last_name: checkData[keys].last_name,
        dob: checkData[keys].dob,
      });
    }
  };
};

export const SignInUser = (uid) => {
  return async (dispatch) => {
    const response = await fetch(
      `${api_utils.baseURL_Demo}${endPoints.users}${uid}/profile.json?`
    );
    try {
      const resData = await response.json();
      let keys = "";
      for (keys in resData);

      dispatch({
        type: PHONE_LOGIN,
        phone_number: resData[keys].phone_number,
        token: resData[keys].token,
        email_id: resData[keys].email_id,
        first_name: resData[keys].first_name,
        last_name: resData[keys].last_name,
        dob: resData[keys].dob,
        uid: uid,
      });
    } catch (err) {
      alert(err);
    }
  };
};

export const AddUserDetail = (first_name, last_name, email_id, dob) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const phone_number = getState().auth.phone_number;
    const token = getState().auth.token;
    const response1 = await fetch(
      `${api_utils.baseURL_Demo}${endPoints.users}${uid}/profile.json?`
    );
    try {
      const resData1 = await response1.json();
      let keys = "";
      for (keys in resData1);

      const response = await fetch(
        `${api_utils.baseURL_Demo}${endPoints.users}${uid}/profile/${keys}.json?`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone_number,
            token,
            first_name: first_name,
            last_name: last_name,
            email_id: email_id,
            dob: dob,
          }),
        }
      );
      const resData = await response.json();

      dispatch({
        type: USER_DETAIL,
        first_name: first_name,
        last_name: last_name,
        email_id: email_id,
        dob: dob,
      });
    } catch (err) {
      alert(err);
    }
  };
};
