'use client'

import UMBradCrumb from "@/app/components/ui/UMBredCrumb"
import { getUserInfo } from "@/services/auth.service";

const CreateStudentPage = () => {
    const {role} = getUserInfo() as any;
  return (
    <div> <UMBradCrumb items={
        [
          {
            label:`${role}`,
            link:`/${role}`
          },
          {
            label:`manage-student`,
            link:`/${role}/manage-student`
          },
        ]
      }/><h1>CreateStudentPage</h1></div>
  )
}
export default CreateStudentPage