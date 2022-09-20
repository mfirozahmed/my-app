export const BOX_BORDER_STYLES = {
  none: "rounded-none",
  default: "rounded-md",
  rounded: "rounded-full",
};

export const BOX_SIZES = {
  sm: "p-2",
  md: "p-2.5",
  lg: "p-3",
  xl: "p-3.5",
};

export const QUESTION_SIZES = {
  sm: "text-md",
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
};

export const LABEL_SIZES = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};

export const DESCRIPTION_SIZES = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-md",
  xl: "text-lg",
};

export const CONTAINER_STYLES = {
  block: "flex flex-col gap-2",
  inline: "flex flex-row gap-2 flex-wrap",
};

export const BOX_ALIGNMENT_STYLES = {
  default: "flex flex-row items-start gap-2",
  right: "flex flex-row-reverse items-start gap-2",
  top: "flex flex-col items-center gap-2",
  bottom: "flex flex-col-reverse items-center gap-2",
};

export const BOX_COLORS = {
  default: 'text-default-500 checked:border-default-500 focus:border-default-300 focus:ring-offset-default-200/80',
  success: 'text-green-500 checked:border-green-500 focus:border-green-300 focus:ring-offset-green-200/80',
  danger: 'text-red-500 checked:border-red-500 focus:border-red-300 focus:ring-offset-red-200/80',
  warning: 'text-yellow-500 checked:border-yellow-500 focus:border-yellow-300 focus:ring-offset-yellow-200/80',
  info: 'text-blue-400 checked:border-blue-400 focus:border-blue-300 focus:ring-offset-blue-200/80',
  light: 'text-gray-500 checked:border-gray-500 focus:border-gray-300 focus:ring-offset-gray-200/80',
  dark: 'text-gray-800 checked:border-gray-800 focus:border-gray-500 focus:ring-offset-gray-400/80'
};

export const BUTTON_BOX_COLORS = {
  selected: {
    default: 'text-default-500 hover:text-default-500 border-default-300 focus:border-default-300 focus:ring-offset-default-200/80',
    success: 'text-green-500 hover:text-green-500 border-green-300 focus:border-green-300 focus:ring-offset-green-200/80',
    danger: 'text-red-500 hover:text-red-500 border-red-300 focus:border-red-300 focus:ring-offset-red-200/80',
    warning: 'text-yellow-500 hover:text-yellow-500 border-yellow-300 focus:border-yellow-300 focus:ring-offset-yellow-200/80',
    info: 'text-blue-400 hover:text-blue-400 border-blue-300 focus:border-blue-300 focus:ring-offset-blue-200/80',
    light: 'text-gray-500 hover:text-gray-500 border-gray-300 focus:border-gray-300 focus:ring-offset-gray-200/80',
    dark: 'text-gray-800 hover:text-gray-800 border-gray-500 focus:border-gray-500 focus:ring-offset-gray-400/80'
  },
  notSelected: {
    default: 'text-gray-500 hover:text-black border-gray-200 focus:ring-offset-default-200/80',
    success: 'text-gray-500 hover:text-black border-gray-200 focus:ring-offset-green-200/80',
    danger: 'text-gray-500 hover:text-black border-gray-200 focus:ring-offset-red-200/80',
    warning: 'text-gray-500 hover:text-black border-gray-200 focus:ring-offset-yellow-200/80',
    info: 'text-gray-500 hover:text-black border-gray-200 focus:ring-offset-blue-200/80',
    light: 'text-gray-500 hover:text-black border-gray-200 focus:ring-offset-gray-200/80',
    dark: 'text-gray-500 hover:text-black border-gray-200 focus:ring-offset-gray-400/80'
  },
};
