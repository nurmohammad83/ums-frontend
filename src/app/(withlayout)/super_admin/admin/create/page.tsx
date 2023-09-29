'use client'
import UMBradCrumb from "@/app/components/ui/UMBredCrumb"
import { getUserInfo } from "@/services/auth.service";

const CreateAdminPage = () => {
    const { role } = getUserInfo() as any;
  return (
    <div>
        <UMBradCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `admin`,
            link: `/${role}/admin`,
          },
        ]}
      />
      <h1>admin list</h1>
    </div>
  )
}
export default CreateAdminPage