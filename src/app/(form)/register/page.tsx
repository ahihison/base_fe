'use client';

import Link from 'next/link';

import Modal from '@/components/modals/Modal';

import { Form, Input } from 'antd';

const RegisterForm = () => {
  const title = (
    <div>
      <span className="text-2xl font-normal ">
        Already have an account?
        <Link href="/login" className="text-primary hover:cursor-pointer lg:ml-2">
          Login
        </Link>
      </span>
    </div>
  );
  const bodyContent = (
    <>
      <div className="flex gap-7">
        <Form.Item
          name="firstname"
          className="mt-12 leading-6 group text-[#6A6A6A] w-[47%]"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={
              <div className="absolute left-6  top-2 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1] ">
                First name
              </div>
            }
            allowClear
            className="text-[16px] leading-6 pt-7 px-5  font-medium mr-7"
            size="large"
            placeholder="Nam"
          />
        </Form.Item>
        <Form.Item
          name="lastname"
          className="mt-12 w-[47%] leading-6 group text-[#6A6A6A]"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={
              <div className="absolute left-6 top-2 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1] ">
                Last name
              </div>
            }
            allowClear
            className="text-[16px] leading-6 pt-7 px-5 font-medium "
            size="large"
            placeholder="Nguyen"
          />
        </Form.Item>
      </div>
      <Form.Item
        name="usename"
        className="group"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={
            <div className="absolute left-6 top-2 text-[#A19E9E] text-sm font-medium group-focus-within:text-[#76C6D1] ">
              Username
            </div>
          }
          className="pt-7 px-5 text-[16px] "
          placeholder="Username"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="email"
        className="group"
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
        actionLabel="Register"
        image="/images/form2.png"
        otherLabel="Register with"
      />
    </div>
  );
};

export default RegisterForm;
