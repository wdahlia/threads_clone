const commitMessageLists = [
  { value: "💻 Set", name: "💻 Set:\t초기 설정 세팅"},
  { value: "✨ Feat", name: "✨ Feat:\t새로운 기능 추가" },
  { value: "🐛 Fix", name: "🐛 Fix:\t버그 수정" },
  { value: "🔧 Modify", name: "🔧 Modify:\t파일/폴더 수정/삭제/위치변경" },
  {
    value: "🎨 Style",
    name: "🎨 Style:\t코드 포맷 변경, 세미 콜론 누락, 의미 없는 코드 수정",
  },
  {
    value: "💄 Design",
    name: "💄 Design:\tCSS등 사용자 UI/UX 디자인 변경",
  },
  {
    value: "🤖 Refactor",
    name: "🤖 Refactor:\t코드 리팩토링",
  },
  { value: "📝 Docs", name: "📝 Docs:\t문서 수정" },
  { value: "💡 Comment", name: "💡 Comment:\t필요한 주석 추가 및 변경" },
  {
    value: "✅ Test",
    name: "✅ Test:\t테스트 코드 추가",
  },
  {
    value: "🚚 Chore",
    name: "🚚 Chore:\t빌드 부분 혹은 패키지 매니저 수정사항",
  },
];

const commitizenConfig = {
  types: commitMessageLists,
  allowBreakingChanges: ["feat", "fix", "remove"],
  messages: {
    type: "커밋메시지의 타입을 설정해주세요:",
    subject: "커밋 제목을 50자 이내로 입력해주세요:\n",
    body: '본문을 작성해주세요: (optional). "|"로 개행할 수 있어요:\n',
    breaking: "BREAKING CHANGES으로 추가할 내용이 있나요? (optional):\n",
    footer:
      "이 변화로 인해 ISSUES CLOSED으로 추가할 내용이 있나요? (optional). E.g.: #31, #34:\n",
    confirmCommit: "현재까지 입력한 내용으로 커밋을 진행할까요? (y | n)",
  },
};

module.exports = commitizenConfig;
