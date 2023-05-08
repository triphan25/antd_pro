import { EditOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import React from 'react';
import { history, connect } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import ChangePassword from '@/pages/User/ChangePassword';

class AvatarDropdown extends React.Component {
  onMenuClick = (event) => {
    const { key } = event;
    const { dispatch } = this.props;

    if (key === 'logout') {
      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }

    if (key === 'changePassword') {
      dispatch({
        type: 'user/openChangePasswordModel',
      });

      return;
    }

    history.push(`/account/${key}`);
    // history.push(`/user/${key}`);
  };

  onCloseChangePasswordModel = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/closeChangePasswordModel',
    });
  };

  render() {
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      isChangePassword = false,
      menu,
    } = this.props;

    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {menu && (
          <Menu.Item key="center">
            <UserOutlined />
            user
          </Menu.Item>
        )}
        {menu && (
          <Menu.Item key="settings" on>
            <SettingOutlined />
            Setting
          </Menu.Item>
        )}
        {menu && <Menu.Divider />}

        <Menu.Item key="changePassword">
          <EditOutlined />
          Đổi mật khẩu
        </Menu.Item>

        <Menu.Item key="logout">
          <LogoutOutlined />
          Đăng xuất
        </Menu.Item>
      </Menu>
    );
    return currentUser && currentUser.name ? (
      <>
        <HeaderDropdown overlay={menuHeaderDropdown}>
          <span className={`${styles.action} ${styles.account}`}>
            {/* <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" /> */}
            <UserOutlined className={styles.avatar} />
            <span className={`${styles.name} anticon`}>{currentUser.name}</span>
          </span>
        </HeaderDropdown>

        <ChangePassword
          isOpen={isChangePassword}
          onCloseChangePasswordModel={this.onCloseChangePasswordModel}
        />
      </>
    ) : (
      <span className={`${styles.action} ${styles.account}`}>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </span>
    );
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
  isChangePassword: user.isChangePassword,
}))(AvatarDropdown);
