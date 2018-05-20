import React from 'react';
import { PreviewTileContainer } from './../container/PreviewTilesContainer.jsx'

const PreviewTileTemplate = (props) => {
  return (
    <div>
      
      <div className="card" id="card-width">
        <div className="card-image">
          <img src={props.picture} alt="Placeholder image" id="card-stock"/>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-3">{props.title}</p>
            </div>
          </div>
          <div className="content">
            {props.desc}
          </div>
          <div className="content">
            {`${props.points}/100`}
          </div>
        </div>
      </div>
    </div>

  );
};

// export default PreviewTileTemplate;
module.exports.PreviewTileTemplate = PreviewTileTemplate
