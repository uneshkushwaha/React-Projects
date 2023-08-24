import  './user.scss'
import Single from '../../Components/single/Single'
//fetch the data from the data.ts file ans send it to the single component
import { singleUser} from '../../data'//details of the users in a single page
const user = () => {
  return (
    <div className='user'>
 
  <Single{...singleUser}/>
    </div>
  )
}

export default user
