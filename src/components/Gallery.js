const Gallery = ({ Data }) => {
  console.log(Data);

  return (
    <main className="mainContainer">
      woow
      <section className="mainHeader">
        Ok
        <div className="heroSection">
          <div className="heroLogo">
            <img className="heroImage" src="./img/Logo_roland_garros.svg"></img>
          </div>
          <div className="heroInformation">
            <div className="heroLogoInfo">
              <ul>
                <li>rolandgarros</li>
                <li>Message</li>
                <li>following</li>
                <li>suggest</li>
                <li>more options</li>
              </ul>

              <div className="heroNumbers">
                <div>3,802 posts</div>
                <div>1.8m followers</div>
                <div>407 following</div>
              </div>
            </div>
            <div className="heroInfo"> pageInfo</div>{" "}
          </div>
        </div>
        <div className="subHeader">subHeader</div>
      </section>
      <div className="galleryContainer">
        galleryContainer
        <div className="linkGallery">LinkGallery</div>
        <div className="photosgallery"></div>
      </div>
    </main>
  );
};
export default Gallery;
