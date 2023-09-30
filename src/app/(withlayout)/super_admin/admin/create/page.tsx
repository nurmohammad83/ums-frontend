"use client";
import Form from "@/app/components/Forms/Form";
import FormInput from "@/app/components/Forms/FormInput";
import UMBradCrumb from "@/app/components/ui/UMBredCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";

const CreateAdminPage = () => {
  const { role } = getUserInfo() as any;

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <UMBradCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `admin`,
            link: `/${role}/admin`,
          },
        ]}
      />
      <h1 style={{ padding: "5px 0" }}>Create Admin</h1>

      <Form submitHandler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "5px",
          }}
        >
          <p style={{ fontSize: "16px", marginBottom: "8px" }}>
            Admin Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
              <FormInput
                type="text"
                name="admin.name.firstName"
                label="First Name"
              />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
              <FormInput
                type="text"
                name="admin.name.middleName"
                label="Middle Name"
              />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
              <FormInput
                type="text"
                name="admin.name.lastName"
                label="Last Name"
              />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
              <FormInput type="password" name="password" label="Password" />
            </Col>
          </Row>
        </div>
        <Button type="primary" htmlType="submit">
            Create
        </Button>
      </Form>
    </div>
  );
};
export default CreateAdminPage;