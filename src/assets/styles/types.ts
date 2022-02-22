import theme from './theme';

type Theme = typeof theme;

export type ColorsType = keyof Theme['colors'];