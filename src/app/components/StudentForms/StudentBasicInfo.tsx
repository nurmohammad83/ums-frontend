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
            marginBottom: "10px 0",
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
              span={12}
            >
             <FormDatePicker label='Date Of Birth' name="admin.dateOfBirth" size="large" />
            </Col>
            <Col
              style={{ marginBottom: "10px" }}
              className="gutter-row"
              span={12}
            >
              <FormSelectFiled size="large"   name="admin.bloodGroup" options={bloodOptions} placeholder="Select" label="Blood Group"/>
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
  )
}
export default StudentBasicInfo