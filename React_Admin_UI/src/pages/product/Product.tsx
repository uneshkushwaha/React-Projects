import './product.scss'
import Single from '../../Components/single/Single'
import { singleProduct} from '../../data'//details of the products in a single page
const Product = () => {

//fetch the data from the data.ts file ans send it to the single component

  return (
    <div className='product'>
       <Single{...singleProduct}/>

    </div>
  )
}

export default Product
