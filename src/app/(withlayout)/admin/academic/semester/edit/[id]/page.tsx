"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectFiled from "@/components/Forms/FormSelectField";
import FormYearPicker from "@/components/Forms/FormYearPicker";
import ActionBar from "@/components/ui/ActionBar";
import UMBradCrumb from "@/components/ui/UMBredCrumb";
import { monthsOptions } from "@/constants/golbal";
import { useAcademicSemesterQuery, useUpdateAcademicSemesterMutation } from "@/redux/api/acadmic/academicSemester";
import { Button, Col, Row, message } from "antd";

interface IProps {
  params: {id:string};
}

const EditDepartmentPage = ({ params:{id} }: IProps) => {
  const { data, isLoading } = useAcademicSemesterQuery(id);
  const semesterOptions = [
    {
      label: "Autumn",
      value: "Autumn",
    },
    {
      label: "Summer",
      value: "Summer",
    },
    {
      label: "Fall",
      value: "Fall",
    },
  ];
  const [updateAcademicSemester] = useUpdateAcademicSemesterMutation();

  const onSubmit = async (values: any) => {
    if (values?.title === "Autumn") values["code"] = "01";
    else if (values?.title === "Summer") values["code"] = "02";
    else values["code"] = "03";
    
    if(values?.year) values.year = parseInt(values.year)
    message.loading("Updating.....");
    try {
      await updateAcademicSemester({id, body:values});
      message.success("Department Update successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  console.log(data)
  const defaultValues = {
    title: data?.title || "",
    startMonth:data?.startMonth || "",
    endMonth:data?.endMonth || "",
    year:parseInt(data?.year)
  };
  return (
    <div>
      {" "}
      <UMBradCrumb
        items={[
          {
            label: `admin`,
            link: `/admin`,
          },
          {
            label: `academic-semester`,
            link: `/admin/academic/semester`,
          },
        ]}
      />
      <ActionBar title="Update Semester"></ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormSelectFiled
              size="large"
              name="title"
              options={semesterOptions}
              label="Title"
              placeholder="Select"
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormSelectFiled
              size="large"
              name="startMonth"
              options={monthsOptions}
              label="Start Month"
              placeholder="Select"
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormSelectFiled
              size="large"
              name="endMonth"
              options={monthsOptions}
              label="End  Month"
              placeholder="Select"
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormYearPicker name="year" label="Year" picker="year" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};
export default EditDepartmentPage;
