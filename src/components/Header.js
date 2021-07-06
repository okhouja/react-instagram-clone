const Header = () => {
  return (
    <div id="header__container">
      <div className="header">
        <div className="logoNav">
          <img src={`${process.env.PUBLIC_URL}/img/instagram-logo.png`}></img>
        </div>
        <div className="search">
          <input type="text" placeholder="Search"></input>
        </div>
        <nav>
          <ul>
            <li>
              <img src={`${process.env.PUBLIC_URL}/img/icon/home.png`}></img>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/img/icon/inbox.png`}></img>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/img/icon/exploer.png`}></img>
            </li>
            <li>
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/img/icon/activity.png`}
              ></img>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/img/icon/user.png`}></img>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
