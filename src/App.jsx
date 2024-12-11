import { Button, Form, Input } from 'antd';
import { authRegister, usernameExist } from './services/authService';

import { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);

  const handleRegister = async (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((item, index) => {
      formData.append(item, Object.values(values)[index]);
    });

    if (file != null) {
      formData.append('file', file);
    }

    await authRegister(formData);
  };

  return (
    <>
      <Form layout="vertical" style={{ width: '500px' }} onFinish={handleRegister}>
        <Form.Item
          name="fullName"
          label="fullName"
          rules={[{ required: true, message: 'fullName không được để trống' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="username"
          label="username"
          rules={[
            { required: true, message: 'username không được để trống' },
            { validator: (_, value) => usernameExist(value) },
          ]}
        >
          <Input />
        </Form.Item>
        <input type="file" name="" id="" onChange={(e) => setFile(e.target.files[0])} />
        <Form.Item
          name="password"
          label="password"
          rules={[{ required: true, message: 'password không được để trống' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default App;
