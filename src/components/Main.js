import React, { Component } from "react";
import PhotoFrame from "./PhotoFrame";
import Title from "./Title";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      allPhotos: [
        {
          id: "0",
          description: "beautiful sea",
          imageLink: "https://picsum.photos/800/600?image=14",
        },
        {
          id: "1",
          description: "Coffee cup",
          imageLink: "https://picsum.photos/800/600?image=30",
        },
        {
          id: "2",
          description: "Freedom",
          imageLink: "https://picsum.photos/800/600?image=50",
        },
        {
          id: "3",
          description: "Farm",
          imageLink: "https://picsum.photos/800/600?image=85",
        },
      ],
    };
    this.removePhoto = this.removePhoto.bind(this);
  }
  removePhoto(photoRemove) {
    this.setState((state) => ({
      allPhotos: state.allPhotos.filter((photo) => photo !== photoRemove),
    }));
  }
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"PhotoFrame"} />
              <PhotoFrame
                onRemovePhoto={this.removePhoto}
                PhotoBlock={this.state.allPhotos}
              />
            </div>
          )}
        />
        <Route exact path="/AddPhoto" component={AddPhoto} />
        );
      </div>
    );
  }
}

export default Main;
