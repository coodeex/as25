import type { ComponentProps, PropsWithoutRef } from 'react';
import type { DefaultTheme, StyledComponent } from 'styled-components';

import { Theme } from './theme';

export type StyledTheme = DefaultTheme & Theme;

export type WithResponsiveProps<T extends Record<string, any>> = {
  [P in keyof T]:
    | T[P]
    | Partial<{ [breakpoint in keyof StyledTheme['media']]: T[P] } & { _: T[P] }>;
};

// Utilize transient props introduced in styled-components v5.1.0
// -> https://github.com/styled-components/styled-components/releases/tag/v5.1.0
export type WithTransientMediaProp<T> = T & {
  $media?: Partial<{ [breakpoint in keyof StyledTheme['media']]: Partial<T> }>;
};

type NativeDivProps = PropsWithoutRef<JSX.IntrinsicElements['div']>;
type StyledDivProps = ComponentProps<StyledComponent<'div', any>>;

export type BaseProps = NativeDivProps & StyledDivProps;
