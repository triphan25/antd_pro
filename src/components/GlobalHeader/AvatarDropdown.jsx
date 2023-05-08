import { EditOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import React from 'react';
import { history, connect } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

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

    // if (key === 'changePassword') {
    //   onOpenChangePassworfForm()

    //   return;
    // }

    history.push(`/account/${key}`);
    // history.push(`/user/${key}`);
  };

  onOpenChangePassworfForm = (callback) => {
    callback();
  };

  render() {
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      menu,
    } = this.props;

    <changePassword />;

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

        <Menu.Item key="logout">
          <LogoutOutlined />
          Đăng xuất
        </Menu.Item>
        <Menu.Item key="changePassword">
          <EditOutlined />
          Đổi mật khẩu
        </Menu.Item>
      </Menu>
    );
    return currentUser && currentUser.name ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          {/* <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" /> */}
          <UserOutlined className={styles.avatar} />
          <span className={`${styles.name} anticon`}>{currentUser.name}</span>
        </span>
      </HeaderDropdown>
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
}))(AvatarDropdown);
