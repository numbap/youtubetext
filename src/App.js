import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header.component";
import Footer from "./components/footer.component";
import VideoListing from "./components/video-listing.component";
import VideoCaption from "./components/video-caption.component";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-sm-8 text-left border'>
            <VideoCaption />
          </div>
          <div className='col-sm-4 text-left border'>
            <VideoListing />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
