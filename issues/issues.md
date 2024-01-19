# 문제 해결 로그

#### #0 Issue
<hr>

*Issue* : 
<br>
- **Next.js Route Groups** 사용 시, 맥북 내부에서 favicon.ico 적용 안되는 문제 존재

<br>

*Solved* : 
<br>
- 라우팅 그룹핑을 했기 떄문에, index.ts 파일을 각 라우트 그룹 내부에 넣게되고, 가장 app 폴더 상단에 위치하는 index.ts는 삭제한 후 적용이 안됨
- [Github Next.js Issues #59089](https://github.com/vercel/next.js/issues/59089) 참고하여 문제 해결 완료
- [favicon.io](https://favicon.io/) 홈페이지에서 다운 받은 폴더들 중 `apple_touch_icon.png` 파일을 `apple-icon.png`로 수정하여 app 상단에 위치시켰더니 정상적으로 출력 완료
- 맥북에서만 생기는 문제인지, 윈도우에서도 똑같이 적용되는지는 파악하지 못함
<br>
<br>

#### #1 Issue
<hr>

*Issue* : 
<br>
- svg파일 import시, fill, stroke, className 적용 문제

<br>

*Solved* : 
<br>
- next/image에서 import 해온 Image 사용해서 fill, stroke 적용되지 아니함 
- 구글링 후, svg path 내부에 fill="current" stroke="current" 설정해보았지만 적용 실패
- npm/yarn install로 @svgr/webpack 패키지 설치해보았으나 적용 실패
- [Github Next.js Issues #48177](https://github.com/vercel/next.js/issues/48177) 참고하여 문제 해결 완료
- 구글링 블로그글에는 패키지를 설치 후, next.config.ts 내부에 해당코드를 붙이면 된다고 했지만, compile 오류 발생
```typescript

 webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
```
- 해결법은 두가지가 존재하는데, 코드로 예시를 들면
1. import문 `import ThreadsLogo from "../../public/threads_logo.svg";`의 svg 뒤쪽에 `?svr`를 붙여주기
- `import ThreadsLogo from "../../public/threads_logo.svg?svr";`
2. `next.config.ts` 폴더 내부 webpack에서 issuer 부분 제거
- 이 경우는, `../../public/threads_logo.svg`로도 import 가능