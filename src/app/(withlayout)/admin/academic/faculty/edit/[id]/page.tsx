"use client";
import Form from "@/app/components/Forms/Form";
import FormInput from "@/app/components/Forms/FormInput";
import ActionBar from "@/app/components/ui/ActionBar";
import UMBradCrumb from "@/app/components/ui/UMBredCrumb";
import { useAcademicFacultyQuery, useUpdateAcademicFacultyMutation } from "@/redux/api/acadmic/facultyApi";
import { Button, Col, Row, message } from "antd";

interface IProps {
  params: any;
}

const EditAcademicFacultyPage = ({ params }: IProps) => {
  const { id } = params;
  const { data, isLoading } = useAcademicFacultyQuery(id);

  const [updateAcademicFaculty] = useUpdateAcademicFacultyMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating.....");
    try {
      await updateAcademicFaculty({id, body:values});
      message.success("Academic Faculty Update successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
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
            label: `academic-faculty`,
            link: `/admin/academic/faculty`,
          },
        ]}
      />
      <ActionBar title="Update Academic Faculty"></ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput size="large" name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};
export default EditAcademicFacultyPage;
