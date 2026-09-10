import type { NextConfig } from "next";
import { shortLinks } from "./links";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  // links.ts 에 등록된 단축 경로를 리디렉트로 변환한다.
  // permanent: false(307)를 쓰는 이유는, 나중에 링크 대상이 바뀌어도
  // 브라우저에 캐시된 옛 주소로 계속 이동하지 않게 하기 위함이다.
  async redirects() {
    return Object.entries(shortLinks).map(([slug, destination]) => ({
      source: `/${slug}`,
      destination,
      permanent: false,
    }));
  },
};

export default nextConfig;
