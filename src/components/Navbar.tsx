import { Col, Row } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <Row className="border border-dark p-2 px-4 justify-content-between m-0 text-light">
        {/* Parte dell'immagine profilo */}
        <Col sm={12} md={5} className="border border-dark rounded-5 py-2">
          <Row className="px-3">
            <Col
              xs={12}
              sm={3}
              md={4}
              className="d-flex justify-content-center align-items-center bg-light rounded-5"
            >
              {/* <Image fluid src={Icon} alt="immagine profilo" /> */}
            </Col>
            <Col xs={12} sm={9} md={8} className="text-center">
              <h4 className="h5">Luis Quiroz</h4>
              <p className="bg-light text-dark py-1 px-2 ">
                Junior Web Developer
              </p>
            </Col>
          </Row>
        </Col>

        {/* Parte dei contatti */}
        <Col
          sm={12}
          md={3}
          className="d-flex justify-content-center align-items-center"
        >
          <a href="#" className="h3 px-3 py-1 mt-2 rounded-4">
            Contatti
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
