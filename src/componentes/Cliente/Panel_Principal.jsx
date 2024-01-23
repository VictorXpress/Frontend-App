import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function PanelPrincipal() {
  const cardStyle = {
    width: "18rem",
    height: "100%", // Establece una altura máxima para las tarjetas
    display: "flex",
    flexDirection: "column",
  };
  const cardBodyStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  };
  return (
    <div className="container mt-8 ">
      <div className="d-flex flex-wrap -mx-2  ">
        <div className="w-full md:w-1/3 px-2 mb-4 px-6 md:px-10">
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://imagenes.elpais.com/resizer/w8mFnu66S0DyVH_aj7Pzve0VTZ8=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/JYXP2CLFYZJTPASPTTOLHE54KM.jpg"
            />

            <Card.Body style={cardBodyStyle}>
              <Card.Title>Medicamentos sin receta médica</Card.Title>
              <Card.Text>
                Medicamentos que se pueden comprar sin necesidad de una receta
                médica.
              </Card.Text>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Ir a...
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 px-6 md:px-10">
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://www.iidenut.org/instituto/wp-content/uploads/2019/04/suplementos.png"
            />
            <Card.Body style={cardBodyStyle}>
              <Card.Title>Suplementos nutricionales </Card.Title>
              <Card.Text>
                Vitaminas, minerales y otros suplementos dietéticos que pueden
                ser utilizados para complementar la dieta.
              </Card.Text>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Ir a...
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 px-6 md:px-10">
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://static.mercadonegro.pe/wp-content/uploads/2017/05/22192530/Farmacias-4.jpg"
            />
            <Card.Body style={cardBodyStyle}>
              <Card.Title>Cuidado personal</Card.Title>
              <Card.Text>
                Productos para el cuidado personal, higiene y belleza, que
                incluyen productos para el cuidado del cabello, cuidado de la
                piel, productos de afeitado, productos de higiene femenina, y
                cosméticos.
              </Card.Text>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Ir a...
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 px-6 md:px-10">
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://diarioavance.com/wp-content/uploads/2017/04/unnamed-11.jpg"
            />
            <Card.Body style={cardBodyStyle}>
              <Card.Title>Equipos medicos</Card.Title>
              <Card.Text>
                Incluyen productos como termómetros, tensiómetros, vendajes,
                apósitos, algodón, tijeras médicas, guantes médicos, y otros
                suministros de primeros auxilios.
              </Card.Text>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Ir a...
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 px-6 md:px-10">
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://c8.alamy.com/compes/fjbgt9/una-amplia-variedad-de-productos-para-el-cuidado-del-bebe-para-nuevas-mamas-y-pop-en-una-farmacia-de-nueva-york-el-miercoles-24-de-febrero-de-2016-richard-b-levine-fjbgt9.jpg"
            />
            <Card.Body style={cardBodyStyle}>
              <Card.Title>Productos para bebe</Card.Title>
              <Card.Text>
                Pañales, fórmulas infantiles, chupetes, biberones.
              </Card.Text>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Ir a...
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 px-6 md:px-10">
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://www.labdeiters.com/wp-content/uploads/11Controldepeso_3.jpg"
            />
            <Card.Body style={cardBodyStyle}>
              <Card.Title>Productos para el control de peso</Card.Title>
              <Card.Text>
                Suplementos dietéticos, productos para el control del apetito, y
                otros productos relacionados con la pérdida o el mantenimiento
                del peso.
              </Card.Text>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Ir a...
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default PanelPrincipal;
