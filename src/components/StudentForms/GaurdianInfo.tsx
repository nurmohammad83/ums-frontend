import { Col, Row } from "antd"
import FormInput from "../Forms/FormInput"

const GuardianInfo = () => {
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
      Guardian Information
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
          name="student.guardian.fatherName"
          label="Father Name"
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
          name="student.guardian.fatherOccupation"
          label="Father Occupation"
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
          name="student.guardian.fatherContactNo"
          label="Father Contact No"
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
          name="student.guardian.motherName"
          label="Mother Name"
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
          name="student.guardian.motherOccupation"
          label="Mother Occupation"
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
          name="student.guardian.motherContactNo"
          label="Mother Contact No"
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
          name="student.guardian.address"
          label="Address"
        />
      </Col>
  
    </Row>
  </div>
  )
}
export default GuardianInfo