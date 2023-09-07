'use client';

import Image from 'next/image';

import { ImageFooter } from '@/config/types/iamgeFooter';

import { Button, Form } from 'antd';

interface ModalProps {
  body?: React.ReactElement;
  image?: string;
  title?: React.ReactElement;
  actionLabel: string;
  footer?: React.ReactElement;
  secondaryActionLabel?: string;
  locationImage?: string;
  imageFooter?: ImageFooter[];
  otherLabel?: string;
}
const Modal = ({
  body,
  image,
  title,
  actionLabel,
  footer,
  secondaryActionLabel,
  locationImage,
  imageFooter,
  otherLabel,
}: ModalProps) => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div
      className={`flex h-[100vh] font-normal ${locationImage ? 'flex-row-reverse' : ''}`}
    >
      <div className="md:relative md:block w-[50%] hidden">
        {image && <Image src={image} alt="image login" fill className="overflow-auto" />}
      </div>
      <Form
        name="normal_login"
        className={`login-form lg:px-[77px] px-6 md:w-[50%] lg:w-[50%] w-full overflow-y-auto ${
          actionLabel == 'Register' ? 'md:pt-[80px] pt-7' : 'md:pt-[120px] pt-6'
        }`}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <section className="flex flex-col gap-3">
          {actionLabel == 'Register' ||
            (actionLabel == 'Change Password' && (
              <span className="text-2xl font-normal text-[#858D92]">Start For Free</span>
            ))}

          <div className="text-6xl font-bold">{actionLabel}</div>
          {title}
        </section>
        {/* BODY  */}
        {body}

        <Form.Item>
          <Button
            htmlType="submit"
            className="login-form-button bg-primary mt-14 w-full rounded-full flex p-8 items-center hover:text-red-400 justify-center text-white font-bold text-2xl"
          >
            {actionLabel}
          </Button>
        </Form.Item>
        {/* Footer */}
        {otherLabel && (
          <>
            <div className="before:content-[''] before:mr-2 after:content-[''] after:ml-2 before:w-[20%] before:h-[1px] before:block flex after:h-[1px]  after:w-[20%] after:block before:bg-[#373535] after:bg-[#373535] items-center justify-center ">
              <span className="m-6 text-xl ">{otherLabel}</span>
            </div>
            <div className="flex gap-14 items-center justify-center mb-4">
              {imageFooter?.map((item, idx) => (
                <Image
                  key={idx}
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  className="hover:cursor-pointer"
                />
              ))}
            </div>
          </>
        )}
      </Form>
    </div>
  );
};

export default Modal;
