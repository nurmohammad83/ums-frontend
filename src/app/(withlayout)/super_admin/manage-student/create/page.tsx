"use client";
import StepperForm from "@/app/components/StepperForm/StepperForm";
import GuardianInfo from "@/app/components/StudentForms/GaurdianInfo";

import LocalGuardianInfo from "@/app/components/StudentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/app/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/app/components/StudentForms/StudentInfo";
import UMBradCrumb from "@/app/components/ui/UMBredCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateStudentPage = () => {
  const { role } = getUserInfo() as any;
  const steps = [
    {
      title: 'Student Information',
      content: <StudentInfo />,
    },
    {
      title: 'Basic Information',
      content: <StudentBasicInfo />,
    },
    {
      title: 'Guardian Information',
      content: <GuardianInfo />
    },
    {
      title: 'Local Guardian Information',
      content: <LocalGuardianInfo />
    },
  ];
  return (
    <div>
      {" "}
      <UMBradCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `manage-student`,
            link: `/${role}/manage-student`,
          },
        ]}
      />
      <h1>Create Student</h1>
      <StepperForm steps={steps}/>
    </div>
  );
};
export default CreateStudentPage;
