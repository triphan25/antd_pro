import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';
import {
  Select,
  InputNumber,
  DatePicker,
  Modal,
  Card,
  Form,
  Row,
  Col,
  Button,
  message,
  Input,
  Drawer,
  Space,
  Tag,
} from 'antd';
import NoticeIcon from './NoticeIconView';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <>
      <div className={className}>
        {/* <NoticeIcon/> */}
        <Avatar />
        {REACT_APP_ENV && (
          <span>
            <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
          </span>
        )}
        {/* <SelectLang className={styles.action} /> */}
      </div>
    </>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
