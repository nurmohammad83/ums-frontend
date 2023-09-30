'use client'

import { Col, Row } from "antd"
import FormSelectFiled from "../Forms/FormSelectField"
import { acDepartmentOptions, academicSemesterOptions, departmentOptions, facultyOptions, genderOptions } from "@/constants/golbal"
import FormInput from "../Forms/FormInput"
import UploadImage from "../ui/UploadImage"

const StudentInfo = () => {
  return (
    <div
    style={{
      border: "1px solid #d9d9d9",
      borderRadius: "5px",
      padding: "15px",
      margin: "10px 0",
    }}
  >
    <p style={{ fontSize: "18px", marginBottom: "10px" }}>
      Admin Information
    </p>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col
        style={{ marginBottom: "10px" }}
        className="gutter-row"
        span={6}
      >
        <FormInput
          type="text"
          size="large"
          name="student.name.firstName"
          label="First Name"
        />
      </Col>
      <Col
        style={{ marginBottom: "10px" }}
        className="gutter-row"
        span={6}
      >
        <FormInput
          type="text"
          size="large"
          name="student.name.middleName"
          label="Middle Name"
        />
      </Col>
      <Col
        style={{ marginBottom: "10px" }}
        className="gutter-row"
        span={6}
      >
        <FormInput
          type="text"
          size="large"
          name="student.name.lastName"
          label="Last Name"
        />
      </Col>
      <Col
        style={{ marginBottom: "10px" }}
        className="gutter-row"
        span={6}
      >
        <FormInput  size="large" type="password" name="password" label="Password" />
      </Col>
      <Col
        style={{ marginBottom: "10px" }}
        className="gutter-row"
        span={8}
      >
        <FormSelectFiled size="large"   name="student.academicDepartment" options={acDepartmentOptions} placeholder="Select" label="Academic Department"/>
      </Col>
      <Col
        style={{ marginBottom: "10px" }}
        className="gutter-row"
        span={8}
      >
        <FormSelectFiled size="large"   name="student.academicFaculty" options={facultyOptions} placeholder="Select" label="Academic Faculty"/>
      </Col>
      <Col
        style={{ marginBottom: "10px" }}
        className="gutter-row"
        span={8}
      >
        <FormSelectFiled size="large"   name="student.academicSemester" options={academicSemesterOptions} placeholder="Select" label="Academic Semester"/>
      </Col>
      <Col
        style={{ marginBottom: "10px" }}
        className="gutter-row"
        span={8}
      >
        <FormSelectFiled size="large"   name="student.gender" options={genderOptions} placeholder="Select" label="Academic Semester"/>
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