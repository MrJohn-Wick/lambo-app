'use client'

import { actionSingIn } from "@lambo/actions/auth";
import { Button, Checkbox, Form, Input } from "antd";
import { useFormState } from "react-dom";
import styles from './signinform.module.css';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const initialValues = {
  message: '',
}

export function SingInForm() {
  const [formState, formAction] = useFormState(actionSingIn, initialValues);

  return (
    <div className={styles.login}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={formAction}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div>
        {formState?.message}
      </div>
    </div>
  );
}
