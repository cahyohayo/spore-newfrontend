import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import './NFT.css';
import { nftmetadata } from '../../utils/nftmetadata';


const NFTGallery = (props: any) => {

  return (
    <>

      {' '}
      &nbsp;&nbsp;&nbsp;
      {/* <Carousel> */}
      <div className="slider-gallery">
        <div className="judul-roadmap margin-b">
          <h1 className="text-roadmap gallery-h"><b>Gallery Collection</b></h1>
          <h3 className="p-roadmap">Create your NFTs Collection now</h3>
        </div>
        <div className="center slider">
          {nftmetadata.map((data: { id: string, name: string, external_url: string, author: string, description: string }) => (
            // <Carousel.Item>
            <div className="card text-center" key={data.id}>
              <div className="likenft">
                <span title="Love it" className="btn btn-counter multiple-count" data-count="0"><span>&#x2764;</span></span>
              </div>
              <div className="image-card-slider">
                <img src={data.external_url} className="card-img-top" alt="Reload your page" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text author"><b>Author : {data.author}</b></p>
                <p className="card-text descript">{data.description}</p>
              </div>
            </div>


            // <Carousel.Caption>

            //   </Carousel.Caption>

            // </Carousel.Item>
          ))}
        </div>
      </div>
      {/* </Carousel> */}
    </>
  );
}
export default NFTGallery

