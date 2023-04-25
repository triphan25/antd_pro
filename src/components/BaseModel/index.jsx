import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { ModalForm, ProFormText } from '@ant-design/pro-components';

const BaseModel = forwardRef((props, ref) => {
  const [isOpen, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    showModel,
  }));

  const showModel = () => {
    setOpen(true);
  };

  return (
    <div>
      <ModalForm
        open={isOpen}
        onOpenChange={setOpen}
        title={props.title}
        submitter={props.submitter}
        onFinish={async (values) => {
          await waitTime(500);
          console.log(values.name);
          message.success(props.message);
          return true;
        }}
      >
        {props.children}
      </ModalForm>
    </div>
  );
});

export default BaseModel;
