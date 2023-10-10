'use client'

import UMBradCrumb from "@/components/ui/UMBredCrumb"
import { getUserInfo } from "@/services/auth.service"

const SuperAdminPage = () => {
  const user:any = getUserInfo()
  console.log(user)
  return (
    <div>
        <UMBradCrumb items={
        [
          {
            label:`${user.role}`,
            link:`/${user.role}`
          }
        ]
      }/>
    <h1>This is Super admin page</h1>
    </div>
  )
}
export default SuperAdminPage