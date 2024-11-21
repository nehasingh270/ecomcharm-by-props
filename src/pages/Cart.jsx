import React from 'react'

const Cart = (props) => {
  console.log(props.cartArr);

  let sum = 0;
  props.cartArr.forEach((ele)=>{
    sum += ele.price * ele.quantity;
  })
  console.log('Total Price:', sum);


const handleIncreament = (ele,index)=>{
  console.log(ele)
  console.log(index)

  let updatedObj = {...ele,quantity:ele.quantity+1,price:ele.price+(ele.price/ele.quantity)};
  console.log(updatedObj)
  
  let updatedCart = [...props.cartArr];
  updatedCart[index] = updatedObj
  console.log(updatedCart)
 // props.updateCart(updatedObj); 
  props.setcartArr(updatedCart)
 // let updateCart = props.cartArr.map((item)=> item.id === ele.id? updateObj : item);

}

const handledecreament = (ele,index)=>{
  console.log(ele)
  console.log(index)

  let updatedObj = {...ele,quantity:ele.quantity-1,price:ele.price-(ele.price/ele.quantity)};
  console.log(updatedObj)

  let updatedCart = [...props.cartArr];
  updatedCart[index] = updatedObj
  console.log(updatedCart)
 // props.updateCart(updatedObj); 
  props.setcartArr(updatedCart) 

}

const handleDelete = (ele,index)=>{
  console.log(ele)
  console.log(index)
  let filterArr = props.cartArr.filter((obj)=>obj.id != ele.id) 
  console.log(filterArr)
  props.setcartArr(filterArr) 
}


  return (
    <div>
      


      <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
        Price
        </th>
        <th scope="col" className="px-6 py-3">
        Quantity
        </th>
        <th scope="col" className="px-6 py-3">
        Quantity
        </th>
      </tr>
    </thead>
    <tbody>
      {
      props.cartArr.map((ele,index)=>{
      return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <img className='h-36 w-36 mx-auto' src={ele.thumbnail} alt="" />
      </th>
      <td className="px-6 py-4">
        {ele.title}
      </td>
      <td className="px-6 py-4">
        {ele.price.toFixed(2)}
      </td>
      <td className="px-6 py-4">
        <button onClick={()=>handleIncreament(ele,index)} className='bg-blue-900 text-white rounded-sm py-2 px-2'>+</button>{ele.quantity}<button onClick={()=>handledecreament(ele,index)}  className='bg-blue-900 text-white rounded-sm py-2 px-2'>-</button>
      </td>
      <td className="px-6 py-4">
        <button onClick={()=>handleDelete(ele)} className='bg-red-700 text-white rounded-sm py-2 px-2'>Delete</button>
      </td>
    </tr>





      }
      )}
     
    </tbody>
  </table>
</div>

<div></div>



    </div>
  )
}

export default Cart
