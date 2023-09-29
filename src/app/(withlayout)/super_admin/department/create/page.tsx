"use client";

import UMBradCrumb from "@/app/components/ui/UMBredCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateDepartmentPage = () => {
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
            label: `department`,
            link: `/${role}/department`,
          },
        ]}
      />
      <h1>CreateDepartmentPage</h1>
    </div>
  );
};
export default CreateDepartmentPage;
