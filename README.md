# generated-packing-program
用于升级packing-generator工程时的测试工程

---

## 2018.12.1
- 升级内容： 适配packing@4.0.0  

- 主要特点： 升级使用babel 7.  

#### 本次改动点：  


1. 升级 `packing` 到最新4.0.0版本。   
> 变动文件：`package.json`.

2. `npx babel-upgrade --write --install`.   
> 变动文件： `.babelrc`, `package.json`.

3. 安装
  ```
  npm i --save-dev @babel/register
  npm i --save @babel/polyfill
  ```
  并升级 `react`, `react-dom`, `react-a11y`, `eslint` 等包版本。  
> 变动文件： `package.json`

4. 删除 `.babelrc` 中插件 `@babel/plugin-transform-runtime` 的配置参数 `polyfill`。  
修改 `.babelrc` 文件名为 `babel.config.js`，内容改为 `module.exports` js代码格式。
> 变动文件： `.babelrc`, `babel.config.js`

5. 在 `src/pages/index/entry.js` 中测试ES2018语法，正常输出。

6. 升级 `postcss-loader` 到最新版，  
安装 `postcss-preset-env`，  
卸载 `postcss-cssnext`。  
> 变动文件： `package.json`

7. 更新 `.postcssrc.js` 配置文件，删除postcss-cssnext配置项，新增postcss-preset-env配置项。
> 变动文件： `.postcssrc.js`

8. 在 `src/common/default.css` 中测试postcss-preset-env支持的css常用语法，正常显示。

9. `npm run build`, `npm run serve:dist` 编译通过。
