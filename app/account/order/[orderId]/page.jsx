
'use client'
import { useParams, useRouter } from "next/navigation";

function OrderdetailsSpecific() {
  const router = useParams()
  console.log(router.orderId) 
  return (
    <div>
      <h2>Specific order</h2>
    </div>
  )
}

export default OrderdetailsSpecific;



app 
   dashboard 
        pages
   pages.jsx 


// [localhost:3000] => app=> pages.jsx

// [localhost:3000/dashboard] => app/dashboard/page.jsx

 // [localhost:3000/account/order] =>  app/account/order/page.jsx





