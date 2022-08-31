export const BOX_BORDER_STYLES = {
  none: "rounded-none",
  default: "rounded-md",
  rounded: "rounded-full",
};

export const BOX_SIZES = {
  sm: "px-2 py-2",
  md: "px-2.5 py-2.5",
  lg: "px-3 py-3",
  xl: "px-3.5 py-3.5",
};

export const QUESTION_SIZES = {
  sm: "font-medium text-md text-current",
  md: "font-medium text-lg text-current",
  lg: "font-medium text-xl text-current",
  xl: "font-medium text-2xl text-current",
};

export const LABEL_SIZES = {
  sm: "font-medium text-sm text-current",
  md: "font-medium text-md text-current",
  lg: "font-medium text-lg text-current",
  xl: "font-medium text-xl text-current",
};

export const DESCRIPTION_SIZES = {
  sm: "text-xs text-current",
  md: "text-sm text-current",
  lg: "text-md text-current",
  xl: "text-lg text-current",
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
    default: 'text-default-500 hover:text-default-500 border-default-500 focus:border-default-500 focus:ring-offset-default-200/80',
    success: 'text-green-500 hover:text-green-500 border-green-500 focus:border-green-500 focus:ring-offset-green-200/80',
    danger: 'text-red-500 hover:text-red-500 border-red-500 focus:border-red-500 focus:ring-offset-red-200/80',
    warning: 'text-yellow-500 hover:text-yellow-500 border-yellow-500 focus:border-yellow-500 focus:ring-offset-yellow-200/80',
    info: 'text-blue-500 hover:text-blue-500 border-blue-500 focus:border-blue-400 focus:ring-offset-blue-200/80',
    light: 'text-gray-500 hover:text-gray-500 border-gray-500 focus:border-gray-500 focus:ring-offset-gray-200/80',
    dark: 'text-gray-800 hover:text-gray-800 border-gray-500 focus:border-gray-800 focus:ring-offset-gray-400/80'
  },
  notSelected: {
    default: 'text-gray-500 hover:text-black border-gray-200 focus:border-default-500 focus:border-default-500 focus:ring-offset-default-200/80',
    success: 'text-gray-500 hover:text-black border-gray-200 focus:border-green-500 focus:border-green-500 focus:border-green-500 focus:ring-offset-green-200/80',
    danger: 'text-gray-500 hover:text-black border-gray-200 focus:border-red-500 focus:border-red-500 focus:ring-offset-red-200/80',
    warning: 'text-gray-500 hover:text-black border-gray-200 focus:border-yellow-500 focus:border-yellow-500 focus:ring-offset-yellow-200/80',
    info: 'text-gray-500 hover:text-black border-gray-200 focus:border-blue-400 focus:border-blue-500 focus:ring-offset-blue-200/80',
    light: 'text-gray-500 hover:text-black border-gray-200 focus:border-gray-500 focus:border-gray-500 focus:ring-offset-gray-200/80',
    dark: 'text-gray-500 hover:text-black border-gray-200 focus:border-gray-800 focus:border-gray-500 focus:ring-offset-gray-400/80'
  },
};

// export const BUTTON_BOX_SELECTED_TEXT_COLORS = {
//   default: 'text-default-500',
//   success: 'text-green-500',
//   danger: 'text-red-500',
//   warning: 'text-yellow-500',
//   info: 'text-blue-400',
//   light: 'text-gray-500',
//   dark: 'text-gray-800'
// };



export const DEEP_EQUAL = (x, y) => {
  if (x === y) {
    return true;
  } else if (
    typeof x == "object" &&
    x != null &&
    typeof y == "object" &&
    y != null
  ) {
    if (Object.keys(x).length !== Object.keys(y).length) return false;

    for (const prop in x) {
      if (Object.prototype.hasOwnProperty.call(y, prop)) {
        if (!DEEP_EQUAL(x[prop], y[prop])) return false;
      } else return false;
    }

    return true;
  } else return false;
};

export const dummyData = [
  {
    id: "1",
    name: "1",
    value: 1,
    label: "Default Checkbox 1",
    description: "Long Long Long Long Long Long Long Description",
    // disabled: true,
    hint: "Short hint",
    // children: (
    //   <div className="flex justify-center items-center p-2">
    //     <div className="p-4">An Image</div>
    //   </div>
    // ),
  },
  {
    id: "2",
    name: "2",
    value: 2,
    label: "Default Checkbox 2",
    description: "Short Description",
    disabled: false,
    hint: "Nothing",
  },
  {
    id: "3",
    // name: "3",
    value: 3,
    label: "Default Checkbox 3",
    // description: "Short Description",
    // disabled: false,
  },
  {
    id: "4",
    // name: "4",
    value: 4,
    label: "Default Checkbox 4",
    // description: "Short Description",
    disabled: false,
  },
  // {
  //   id: "5",
  //   // name: "5",
  //   value: 5,
  //   label: "",
  //   // description: "Short Description",
  //   // disabled: true,
  // },
  // {
  //   id: "6",
  //   // name: "6",
  //   value: 6,
  //   label: "",
  //   // description: "Short Description",
  //   disabled: true,
  // },
];
