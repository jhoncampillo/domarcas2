import React from "react";
//import { MainContext } from "../../Context/MainContext";
//import { useContext } from "react";
{
}

export const CardItem = ({ domCart, delfromcart }) => {
  //const { delFromcart } = useContext(MainContext);
  //let { name, precioVenta, categoria } = cart;
  //console.log(name);
  console.log("PPPP", domCart);
  //console.log("XXXXX", data);
  return (
    <div class="row">
      <div className="col-sm-6">
        <div className="card mb-2" style={{ width: "12rem" }}>
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h4 className="card-title " style={{ color: "blue" }}>
              <strong>{domCart.name}</strong>
            </h4>
            <p className="card-text" style={{ color: "#000000" }}>
              {domCart.precioVenta}
            </p>
            <p className="card-text">{domCart.categoria}</p>
            <h3>
              <strong>
                {/* {" "}
            $ {data.price}.00 x Cantidad: {data.cantidad}{" "} */}
              </strong>
            </h3>
            {/*uso una arroyfunction por que tengo que mandar un parametro  */}
            <div className="d-flex flex-wrap justify-content-center bg-light border mt-8 ">
              <button
                className="btn btn-dark  mt-1 "
                onClick={() => delfromcart(domCart.name)}
              >
                Eliminar Item
              </button>
              {/* le envio el id delproducto y el all=true */}
              {/* <button
                className="btn btn-dark  mt-1"
                onClick={() => delfromcart(domCart.name, true)}
              >
                Eliminar todos
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
