import './topBox.scss'
import { topDealUsers } from '../../data'

const TopBox = () => {
    return (
        <div className='topBox'>
            <h1>Top Deals</h1>
            <div className="topBox__container">
                {topDealUsers.map((user) => (
                    //we can assign any variable in place of user,so don't confuse ,it just a variable name to access the data
                    //now the listItem of topBox is ready to use like id,amount,img,etc
                    <div className="listItem" key={user.id}>
                        {/* //id of the user is accesed here from the data,now its time access its image and texts */}
                        <div className="user">
                            <img src={user.img} alt="" />
                            {/* //image is accessed now the text like username ,email and amount are accesed */}

                            <div className="userTexts">
                                <span className="username">{user.username}</span>
                                <span className="email">{user.email}</span>
                                <span className="amount">${user.amount}</span>

                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default TopBox
