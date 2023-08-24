
import "./navbar.scss";

const NavBar = () => {
  return (

    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Admin</span>
      </div>

      {/* //three icons in the navbar  */}
      <div className="icons">
        <img src="/search.svg"className="icon" alt="icon" />
        <img src="/app.svg" className="icon"alt="icon" />
        <img src="/expand.svg"className="icon" alt="icon" />

        {/* and one notification container */}
        <div className="notification">
          <img src="/notifications.svg" alt="icon" />

          <span>1</span>
        </div>

        {/* and one user icon */}
        <div className="user">
          <img src="/user.svg" alt="icon" />
          <span>Unesh</span>
        </div>
        <img src="/settings.svg" alt="icon" />
      </div>
    </div>
  )
}

export default NavBar
