import React from "react";
import Modal from "react-modal";
import { addHours } from "date-fns";
import { useState, useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import "./dominioModal.css";
//import { useForm } from "../../Utils/useForm";
import DatePicker from "react-datepicker";
//style datePicker
import "react-datepicker/dist/react-datepicker.css";
//Idioma
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const DominioModal = () => {
  //const [isOpen, setIsOpen] = useState(true);
  const { isOpen, setIsOpen } = useContext(MainContext);

  const [formValues, setFormValues] = useState({
    title: "Jhon",
    note: "Campillo",
    email: "jh@gmail.com",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  //event.target
  const onInputChangued = ({ target }) => {
    // event.prevenDefault()
    //pongo lo que trae el value
    //al target.name de asigno lo uqe traen target.value
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChangued = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const onCloseModal = () => {
    console.log("Cerrado Modal");
    setIsOpen(!isOpen);
  };

  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={onCloseModal}
      style={customStyles}
      ariaHideApp={false}
      //contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Ofertar por tu dominio </h1>
      <hr />
      <form className="container">
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          {/* <input className="form-control" placeholder="Fecha inicio" /> */}
          <DatePicker
            selected={formValues.start}
            //onChange={(date) => setStartDate(date)}
            className="form-control"
            onChange={(event) => onDateChangued(event, "start")}
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Dominio a ofretar</label>
          <h2>xxxxssdsdsad</h2>
          {/* <input className="form-control" placeholder="Fecha inicio" /> */}
          {/* <DatePicker
            selected={formValues.end}
            minDate={formValues.start}
            //onChange={(date) => setStartDate(date)}
            className="form-control"
            onChange={(event) => onDateChangued(event, "end")}
            dateFormat="Pp"
            locale="es"
            timeCaption="Hora"
          /> */}
        </div>
        <div>
          <label>Oferta</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Selecciona tipo de Oferta</option>
            <option value="1">Compra</option>
            <option value="2">Alquiler</option>
            <option value="3">Ofertar $</option>
          </select>
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            placeholder="nombre completo"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChangued}
          />
          <small id="emailHelp" className="form-text text-muted">
            nombre + apellido
          </small>
        </div>
        <hr />
        <div className="form-group mb-2">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email de contacto"
            name="email"
            autoComplete="off"
            value={formValues.email}
            onChange={onInputChangued}
          />
          <small id="emailHelp" className="form-text text-muted">
            Email
          </small>
        </div>
        <hr />
        <div className="form-group mb-2">
          <label>Direccion</label>
          <input
            type="text"
            className="form-control"
            placeholder="Direccion de contacto"
            name="email"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChangued}
          />
          <small id="emailHelp" className="form-text text-muted">
            Direccion
          </small>
        </div>
        <hr />
        <div className="form-group mb-2">
          <label>Telefono</label>
          <input
            type="text"
            className="form-control"
            placeholder="(area)+ numero"
            name="email"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChangued}
          />
          <small id="emailHelp" className="form-text text-muted">
            (area)+numero
          </small>
        </div>
        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
