const Gallery = ({ posts }) => {
  console.log(posts);

  return (
    <main className="mainContainer">
      <section className="mainHeader">
        <div className="heroSection">
          <div className="heroLogo">
            <img
              className="heroImage"
              src={`${process.env.PUBLIC_URL}/img/Logo_roland_garros.svg`}
            ></img>
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
            <div className="heroInfo">
              <ul>
                <li id="heroBold">Roland-Garros</li>
                <li>
                  Roland-Garros tennis - Grand Slam account. From 24 May to 13
                  June 2021
                </li>
                <li>#RolandGarros</li>
                <li>www.rolandgarros.com</li>
                <li>
                  Followed by rogerfedererthelegend, borisbeckerofficial,
                  atptour +5 more
                </li>
              </ul>

              <span></span>
            </div>
          </div>
        </div>
        <div className="subHeader">subHeader</div>
      </section>
      <div className="galleryContainer">
        galleryContainer
        <div className="linkGallery">
          <ul>
            <li>Posts</li>
            <li>REELS</li>
            <li>IGTV</li>
            <li>TAGGED</li>
          </ul>
        </div>
        <div className="photosgallery">
          {posts.map((el) => (
            <img
              src={`${process.env.PUBLIC_URL}/img/img${el.img}`}
              key={el.id}
              id="photogallery"
            />
            // <p></p>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Gallery;
