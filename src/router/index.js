import React, { lazy } from "react";
import MyIcon from "components/my_icon";
export const OutRouter = [
  {
    path: "/login",
    key: "login",
    component: lazy(() => import("pages/login/login")),
  },
];

export const InRouter = [
  {
    label: "首页",
    path: "/home",
    key: "100000",
    icon: <MyIcon type="icon-home" />,
    component: lazy(() => import("pages/home")),
  },
  {
    label: "编辑器",
    key: "200000",
    icon: <MyIcon type="icon-fuwenbenbianjiqi" />,
    children: [
      {
        label: "slate编辑器",
        path: "/editor/slate",
        key: "200001",
        component: lazy(() => import("pages/editor/slate")),
      },
      {
        label: "手机号码编辑器",
        path: "/editor/number",
        key: "200002",
        component: lazy(() => import("pages/editor/number")),
      },
    ],
  },
  {
    label: "视频播放器",
    key: "300000",
    icon: <MyIcon type="icon-video" />,
    children: [
      {
        label: "Ffmpeg视频解码",
        path: "/video/ffmpeg",
        key: "300001",
        component: lazy(() => import("pages/video/ffmpeg")),
      },
    ],
  },
  {
    label: "颜色选择器",
    key: "400000",
    icon: <MyIcon type="icon-yanseku" />,
    children: [
      {
        label: "颜色选择器一",
        path: "/color-pick/one",
        key: "400001",
        component: lazy(() => import("pages/color_pick/one/index.tsx")),
      },
      {
        label: "颜色选择器二",
        path: "/color-pick/two",
        key: "400002",
        component: lazy(() => import("pages/color_pick/two/index.tsx")),
      },
    ],
  },
];
