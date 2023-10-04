'use client'

import ActionBar from "@/app/components/ui/ActionBar";
import UMBradCrumb from "@/app/components/ui/UMBredCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageFacultyPage = () => {
    const {role} = getUserInfo() as any;
  return (
    <div>
        <UMBradCrumb items={
        [
          {
            label:`${role}`,
            link:`/${role}`
          },
        ]
      }/>
      <h1> </h1>
     
        <ActionBar title="Faculty List">
        <Link href='/super_admin/manage-faculty/create'>
        <Button type="primary">Create Faculty</Button>
        </Link>
        </ActionBar>
    </div>
  );
};
export default ManageFacultyPage;
