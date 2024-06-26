export const THEME_TYPOGRAPHY = {
  HEAD_01_REGULAR: 'head-01-regular',
  HEAD_01_MEDIUM: 'head-01-medium',
  HEAD_01_BOLD: 'head-01-bold',
  HEAD_02_REGULAR: 'head-02-regular',
  HEAD_02_MEDIUM: 'head-02-medium',
  HEAD_02_BOLD: 'head-02-bold',
  SUBHEAD_01_REGULAR: 'subhead-01-regular',
  SUBHEAD_01_MEDIUM: 'subhead-01-medium',
  SUBHEAD_01_BOLD: 'subhead-01-bold',
  SUBHEAD_02_REGULAR: 'subhead-02-regular',
  SUBHEAD_02_MEDIUM: 'subhead-02-medium',
  SUBHEAD_02_BOLD: 'subhead-02-bold',
  BODY_01_REGULAR: 'body-01-regular',
  BODY_01_MEDIUM: 'body-01-medium',
  BODY_01_BOLD: 'body-01-bold',
  BODY_02_REGULAR: 'body-02-regular',
  BODY_02_MEDIUM: 'body-02-medium',
  BODY_02_BOLD: 'body-02-bold',
  BODY_03_REGULAR: 'body-03-regular',
  BODY_03_MEDIUM: 'body-03-medium',
  BODY_03_BOLD: 'body-03-bold',
};

export const TypographyOptions = Object.keys(THEME_TYPOGRAPHY).map(
  (color) => THEME_TYPOGRAPHY[color as keyof typeof THEME_TYPOGRAPHY],
);
