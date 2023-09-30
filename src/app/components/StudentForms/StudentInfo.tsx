'use client'

import { Col, Row } from "antd"
import FormSelectFiled from "../Forms/FormSelectField"
import { departmentOptions, genderOptions } from "@/constants/golbal"
import FormInput from "../Forms/FormInput"
import UploadImage from "../ui/UploadImage"

const StudentInfo = () => {
  return (
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
  )
}
export default StudentInfo