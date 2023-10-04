'use client'

import Form from "@/app/components/Forms/Form";
import FormInput from "@/app/components/Forms/FormInput"
import { Button, Col, Row } from "antd"

const ResetPassword = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div
    style={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
  >
    <Form submitHandler={onSubmit}>
      <h3 style={{ marginBottom: "10px" }}>Reset Password</h3>
      <div style={{ margin: "5px 0" }}>
        <FormInput name="oldPassword" label="Old password" type="password" />
      </div>
      <div style={{ margin: "5px 0" }}>
        <FormInput name="newPassword" label="New password" type="password" />
      </div>
      <Button type="primary" htmlType="submit">
        submit
      </Button>
    </Form>
  </div>
  )
}
export default ResetPassword