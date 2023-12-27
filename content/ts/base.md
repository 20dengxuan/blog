---
title: TypeScript相关
create_time: 2023年12月15日 15:12
des: TypeScript基础语法
cover: https://assets-us-01.kc-usercontent.com:443/a99c6ff3-1e1d-000a-2573-c93dfb21cf6e/5900325b-5bee-44dc-828f-988078a63472/cover.jpg
---


### 1. 函数第二个参数类型是根据第一个参数类型

```ts
interface person {
  name: string;
  id: number;
}
function<T extends keyof person>fn(a: T, b: person[T]){}
```
