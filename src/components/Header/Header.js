import "./Header.css";

function Header() {
  return (
    <div>
      <div className="HeaderContainer ">
        <div className="row ">
          <div className="col col-lg-8">
            <h1>Top Jobs</h1>
          </div>
          <div className="col col-lg-2 colbtn ">
            <a className="btn btn-primary  blockquote" href="?">
              I want to hire
            </a>
          </div>
          <div className="col col-lg-2">
            <a className="btn btn-plain-alt blockquote" href="?">
              I want to Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
