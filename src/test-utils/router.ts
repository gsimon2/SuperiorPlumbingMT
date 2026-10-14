import type { NextRouter } from "next/router";

export function createMockRouter(overrides: Partial<NextRouter> = {}): NextRouter {
   return {
      basePath: "",
      pathname: "/",
      route: "/",
      asPath: "/",
      query: {},
      isReady: true,
      isLocaleDomain: false,
      isFallback: false,
      isPreview: false,
      push: jest.fn().mockResolvedValue(true),
      replace: jest.fn().mockResolvedValue(true),
      reload: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
      ...overrides,
   };
}
