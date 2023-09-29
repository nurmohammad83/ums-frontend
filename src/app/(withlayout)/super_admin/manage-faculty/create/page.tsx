'use client'
import UMBradCrumb from "@/app/components/ui/UMBredCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateFacultyPage = () => {
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
            label: `manage-faculty`,
            link: `/${role}/manage-faculty`,
          },
        ]}
      />
      <h1>create pagd</h1>
    </div>
  );
};
export default CreateFacultyPage;
