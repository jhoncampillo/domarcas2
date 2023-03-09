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
      //throw new Error("Action type= Filter_Name no esta implementada");
      let category = action.payload.toLocaleLowerCase().trim();
      console.log({ category });
      return {
        ...state,
        searched: state.allDomains.filter((dominioct) =>
          dominioct.categoria.toLowerCase().includes(category)
        ),
      };
    }
    case DomainTypes.ADD_TO_CART: {
      // throw new Error("Action.type=TYPES.ADD_TO_CARD no implementada");
      //buscaca el nombre del dominio en el state y lo guardas en le newDominio
      let newDominio = state.allDomains.find(
        (namedominio) => namedominio.name === action.payload
      );
      console.log(newDominio);

      //variable para acumular items si estan repetidos al carrito
      //recorroe al arrreglo del carrito para ver si el id que me envian ya lo tengo
      //recorro el array del carrito y busco el nombre que me pasan
      let itemInCart = state.cart.find((item) => item.name === newDominio.name);

      //retorno un ternario
      // si la variable ya tiene algo ya hay un prodcuto con ese id
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.name === newDominio.name
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            ),
          }
        : {
            ...state,
            //adiciono al array cart:[] los item seleccionados que se lamcenan en newitem
            //si es un item nuevo
            cart: [...state.cart, { ...newDominio, cantidad: 1 }],
          };
    }
    case DomainTypes.REMOVE_ONE_FROM_CARD: {
      //throw new Error("Action.type=TYPES.REMOVE_ONE_FROM_CARD no implementada");
      let itemDelete = state.cart.find((item) => item.id === action.payload);

      return itemDelete.cantidad > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
            ),
          }
        : {
            //cuando el item es menor a 1 traigo lo que tien el state y filtro por item diferente al pyload
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case DomainTypes.CLEAR_ALL_FROM_CARD: {
      // throw new Error("Action.type=TYPES.CLEAR_ALL_FROM_CARD no implementada");
      //action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case DomainTypes.CLEAR_CART: {
      //throw new Error("Action.type=TYPES.CLEAR_CART no implementada");
      return action.payload;
    }

    default:
      return state;
  }
};
