export const taskTypes = [
  {
    name: "task",
  },
  {
    name: "bug",
  },
];

export const tags = [
  {
    name: "初始",
  },
  {
    name: "中期",
  },
  {
    name: "结项",
  },
];

export const epics = [
  {
    name: "骑手物料表单开发",
    start: new Date("2020-12-10").getTime(),
    end: new Date("2021-01-11").getTime(),
  },
  {
    name: "骑手地图开发",
    start: new Date("2021-01-12").getTime(),
    end: new Date("2021-02-14").getTime(),
  },
  {
    name: "骑手地图开发",
    start: new Date("2021-01-12").getTime(),
    end: new Date("2021-02-14").getTime(),
  },
];

export const kanbans = [
  {
    name: "待完成",
  },
  {
    name: "开发中",
  },
  {
    name: "已完成",
  },
];

export const users = [
  {
    name: "高修文",
    organization: "外卖组",
  },
  {
    name: "熊天成",
    organization: "外卖组",
  },
  {
    name: "郑华",
    organization: "总部组",
  },
  {
    name: "王文静",
    organization: "中台组",
  },
];

export const projects = [
  {
    name: "快递管理",
    personId: 1,
    organization: "快递组",
    created: 1604989757139,
  },
];

export const tasks = [
  {
    name: "管理注册界面开发",
    tags: [1, 2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "请尽快完成",
  },
  {
    name: "管理登录界面开发",
    tags: [2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "请使用JWT完成",
  },
  {
    name: "单元测试",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "性能优化",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "权限管理界面开发",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "UI开发",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "自测",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
];
