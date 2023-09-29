'use client'
import ActionBar from "@/app/components/ui/ActionBar";
import UMBradCrumb from "@/app/components/ui/UMBredCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";

import Link from "next/link";

const ManageAdmin = () => {
    const { role } = getUserInfo() as any;
  return (
    <div>
        <UMBradCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          }
        ]}
      />
        <ActionBar title="Admin List">
        <Link href='/super_admin/admin/create'>
        <Button type="primary">Create Student</Button>
        </Link>
        </ActionBar>
    </div>
  );
};
export default ManageAdmin;
