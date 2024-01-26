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

<br>

#### #2 Issue
<hr>

*Issue* : 
<br>

- 해결되었던 stroke 미적용 이슈 다시 발생

<br>

*Solved* : 
<br>

- fill은 정상 작동하지만 stroke 적용 이슈 발생
- `global.css`에 svg light theme, dark theme color 지정해준 다음
- svg내부 stroke="currentColor" 설정 후
- consts 정의 해준 icon별 variants `stroke-` 형식 정의 `text-`로 변경
- 컬러 적용 완료, 다만 stroke-width는 className에 아무리 적용해줘도 반영되지 않는 이슈 존재해서
- path에 각각 `stroke-width="8"` 적용 시킴

<br>

#### #3 Issue
<hr>

*Issue* : tailwind.config.ts 커스텀 한 이후, 기존 tailwindcss theme 적용되지 않는 문제 존재

<br>

*Solved* : 
<br>

- tailwindcss 기존 theme 유지하면서, 추가하고 싶은 경우에는
```typescript
module.exports ={
  content : [
    // ...
  ],
  theme {
    extend : {
      // 기존 theme 유지하면서 커스텀 추가할 떄
    },
    // 외부에 정의하는 경우에는 기존 theme은 사라짐
  }
}
```
- theme/extend 내부에 정의 해주면 기존 `h-full` 등과 같은 theme이 잘 적용되는 것을 확인할 수 있음

<br>

#### #4 Issue
<hr>

*Issue* : next/Image Image 사용하여 overflow-x-scroll 적용시 캐러셀 이미지 사라지는 이슈

<br>

*Solved* : 
<br>

- Image 태그 사용해서 해결하는 방법 결국 찾지 못해서, img 태그로 변경
- img 부모 요소에 flex-shrink: 0; 사용하여 현재, 전체 레이아웃이 flex로 잡혀있어 기본값으로 해당 최상단 부모요소의 레이아웃 벗어나지 않게 설정되어있는 문제 해결
- width: 50%로 배율 사용하고 height: auto; 사용해서 비율 유지 하면서 스크롤 되게끔 설정 완료