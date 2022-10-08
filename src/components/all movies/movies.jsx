import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "../../common/card";
import MovieModal from "../../common/modal";

import "./movie.css";
import { handleGetAllMovies } from "../../services/axios";

function Movies(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [allMovies, setAllMovies] = useState(null);

  useEffect(() => {
    async function GetMovies() {
      const res = await handleGetAllMovies();
      const arr = res.filter((ele) => ele.id !== 744276);
      setAllMovies(arr);
      console.log(arr);
      // console.log("res", res);
    }
    GetMovies();
  }, []);

  ///////////////////////

  const handleShow = ({ name, language, date, overview, popularity }) => {
    setShowModal(true);

    const data = {
      name: name,
      language: language,
      date: date,
      overview: overview,
      popularity: popularity,
    };
    setModalData(data);
  };

  return (
    <div className="movies">
      <Row>
        {(allMovies || []).map((movie) => (
          <Col xs={6} lg={4} key={movie.id}>
            <div className="card-div" key={movie.id}>
              <Card
                imgSrc={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                movieName={movie.title}
                onClick={() =>
                  handleShow({
                    name: movie.title,
                    language: movie.original_language,
                    date: movie.release_date,
                    overview: movie.overview,
                    popularity: movie.popularity,
                  })
                }
              />
            </div>
          </Col>
        ))}
        <MovieModal
          show={showModal}
          onHide={() => setShowModal(false)}
          ///////////////////////
          name={modalData.name || ""}
          language={modalData.language || ""}
          date={modalData.date || ""}
          overview={modalData.overview || ""}
          popularity={modalData.popularity || ""}
        />
      </Row>
    </div>
  );
}

export default Movies;
