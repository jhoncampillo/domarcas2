import React from "react";

export const Contacto = () => {
  return (
    <div>
      <h1 className="mt-4" style={{ color: "white" }}>
        Contacto
      </h1>
      <div className="container mt-3" style={{ color: "white" }}>
        <section className="mb-4">
          <strong>
            <p classNameName="text-center w-responsive mx-auto mb-5">
              Si tienes algun tipo de inquietud puedes contactactarnos para
              tener el gusto de atenderte.
            </p>
          </strong>

          <div className="row mt-3">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                      <label for="name" className="">
                        Nombre
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <label for="email" className="">
                        email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                      <label for="subject" className="">
                        Asunto
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                      <label for="message">Mensaje</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left">
                <button
                  className="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </button>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center border border-info  bg-info text-dark">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Telefono Miami : 306-45451212</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>Telefono Colombia +57 - 2 45178124</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@mdbootstrap.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
