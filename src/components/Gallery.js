const Gallery = ({ posts }) => {
  console.log(posts);

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
            <div className="heroInfo">
              Roland-Garros Roland-Garros tennis - Grand Slam account. From 24
              May to 13 June 2021 #RolandGarros
              <span>
                www.rolandgarros.com Followed by rogerfedererthelegend,
                borisbeckerofficial, atptour +5 more
              </span>
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
            />
            // <p></p>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Gallery;
