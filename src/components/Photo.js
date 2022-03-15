import React from "react";
import PropTypes from "prop-types";

function Photo(photo) {
  const frame = photo.FinalPhoto;
  return (
    <figure className="figure">
      <img className="photo" src={frame.imageLink} alt={frame.description} />
      <figcaption>
        <p>{frame.description}</p>
      </figcaption>
      <div className="btn-container">
        <button className="remove" onClick={() => photo.onRemovePhoto(frame)}>
          Remove
        </button>
      </div>
    </figure>
  );
}
Photo.propTypes = {
  onRemovePhoto: PropTypes.func.isRequired,
};
export default Photo;
