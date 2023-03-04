//Reducer
import { DomainTypes } from "./DomainTypes";

export const ReducerDomain = (state, action) => {
  switch (action.type) {
    case DomainTypes.FILTER_NAME: {
      let name = action.payload.toLocaleLowerCase().trim();
      console.log({ name });
      return {
        ...state,
        searched: state.allDomains.filter((dominio) =>
          dominio.name.toLowerCase().includes(name)
        ),
      };
    }
    case DomainTypes.RESET_SEARCHED: {
      return {
        ...state,
        searched: [],
      };
    }
    case DomainTypes.FILTER_CATEGORY: {
      throw new Error("Action type= Filter_Name no esta implementada");
    }
    default:
      return state;
  }
};
