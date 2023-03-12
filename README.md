# faq-vuepress

1. 安装全部依赖包。

```shell
npm i --legacy-peer-deps
```

2. 安装 Vuepress 2.0依赖包，手动安装。

```shell
npm install -D vuepress@next
```

3. 升级依赖以确保你的项目只包含单个版本的相关包。(可能导致问题)

```shell
npx vp-update
```

4. pinia 的安装比较特殊，由于vuepress内部依赖包的问题，导致会被判断不兼容。所以需要使用 `--force` 指令强制安装。

```shell
npm install pinia --force
```

5. 一些可能解决报错的方法

```shell
npm update --legacy-peer-deps
```
