"use client";
import { DeleteOutlined, EditOutlined ,RedoOutlined} from "@ant-design/icons";
import ActionBar from "@/components/ui/ActionBar";
import UMBradCrumb from "@/components/ui/UMBredCrumb";
import UMTable from "@/components/ui/UMTable";
import { useDeleteDepartmentMutation, useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import dayjs from 'dayjs';

const ManageDepartment = () => {
  const [deleteDepartment] = useDeleteDepartmentMutation()
  const query: Record<string, any> = {};
  const [size, setSize] = useState(2);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;
  const debouncedTerm = useDebounced({
    searchQuery:searchTerm,delay:600
  })

  if(!!debouncedTerm){
    query["searchTerm"] = debouncedTerm;
  }
  const { data, isLoading } = useDepartmentsQuery({ ...query });

  const reset = ()=>{
    setSortBy('')
    setSearchTerm('')
    setSortOrder('')
  }

  const deleteHandler = async (id:string) => {
    message.loading("Deleting.....");
    try {
      await deleteDepartment(id);
      message.success("Department Delete successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const confirm = () => {
    console.log("confirm",);
    message.success('Click on Yes');
  };
  
  const cancel = () => {
    
    message.error('Click on No');
  };
  
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render:function(data:any){
        return data && dayjs(data).format("MMM D, YYYY hh:mm A")
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={ `/super_admin/department/edit/${data?.id}`}>
            <Button
              style={{ margin: "0 5px" }}
              onClick={() => console.log(data)}
              type="primary"
            >
              <EditOutlined />
            </Button>
            </Link>
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  return (
    <div>
      <UMBradCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
        ]}
      />
      <ActionBar title="Department list">
        <Input
          type="text"
          placeholder="Search..."
          size="large"
          style={{
            width: "30%",
          }}
          onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
       <div>
       <Link href="/super_admin/department/create">
          <Button type="primary">Create</Button>
        </Link>
        {
          (!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button style={{margin:"0 5px"}} onClick={()=>reset()} type="primary"><RedoOutlined /></Button>
          )
        }
       </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={data?.departments}
        pageSize={size}
        totalPages={data?.meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};
export default ManageDepartment;
