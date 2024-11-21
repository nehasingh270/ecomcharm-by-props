import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LuEye } from "react-icons/lu";
import { Button, Modal } from 'antd';

const Home = (props) => {
  const [products , setproducts] =useState([]);
  console.log(products)


  let getAllData = async()=>{
     let res = await fetch('https://dummyjson.com/products')
 
    let data = await res.json();
    console.log(data);

    setproducts(data.products);
  }


  useEffect(()=>{
    getAllData()
  },[])

 const handleClick = (e)=>{
  console.log(e)
 }

//antdesign code for modal
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedObj, setSelectedObj] = useState("")

  const showModal = (ans) => {
    setSelectedObj(ans)
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const handleAddToCart = (ans)=>{
    //console.log(ans)
    
    props.xyz(ans)
  }
  
  return (
<div className='bg-gray-700 py-5'>
      <Modal width={800} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}> 

      
<div className='dark:bg-gray-800 dark:border-gray-700 '>
<div className=" bg-white border flex items-center md-flex-row  flex-col  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
  <img className="rounded-t-lg" src={selectedObj.thumbnail} alt={selectedObj.title} />
  <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title : {selectedObj.title}</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-1"><b>Brand :</b> {selectedObj.category}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-1">{selectedObj.description}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-1"><b>Discount :</b> {selectedObj.discountPercentage}%</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-1"><b>Price :</b> {selectedObj.price}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-1"><b>Return :</b> {selectedObj.returnPolicy}</p>
  </div>
</div>
<div className='dark:bg-gray-800 dark:border-gray-700'>
 <h3 className="mb-2 p-4 text-xl font-bold  text-gray-900 dark:text-white">Reviews</h3>
 <div className='grid grid-cols-12 gap-2  dark:bg-gray-800 dark:border-gray-700 '>
  {selectedObj?.reviews?.map((ele)=>{
    return <div className='col-span-4 p-4 rounded-lg ' key={ele.id}>
    <h4 className="mb-2 text-sm font-bold  text-gray-900 dark:text-white">{ele.reviewerName}</h4>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.reviewerEmail}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.rating}
</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.comment}</p>
    </div>
  })}
 </div>
  </div>
</div>
      </Modal>


<div className='grid grid-cols-12 gap-2 mx-3'>
      {
        products.map((ele) => {
       return <Card key={ele.id} className='relative flex flex-col justify-between lg:col-span-3
        md:col-span-4 sm:col-span-6 col-span-12 description'>
       <LuEye className='absolute right-3' onClick={()=>showModal(ele)} size={25} />
       <CardMedia
         component="img"
         alt="green iguana"
         height="140"
         image={ele.thumbnail}
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {ele.title}
         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {ele.description}
         </Typography>
       </CardContent>
       <CardActions>
         <button onClick={()=>handleClick(ele)} className='bg-green-950 text-white py-2 px-4 rounded-md hover:bg-green-700' size="small">Wishlist</button>
         <button onClick={()=>handleAddToCart(ele)} className='bg-blue-900 text-white rounded-md py-2 px-4 hover:bg-blue-700' size="small">Add To Cart</button>
       </CardActions>
     </Card>
        })
      }
    </div>
</div>
    
  )
}

export default Home
