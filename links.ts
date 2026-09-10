/**
 * 단축 URL 목록.
 *
 * key   = 단축 경로 (도메인 뒤에 붙는 주소)
 * value = 실제로 이동할 주소
 *
 * 예를 들어 'ai' 를 등록하면 https://<배포도메인>/ai 로 접속했을 때
 * 아래에 적힌 주소로 이동합니다.
 *
 * 링크를 추가하거나 바꾸려면 이 파일만 수정하면 됩니다.
 */
export const shortLinks: Record<string, string> = {
  ai: 'https://wholesale-pick-272.notion.site/AI-2026-2-3d68e53a50db810e94e0ee0b3b62ea1b',
}
