import { Col, Row } from "antd"
import FormTextArea from "../Forms/FormTextArea"
import FormInput from "../Forms/FormInput"
import { bloodOptions } from "@/constants/golbal"
import FormSelectFiled from "../Forms/FormSelectField"
import FormDatePicker from "../Forms/FormDatePicker"

const StudentBasicInfo = () => {
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
            Basic Student Information
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
                name="student.email"
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
                name="student.contactNo"
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
                name="student.emergencyContactNo"
                label="Emergency Contact No"
              />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={12}
            >
             <FormDatePicker label='Date Of Birth' name="student.dateOfBirth" size="large" />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={12}
            >
              <FormSelectFiled size="large"   name="student.bloodGroup" options={bloodOptions} placeholder="Select" label="Blood Group"/>
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={12}
            >
            <FormTextArea name="student.presentAddress" label="Present Address" rows={4} placeholder=""/>
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={12}
            >
            <FormTextArea name="student.permanentAddress" label="Permanent Address" rows={4} placeholder=""/>
            </Col>
          </Row>
        </div>
  )
}
export default StudentBasicInfo