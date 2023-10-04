'use client'

import ActionBar from "@/app/components/ui/ActionBar";
import UMBradCrumb from "@/app/components/ui/UMBredCrumb";
import UMTable from "@/app/components/ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";

const ManageDepartment = () => {
    const query:Record<string,any> ={}
    const [size,setSize]= useState(10)
    const [page,setPage]= useState(1)
    const {data,isLoading} = useDepartmentsQuery({...query})
    const {departments,meta} = data
    const columns =[
      {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          sorter:(a:any,b:any)=> b.age - a.age
        },
        {
          title: 'Action',
          render:function(data:any){
              return (
                  <Button onClick={()=>console.log(data)} type="primary" danger>X</Button>
              )
          }
        },
  ]
  const tableData = [
      {
        key: '1',
        name: 'Mike',
        age: 32,
      },
      {
        key: '2',
        name: 'John',
        age: 42,
      },
];
    

const onPaginationChange =(page:number,pageSize:number)=>{
  console.log(page,pageSize)
}
const onTableChange=(pagination:any,filter:any,sorter:any)=>{
  const {order,field} = sorter;
  console.log(order,field)
}

  return (
    <div>
        <UMBradCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          }
        ]}
      />    
        <ActionBar title="Department list"><Link href='/super_admin/department/create'>
        <Button type="primary">Create Department</Button>
        </Link></ActionBar>

        <UMTable
         loading={isLoading} 
         columns={columns} 
         dataSource={tableData}
         pageSize={5}
         totalPages={10}
         showSizeChanger={true}
         onPaginationChange={onPaginationChange}
         onTableChange={onTableChange}
         showPagination={true}
        />
    </div>
  );
};
export default ManageDepartment;
