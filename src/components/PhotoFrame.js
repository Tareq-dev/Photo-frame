import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoFrame(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto">
      +
      </Link>
      <div className="photo-grid">
        {props.PhotoBlock
          .sort(function(a, b) {
            return b.id - a.id;
          })
          .map((singlePhoto, index) => (
          <Photo
            key={index}
            onRemovePhoto={props.onRemovePhoto}
            FinalPhoto={singlePhoto}
          />
        ))}
      </div>
    </div>
  );
}
PhotoFrame.prototype = {
  PhotoBlock: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};
export default PhotoFrame;
