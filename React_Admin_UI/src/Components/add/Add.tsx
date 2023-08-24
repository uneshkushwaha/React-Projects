import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
import { useMutation,useQueryClient } from 'react-query';
type Props = {
    slug:string;
    columns:GridColDef[];
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
    }

const  Add=(props:Props)=> {

    const queryClient = useQueryClient();

    const mutation =useMutation({
     mutationFn: () => {
  
       return fetch(`http://localhost:8800/api/${props.slug}s`, {
         method: 'post',
        //for the body we should pass the data that we want to add to the api
        //for example if we want to add a new user we should pass the data of the new user
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: 111,
                img: "",
                lastName: "Hello",
                firstName: "Test",
                email: "testme@gmail.com",
                phone: "123 456 789",
                createdAt: "01.02.2023",
                verified: true,
              }),
            });
    
   },
   onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}s`]);
    }
  });
  



  const handleSubmit=(e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      //add new item
      //this will add a new item to the api and writing mutation here will solve mutation problem
      mutation.mutate();
        props.setOpen(false);
  };

  return (
    <div className='add'>
        <div className='modal'>
            <span className='close' onClick={()=>props.setOpen(false)}>X</span>
            <h1>Add new {props.slug}</h1>
            {/* //props.slug is the name of the page whatever the name of the page is like users,products,orders
            //here slug is fetching the name of the page */}

            <form onSubmit={handleSubmit}>

                {props.columns
                .filter((item)=>item.field !== 'id'&& item.field!=='img')
                .map((columns,index)=>(
                    <div className='form-group'key={index}>
                        <label htmlFor="">{columns.headerName}</label>
                        <input type={columns.type} placeholder={columns.headerName} />
                        </div>
                ))}
                <button> Send</button>

                </form>
      
    </div>
    </div>
  )
}
export default Add;
