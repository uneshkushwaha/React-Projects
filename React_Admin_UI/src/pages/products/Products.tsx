import DataTable from "../../Components/DataTable/DataTable"
import Add from "../../Components/add/Add";
import { useState } from "react";
import "./products.scss"
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

//columns are created based on the data available in the data.ts file
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 120,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];
const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
       <div className="info">
       <h1> Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
        <DataTable slug='products' columns={columns} rows={ products}/>
        {/* //products is fetched from data.ts .This products is for the rows*/}
        {open && <Add setOpen={setOpen}  slug='product'columns={columns} />  }
        {/* //if it is open then show the add component */}
    </div>
  )
}

export default Products
