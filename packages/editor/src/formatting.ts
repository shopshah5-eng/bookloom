export interface TextFormattingState {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strike: boolean;
  code: boolean;
}

export function getDefaultFormattingState(): TextFormattingState {
  return {
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    code: false,
  };
}
