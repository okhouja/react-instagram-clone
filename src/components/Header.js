const Header = () => {
  return (
    <div className="header">
      <div className="logoNav">
        <img src="./img/instagram-logo.png"></img>
      </div>
      <div className="search">
        <input type="text" placeholder="Search"></input>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Inbox</li>
          <li>Explore</li>
          <li>Activity</li>
          <li>user</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
