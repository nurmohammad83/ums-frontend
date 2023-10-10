import { Col, Row } from "antd"
import FormInput from "../Forms/FormInput"

const LocalGuardianInfo = () => {
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
          name="student.localGuardian.name"
          label="Local Guardian Name"
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
          name="student.localGuardian.occupation"
          label="Local Guardian Occupation"
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
          name="student.localGuardian.contactNo"
          label="local Guardian Contact No"
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
          name="student.localGuardian.address"
          label="Local Guardian Address"
        />
      </Col>
    </Row>
  </div>
  )
}
export default LocalGuardianInfo