import { DomainTypes } from "./DomainTypes";

export const AuthReducer = (state = {}, action) => {
  switch (action.DomainTypes) {
    case DomainTypes.LOGIN:
      return {
        ...state,
        logged: true,
        name: action.payload,
      };

    case DomainTypes.LOGOUT:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
