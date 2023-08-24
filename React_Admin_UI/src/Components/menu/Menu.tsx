import { Link } from 'react-router-dom';
import "./menu.scss";
import { menu } from '../../data';

const Menu = () => {
  return (
    <div className="menu">
{/* //menu is the data fetched from data.ts and its id and title is mapped to the menu array */}
      {menu.map((item) => (


        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>

 {/* and the listItems of the title is mapped to the listItems array with it's id and their own title and icon */}
          {item.listItems.map((listItem) => (
            <Link to={listItem.url}className='ListItem' key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="ListItemTitle">{listItem.title}</span>
            </Link>

          ))}

        </div>
      ))}

    </div>
  )
}

export default Menu
