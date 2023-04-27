export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
          {
            name: 'register-result',
            icon: 'smile',
            path: '/user/register-result',
            component: './User/register-result',
          },
          {
            name: 'register',
            icon: 'smile',
            path: '/user/register',
            component: './User/register',
          },
          {
            component: '404',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['TENANT_ADMIN'],
            routes: [
              {
                path: '/',
                redirect: '/dashboard',
                // component: './dashboard',
              },
              {
                name: 'Tài khoản',
                icon: 'user',
                path: '/account',
                component: './account',
              },

              {
                path: '/chat',
                name: 'Chat',
                path: '/chat',
                icon: 'message',
                routes: [
                  {
                    name: 'chat room',
                    path: '/chat/chat123',
                    component: './demo',
                  },
                ],
              },
              {
                name: 'Đăng ký dịch vụ, tiện ích',
                icon: 'message',
                path: '/registerServices',
                component: './registerServices',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
];
