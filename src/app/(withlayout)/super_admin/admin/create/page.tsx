"use client";
import Form from "@/app/components/Forms/Form";
import FormDatePicker from "@/app/components/Forms/FormDatePicker";
import FormInput from "@/app/components/Forms/FormInput";
import FormSelectFiled from "@/app/components/Forms/FormSelectField";
import FormTextArea from "@/app/components/Forms/FormTextArea";
import UMBradCrumb from "@/app/components/ui/UMBredCrumb";
import UploadImage from "@/app/components/ui/UploadImage";
import { bloodOptions, departmentOptions, genderOptions } from "@/constants/golbal";
import { admin } from "@/schemas/admin";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
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

      <Form submitHandler={onSubmit} resolver={yupResolver(admin)}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "5px",
          }}
        >
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
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
                size="large"
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
                size="large"
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
                size="large"
                name="admin.name.lastName"
                label="Last Name"
              />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
              <FormInput  size="large" type="password" name="password" label="Password" />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
              <FormSelectFiled size="large"   name="admin.gender" options={genderOptions} placeholder="Select" label="Gender"/>
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
              <FormSelectFiled size="large"   name="admin.managementDepartment" options={departmentOptions} placeholder="Select" label="Department"/>
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
             <UploadImage />
            </Col>
          </Row>
        </div>
        {/* Basic Information */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "5px",
          }}
        >
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            Basic Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
              <FormInput
                type="email"
                size="large"
                name="admin.email"
                label="Email Address"
              />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
              <FormInput
                type="Contact No."
                size="large"
                name="admin.contactNo"
                label="Contact Number"
              />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
              <FormInput
                type="text"
                size="large"
                name="admin.emergencyContactNo"
                label="Emergency Contact No"
              />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
             <FormDatePicker label='Date Of Bith' name="admin.dateOfBirth" size="large"/>
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
              <FormSelectFiled size="large"   name="admin.bloodGroup" options={bloodOptions} placeholder="Select" label="Blood Group"/>
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={8}
            >
             <FormInput
                type="text"
                size="large"
                name="admin.designation"
                label="Designation"
              />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={12}
            >
            <FormTextArea name="admin.presentAddress" label="Present Address" rows={4} placeholder=""/>
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={12}
            >
            <FormTextArea name="admin.permanentAddress" label="Permanent Address" rows={4} placeholder=""/>
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