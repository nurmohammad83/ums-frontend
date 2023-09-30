import { Col, Row } from "antd"
import FormInput from "../Forms/FormInput"

const GuardianInfo = () => {
  return (
    <div
    style={{
      border: "1px solid #d9d9d9",
      borderRadius: "5px",
      padding: "15px",
      marginBottom: "10px 0",
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
          name="admin.fatherName"
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
          name="admin.fatherOccupation"
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
          name="admin.fatherContactNo"
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
          name="admin.motherName"
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
          name="admin.motherOccupation"
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
          name="admin.motherContactNo"
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
          name="admin.motherContactNo"
          label="Address"
        />
      </Col>
  
    </Row>
  </div>
  )
}
export default GuardianInfo