'use client';

import Link from 'next/link';

import Modal from '@/components/modals/Modal';

import { Form, Input } from 'antd';

const LoginForm = () => {
  const title = (
    <div>
      <span className="text-2xl font-normal ">
        Don&apos;t have an account yet?
        <Link href="/register" className="text-primary hover:cursor-pointer lg:ml-2">
          Register
        </Link>
      </span>
    </div>
  );
  const bodyContent = (
    <>
      <Form.Item
        name="username"
        className="mt-12 w-full leading-6 group text-[#6A6A6A]"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={
            <div className="absolute left-6 top-2 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1] ">
              User name
            </div>
          }
          allowClear
          className="text-[16px] leading-6 pt-7 px-5 font-medium "
          size="large"
          placeholder="AAAAAAA"
        />
      </Form.Item>

      <Form.Item
        name="password"
        className="group"
        rules={[
          { min: 6, message: 'Username must be minimum 6 characters.' },
          { required: true, message: 'Please input your Password!' },
        ]}
      >
        <Input.Password
          prefix={
            <div className="absolute left-6 top-2 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1] ">
              Password
            </div>
          }
          className="pt-7 px-5 text-[16px] "
          placeholder="Password"
          size="large"
        />
      </Form.Item>
      <div className="relative w-full ">
        <Link
          className="login-form-forgot absolute right-0 hover:cursor-pointer z-10 text-[16px] font-normal text-text"
          href="/forgot-password"
        >
          Forgot password
        </Link>
      </div>
    </>
  );

  const listImage = [
    { src: '/logo_google.svg', width: 40, height: 40, alt: 'logo google' },
    { src: '/logos_facebook.svg', width: 40, height: 40, alt: 'logo google' },
    { src: '/logo_apple.svg', width: 40, height: 40, alt: 'logo google' },
  ];
  return (
    <div className="">
      <Modal
        title={title}
        body={bodyContent}
        imageFooter={listImage}
        actionLabel="Login"
        image="/images/login1.png"
        otherLabel="Login with"
      />
    </div>
  );
};

export default LoginForm;
