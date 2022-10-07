import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MovieModal(props) {
  return (
    <Modal
      className="modal modalDocs"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
    >
      <div className="modal-content">
        {/* closeButton */}
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">
            <h1>About This Movie</h1>
          </Modal.Title>
        </Modal.Header>
        {/* //////////////////////////// */}
        <Modal.Body>
          <div className="modal-container">
            <div className="data">
              <p>
                <b>Name : </b>
                <span>{props.name}</span>
              </p>
              <p>
                <b>overview : </b>
                <span>{props.overview}</span>
              </p>
              <p>
                <b>Original Language : </b>
                <span>{props.language}</span>
              </p>
              <p>
                <b>Release date : </b>
                <span>{props.date}</span>
              </p>

              <p>
                <b>popularity : </b>
                <span>{props.popularity}</span>
              </p>
            </div>
          </div>
        </Modal.Body>
        {/* ////////////////////////////// */}
        <Modal.Footer className="modal-footer">
          <Button onClick={props.onHide}>CLOSE</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
export default MovieModal;
