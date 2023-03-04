//Reducer
import { DomainTypes } from "./DomainTypes";
import { useState } from "react";
import { alfabetic } from "../data/data";
import { useEffect } from "react";
//import { MainContext } from "../Context/MainContext";

export const ReducerDomain = (state, action) => {
  console.log("vvvv", state);
  switch (action.type) {
    case DomainTypes.FILTER_NAME: {
      let name = action.payload.toLocaleLowerCase().trim();
      return {
        filtrado: action.state.filter((dominio) =>
          dominio.name.toLowerCase().includes(name)
        ),
      };
      //let domainFilter = [];
      //throw new Error("Action type= Filter_Name no esta implementada");

      // let name = action.payload.toLocaleLowerCase().trim();
      // if (action.payload === 0) return state.alfabetic;

      // console.log("DDDDDDD", state.alfabetic);
      // return state.filter((dominio) =>
      //   dominio.toLocaleLowerCase().includes(name)
      // );

      //const [search, setSearch] = useState(state);
      // // const [searchCate, setSearchCate] = useState("");
      // console.log(search.length);
      // //estado para asignar datos

      // const domains = state.include((dominio) =>
      //   dominio.toLowerCase().includes(action.payload.toLowerCase())
      // );
    }
    case DomainTypes.FILTER_CATEGORY: {
      throw new Error("Action type= Filter_Name no esta implementada");
      // let domainFilter = [];

      // const [search, setSearch] = useState(state);
      // // // const [searchCate, setSearchCate] = useState("");
      // // console.log(search.length);
      // // //estado para asignar datos

      // if (!state.length >= 1) {
      //   domainFilter = alfabetic;
      //   console.log("jjjjjjjjjj", domainFilter);
      // } else {
      //   domainFilter = alfabetic.filter((domain) => {
      //     const todotext = domain.categoria.toLowerCase();
      //     const searchDomtext = search.toLowerCase();
      //     return todotext.includes(searchDomtext);
      //   });
      // }
    }

    default:
      return state;
  }
};
