
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


