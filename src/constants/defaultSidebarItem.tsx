import {
  ProfileOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";
const defaultSidebarItem = (role: string) => {
  const defaultSidebarItem: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/profile`}>Profile</Link>,
      key: `/${role}/profile`,
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}`}>Account Profile</Link>,
          key: `/${role}/acout-profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      icon: <TableOutlined />,
      key: `${role}/manage-student`,
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      icon: <TableOutlined />,
      key: `${role}/manage-faculty`,
    },
  ];
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItem,
    ...commonAdminSidebarItems,
    {
      label: "Manage Academic",
      icon: <TableOutlined />,
      key: `manage-academic`,
      children: [
        {
          label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
          key: `/${role}/academic/faculty`,
        },
        {
          label: <Link href={`/${role}/academic/department`}>Departments</Link>,
          key: `/${role}/academic/department`,
        },
        {
          label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
          key: `/${role}/academic/semester`,
        },
      ],
    },
    {
      label: "Management",
      icon: <AppstoreOutlined />,
      key: "management",
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Buildings</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Rooms</Link>,
          key: `/${role}/room`,
        },
        {
          label: <Link href={`/${role}/course`}>Course</Link>,
          key: `/${role}/course`,
        },
        {
          label: (
            <Link href={`/${role}/semester-registration`}>
              Semester Registration
            </Link>
          ),
          key: `/${role}/semester-registration`,
        },
        {
          label: <Link href={`/${role}/offered-course`}>Offered Course</Link>,
          key: `/${role}/offered-course`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-section`}>
              Offered Course Section
            </Link>
          ),
          key: `/${role}/offered-course-section`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-schedule`}>
              Offered Course Section Schedule
            </Link>
          ),
          key: `/${role}/offered-course-schedule`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItem,
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      key: `/${role}/admin`,
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      key: `/${role}/user`,
      icon: <TableOutlined />,
    },
    {
      label: "Management",
      key: `management`,
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/permission`,
        },
      ],
    },
  ];

  const facultySidebarItems: MenuProps["items"] = [
    ...defaultSidebarItem,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      key: `/${role}/courses`,
      icon: <TableOutlined />,
    },
  ];
  const studentSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItem,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      key: `/${role}/courses`,
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/courses/schedule`}>Course Schedule</Link>,
      key: `/${role}/courses/schedule`,
      icon: <ScheduleOutlined />,
    },
    {
      label: <Link href={`/${role}/registration`}>Registration</Link>,
      key: `/${role}/registration`,
      icon: <ThunderboltOutlined />,
    },
    {
      label: <Link href={`/${role}/payment`}>Payment</Link>,
      key: `/${role}/payment`,
      icon: <CreditCardOutlined />,
    },
    {
      label: <Link href={`/${role}/academic-report`}>Academic Report</Link>,
      key: `/${role}/academic-report`,
      icon: <FileTextOutlined />,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
  else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  else{
    return defaultSidebarItem
  }
};
export default defaultSidebarItem;
