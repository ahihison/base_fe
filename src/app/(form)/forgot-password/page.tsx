'use client';

import Modal from '@/components/modals/Modal';

import { Form, Input } from 'antd';

const ForgotPassword = () => {
  const bodyContent = (
    <>
      <Form.Item
        name="email"
        className="group mt-12"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input
          prefix={
            <div className="absolute left-6 top-2 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1] ">
              Email
            </div>
          }
          className="pt-7 px-5 text-[16px] "
          placeholder="Email@gmail.com"
          size="large"
        />
      </Form.Item>
      <div className="flex gap-x-7">
        <Form.Item
          name="newpassword"
          className="mt-2 leading-6 group text-[#6A6A6A] w-[47%]"
          rules={[
            { min: 6, message: 'Username must be minimum 6 characters.' },
            { required: true, message: 'Please input your Password!' },
          ]}
        >
          <Input.Password
            prefix={
              <div className="absolute left-6  top-2 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1] ">
                New password
              </div>
            }
            className="text-[16px] leading-6 pt-7 px-5  font-medium mr-7"
            size="large"
            placeholder="New Password"
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          className="mt-2 w-[47%] leading-6 group text-[#6A6A6A]"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newpassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!'),
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={
              <div className="absolute left-6 top-2 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1] ">
                Confirm password
              </div>
            }
            className="text-[16px] leading-6 pt-7 px-5 font-medium "
            size="large"
            placeholder="Confirm password"
          />
        </Form.Item>
      </div>
    </>
  );
  return (
    <Modal
      body={bodyContent}
      actionLabel="Change Password"
      locationImage="true"
      image="/images/form2.png"
    />
  );
};

export default ForgotPassword;
