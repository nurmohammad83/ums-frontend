"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectFiled from "@/components/Forms/FormSelectField";
import FormYearPicker from "@/components/Forms/FormYearPicker";
import UMBradCrumb from "@/components/ui/UMBredCrumb";
import { monthsOptions } from "@/constants/golbal";
import { useAddAcademicSemesterMutation } from "@/redux/api/acadmic/academicSemester";
import { useAddAcademicFacultyMutation } from "@/redux/api/acadmic/facultyApi";
import { Button, Col, Row, message } from "antd";

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

const CreateACSemesterPage = () => {
  const [addSemesterFaculty] = useAddAcademicSemesterMutation();

  const onSubmit = async (data: any) => {
    if (data?.title === "Autumn") data["code"] = "01";
    else if (data?.title === "Summer") data["code"] = "02";
    else data["code"] = "03";
    
    if(data?.year) data.year = parseInt(data.year)

    message.loading("Creating.....");
    try {
      const res = await addSemesterFaculty(data);
      if (!!res) {
        message.success("Academic Semester Created Successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMBradCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "academic-semester", link: `/${base}/academic/semester` },
        ]}
      />
      <h1>Create Academic Faculty</h1>
      <Form submitHandler={onSubmit}>
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
          Add
        </Button>
      </Form>
    </div>
  );
};

export default CreateACSemesterPage;
