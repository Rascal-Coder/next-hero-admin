import { faker } from "@faker-js/faker";

// 固定种子，保证 SSR 与客户端、多次渲染下 mock 数据一致
faker.seed(42);

export const MOCK_LOGO_URL = faker.image.url({ width: 64, height: 64 });
export const MOCK_AVATAR_URL = faker.image.avatar();
export const MOCK_USER_NAME = faker.person.fullName();
export const MOCK_USER_EMAIL = faker.internet.email();
