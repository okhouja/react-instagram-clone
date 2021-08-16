const Gallery = ({ posts }) => {
  const numFormatter = (num) => {
    if (num > 999 && num < 1000000) {
      return parseFloat((num / 1000).toFixed(1)) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return parseFloat((num / 1000000).toFixed(1)) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  };

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
                <li id="logotext">rolandgarros</li>
                <li>Message</li>
                <li>following</li>
                <li>suggest</li>
                <li>more options</li>
              </ul>

              <div className="heroNumbers">
                <div>3,856 posts</div>
                <div>1.9m followers</div>
                <div>410 following</div>
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
                <li id="heroInfoLastLine">
                  <span>Followed by </span>
                  <div id="likes"> rogerfedererthelegend</div>
                  <span>,</span>
                  <div id="likes">borisbeckerofficial</div>
                  <span>,</span>
                  <div id="likes">atptour</div> <span>+5 more</span>
                </li>
              </ul>

              <span></span>
            </div>
          </div>
        </div>
        <div className="subHeader">
          <ul>
            <li>
              <img
                className="storyImage"
                src={`${process.env.PUBLIC_URL}/img/stories/1.png`}
              ></img>
              <label>FINALS</label>
            </li>
            <li>
              <img
                className="storyImage"
                src={`${process.env.PUBLIC_URL}/img/stories/2.png`}
              ></img>
              <label>SEMIS</label>
            </li>
            <li>
              <img
                className="storyImage"
                src={`${process.env.PUBLIC_URL}/img/stories/3.png`}
              ></img>
              <label>QUARTERS</label>
            </li>
            <li>
              <img
                className="storyImage"
                src={`${process.env.PUBLIC_URL}/img/stories/4.png`}
              ></img>
              <label>4TH ROUND</label>
            </li>
            <li>
              <img
                className="storyImage"
                src={`${process.env.PUBLIC_URL}/img/stories/5.png`}
              ></img>
              <label>3RD ROUND</label>
            </li>
            <li>
              <img
                className="storyImage"
                src={`${process.env.PUBLIC_URL}/img/stories/6.png`}
              ></img>
              <label>2ND ROUND</label>
            </li>
          </ul>
        </div>
      </section>
      <div className="galleryContainer">
        <div className="linkGallery">
          <ul>
            <div id="aGLBorder">
              <a href="#">
                <li id="activeGalleryLink">
                  <img
                    className="gallreyLinkImage"
                    src={`${process.env.PUBLIC_URL}/img/posts.png`}
                  ></img>
                  POSTS
                </li>
              </a>
            </div>
            <a href="#">
              <li>
                <img
                  className="gallreyLinkImage"
                  src={`${process.env.PUBLIC_URL}/img/reels.png`}
                ></img>
                REELS
              </li>
            </a>
            <a href="#">
              <li>
                <img
                  className="gallreyLinkImage"
                  src={`${process.env.PUBLIC_URL}/img/igtv.png`}
                ></img>
                IGTV
              </li>
            </a>

            <a href="#">
              <li>
                <img
                  className="gallreyLinkImage"
                  src={`${process.env.PUBLIC_URL}/img/tagged.png`}
                ></img>
                TAGGED
              </li>
            </a>
          </ul>
        </div>
        <div className="photosgallery">
          {posts.map((el) => (
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/img/img${el.img}`}
                key={el.id}
                id="photogallery"
              />
              <div className="image__overlay">
                <div className="image__title">
                  <img
                    className="likeonImage"
                    src={`${process.env.PUBLIC_URL}/img/like.svg`}
                  ></img>
                  {numFormatter(el.likes)}
                </div>

                <div className="image__comments">
                  <img
                    className="commentonImage"
                    src={`${process.env.PUBLIC_URL}/img/comment.svg`}
                  ></img>
                  {numFormatter(el.comments)}
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Gallery;
