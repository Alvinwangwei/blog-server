# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+


egg-demo
├── app
│   ├── controller (前端的请求会到这里来！)
│   │   └── home.ts
│   ├── model（数据库表结构抽象出来的模型）
│   │   └── User.ts
│   ├── service（controller 层不建议承载过多的业务，业务重时放在service层）
│   │   └── user.ts
│   └── router.ts （Url的相关映射）
├── config （框架的配置文件）
│   ├── config.default.ts
│   ├── config.local.ts
│   ├── config.prod.ts
│   └── plugin.ts
├── test （测试文件夹）
│   └── **/*.test.ts
├── typings （目录用于放置 d.ts 文件）
│   └── **/*.d.ts
├── README.md
├── package.json
├── tsconfig.json
└── tslint.json



