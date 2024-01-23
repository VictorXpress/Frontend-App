import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Galeria() {
  return (
    <Carousel data-bs-theme="dark" className="w-full mx-auto max-w-screen-xl">
      <Carousel.Item>
        <img
          className="d-block w-full"
          src="https://www.carbonellfarma.com/wp-content/uploads/2018/09/productos-farmacia-1024x675.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full"
          src="https://publicacionesdelsur.b-cdn.net/articulos/articulos-503656.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full"
          src="https://www.imfarmacias.es/uploads/2021/06/imfarmacias_productos_todas_generaciones_24360_15134949.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Galeria;
