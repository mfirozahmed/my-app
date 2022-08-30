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
  default: 'border-2 checked:border-default-500 text-default-500 focus:outline-default-500 focus:ring-default-500',
  success: 'border-2 checked:border-green-500 text-green-500 focus:outline-green-500 focus:ring-green-500',
  danger: 'border-2 checked:border-red-500 text-red-500 focus:outline-red-500 focus:ring-red-500',
  warning: 'border-2 checked:border-yellow-500 text-yellow-500 focus:outline-yellow-500 focus:ring-yellow-500',
  info: 'border-2 checked:border-blue-400 text-blue-400 focus:outline-blue-400 focus:ring-blue-400',
  light: 'border-2 checked:border-gray-200 text-gray-500 focus:outline-gray-200 focus:ring-gray-200',
  dark: 'border-2 checked:border-gray-800 text-gray-800 focus:outline-gray-800 focus:ring-gray-800'
};

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
    disabled: false,
    hint: "Short hint",
    children: (
      <div className="flex justify-center items-center p-2">
        <div className="p-4">An Image</div>
      </div>
    ),
  },
  {
    id: "2",
    name: "2",
    value: 2,
    label: "Default Checkbox 2",
    description: "Short Description",
    disabled: true,
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
    disabled: true,
  },
  {
    id: "5",
    // name: "5",
    value: 5,
    label: "",
    // description: "Short Description",
    // disabled: true,
  },
  {
    id: "6",
    // name: "6",
    value: 6,
    label: "",
    // description: "Short Description",
    disabled: true,
  },
];
