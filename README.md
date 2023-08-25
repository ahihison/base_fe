# School FE

## Libraries:

- NextJS
- MUI
- TailwindCSS
- Husky, Lint Stage
- Eslint, Prettier
  ...

## Folder structure:

```
src
├── app // sử dụng app router của NextJS 13
├── components // các components chung của dự án
│ ├── features // Các component của từng feature
│ └── layout // Các component của layout
│ └── shared // Các component sử dụng chung
├── config // các cấu hình chung của dự án
│ ├── api // Config chung axios vd: baseUrl, header,...
│ └── constants // Contants dùng chung vd: role, env, format,...
│ └── helpers // Các hàm tái sử dụng vd: toast, date,...
│ └── types // Type chung
├── hocs // HOCs dùng chung trong dự án: withAuth, withPermission,...
├── hooks // Hooks dùng chung trong dự án: usePageTitle, useDebounce,...
├── styles
├── theme // Config global theme nếu sử dụng các UI Lib
```

#### Run husky

```
npm run prepare
```
