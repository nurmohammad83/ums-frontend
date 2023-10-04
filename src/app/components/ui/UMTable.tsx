import { Button, Table } from "antd"

const UMTable = () => {
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

const paginationConfig ={
    pageSize:5,
    total:10,
    pageSizeOptions:[5,10,20],
    showSizeChanger:true,
    onChange:onPaginationChange
 }

 const onTableChange=(pagination:any,filter:any,sorter:any)=>{
    const {order,field} = sorter;
    console.log(order,field)
 }

  return (
    <Table
     loading={false} 
     columns={columns} 
     dataSource={tableData}
     pagination={paginationConfig}
     onChange={onTableChange}
     />
  )
}
export default UMTable