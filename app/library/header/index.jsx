
"use client"
import { useParams, usePathname } from "next/navigation";

function Header () {
  // location
  const params = useParams()
  const pathName = usePathname();
  console.log(pathName.toString() ,params)
  return (
    <h2>{pathName === '/account'? 'Account Header' : 'Dashboard'}</h2>
  )
}

export default Header;