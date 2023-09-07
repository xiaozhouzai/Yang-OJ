import { RouteRecordRaw } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import AboutView from "@/views/AboutView.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/Admin/AdminView.vue";
import accessEnum from "@/access/accessEnum";
import ExampleView from "@/views/ExampleView.vue";
import AddQuestionView from "@/views/Question/AddQuestionView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/",
    name: "主页",
    component: HomeView,
  },
  {
    path: "/question/add",
    name: "创建题目",
    component: AddQuestionView,
  },
  {
    path: "/about",
    name: "关于",
    component: AboutView,
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthView,
    //
    meta: {
      // hideInMenu: true,
    },
  },
  {
    path: "/editor/example",
    name: "编辑器示例",
    component: ExampleView,
    //
    meta: {
      // hideInMenu: true,
      access: accessEnum.ADMIN,
    },
  },
  {
    path: "/admin",
    name: "管理页",
    component: AdminView,
    //
    meta: {
      // hideInMenu: true,
      access: accessEnum.ADMIN,
    },
  },
];
