import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col } from "react-bootstrap";

import Icon from "../../common/icon";
import AddBox from "../../common/add box";
import * as services from "../../services/axios";
import "./moviesList.css";

function MoviesList() {
  const [name, setName] = useState("");
  const [id, setId] = useState(null);
  const [allMovies, setAllMovies] = useState(null);

  useEffect(() => {
    async function GetMovies() {
      const res = await services.handleGetAllMovies();
      setAllMovies(res);
      console.log("res", res);
    }
    GetMovies();
  }, []);

  ///////////////////////
  const handleEdit = ({ id, name }) => {
    document.getElementById("add-box").style.display = "block";
    setName(name);
    setId(id);
  };

  const handleSubmit = async () => {
    toast.success(
      "Note: this Api doesn't allow to edit data, but the code is correct, look at console to see your edit"
    );
    document.getElementById("add-box").style.display = "none";
    const data = { title: name };
    console.log(data);
    // await services.handleEditMovie(id, data);
  };

  const handleDelete = async (id) => {
    toast.success("DONE");
    // await services.handleRemoveMovie(id);
    setAllMovies(allMovies.filter((m) => m.id !== id));
  };

  const handleHideAddBox = () => {
    document.getElementById("add-box").style.display = "none";
  };
  return (
    <>
      <Row>
        <Col xs={12}>
          <AddBox
            id="add-box"
            header="Edit Movie Name"
            onSubmit={() => handleSubmit()}
            onCancel={handleHideAddBox}
          >
            <p className="note">
              Note: this Api doesn't allow to edit data, but the code is correct
            </p>
            <input
              type="text"
              placeholder="write another name"
              name="name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
          </AddBox>
        </Col>
      </Row>
      {/* /////////////////////////////////////// */}
      <div className="moviesList">
        <h1 className="header">There are {(allMovies || []).length} movies here </h1>
        <div className="table-div">
          <table>
            <thead>
              <tr>
                <th>TITLE</th>
                <th>ID</th>
                <th>LANGUAGE</th>
                <th>RELEASE DATE</th>
                <th>Delete </th>
                <th>Edit </th>
              </tr>
            </thead>

            <tbody>
              {(allMovies || []).map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.title} </td>
                  <td>{movie.original_language} </td>
                  <td>{movie.id} </td>
                  <td>{movie.release_date} </td>
                  <td className="icons">
                    <Icon
                      id="trashIcon"
                      title="delete"
                      className="ri-delete-bin-line"
                      onClick={() => handleDelete(movie.id)}
                    />
                  </td>
                  <td className="icons">
                    <Icon
                      id="arrowIcon"
                      title="edit this name"
                      className="ri-edit-line"
                      onClick={() =>
                        handleEdit({ id: movie.id, name: movie.title })
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MoviesList;
