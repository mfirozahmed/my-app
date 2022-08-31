import React, { HTMLAttributes, useEffect, useState } from "react";
import clsx from "clsx";
import {
  BOX_ALIGNMENT_STYLES,
  BOX_BORDER_STYLES,
  BOX_SIZES,
  CONTAINER_STYLES,
  DESCRIPTION_SIZES,
  LABEL_SIZES,
  DEEP_EQUAL,
  dummyData,
  QUESTION_SIZES,
  BOX_COLORS,
  BUTTON_BOX_COLORS,
} from "./utils";
import VsButton from "../button";

export interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  containerStyle?: "block" | "inline";
  size?: "sm" | "md" | "lg" | "xl";
  boxBorderStyle?: "default" | "none" | "rounded";
  boxColor?: 'default' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
  alignment?: "default" | "right" | "top" | "bottom";
  pattern?: "default" | "button";

  componentClass?: string;
  questionLabelClass?: string;
  containerClass?: string;
  itemClass?: string;
  inputClass?: string;
  buttonClass?: string;
  labelClass?: string;
  hintClass?: string;
  hintIconClass?: string;
  hintTextClass?: string;
  descriptionClass?: string;

  question?: string;
  questionHint?: string;
  hintIcon?: React.ReactNode;
  data: DataType[];
  prevState: DataType[];

  getData: (data: DataType[]) => void;
}

interface DataType {
  id: string;
  name?: string;
  value: string | number;
  label?: string;
  description?: string;
  disabled?: boolean;
  hint?: string;
  children?: React.ReactNode;
}

export const VsCheckbox = React.forwardRef<HTMLInputElement, CheckBoxProps>((props, ref) => {
  const {
    containerStyle = "block",
    size = "md",
    boxBorderStyle = "default",
    boxColor = "default",
    alignment = "default",
    pattern = "default",

    componentClass,
    questionLabelClass,
    containerClass,
    itemClass,
    inputClass,
    buttonClass,
    labelClass,
    hintClass,
    hintIconClass,
    hintTextClass,
    descriptionClass,

    question,
    questionHint,
    hintIcon,
    data = dummyData,
    prevState,

    getData,
  } = props;

  const [state, setState] = useState<DataType[]>([]);
  const [hintId, setHintId] = useState<number | string>(-1);

  useEffect(() => {
    if (prevState) {
      setState(prevState);
    }
    return;
  }, [prevState]);

  const componentClassName = clsx("flex flex-col gap-2", componentClass);
  const questionLabelClassName = clsx("flex flex-row items-center text-black", question ? "gap-x-2 p-2" : "", QUESTION_SIZES[size], questionLabelClass);
  const containerClassName = clsx("flex-wrap", CONTAINER_STYLES[containerStyle], containerClass);
  const itemClassName = clsx("w-max p-2", BOX_ALIGNMENT_STYLES[alignment], itemClass);
  const inputClassName = clsx(
    "appearance-none border-2 border-gray-200 disabled:opacity-80 cursor-pointer disabled:cursor-not-allowed focus:outline-none focus:ring-transparent focus:ring-offset-4 transition duration-300 bg-no-repeat bg-center bg-contain",
    BOX_SIZES[size],
    BOX_BORDER_STYLES[boxBorderStyle],
    BOX_COLORS[boxColor],
    inputClass
  );
  const buttonClassName = clsx("hover:bg-transparent focus:outline-none focus:ring-transparent", buttonClass);
  const labelClassName = clsx("inline-block text-black", LABEL_SIZES[size], labelClass);
  const hintClassName = clsx("flex flex-row relative", hintClass);
  const hintIconClassName = clsx("text-black", hintIconClass);
  const hintTextClassName = clsx(
    "absolute left-5 w-40 p-2 border border-gray-500 bg-gray-300 rounded-md font-normal text-black text-sm",
    hintTextClass
  );
  const descriptionClassName = clsx("text-gray-400", descriptionClass, DESCRIPTION_SIZES[size]);

  const handleChange = (item: DataType) => {
    const newItem = JSON.parse(JSON.stringify(item));
    if (newItem.children) {
      delete newItem.children;
    }

    if (state?.length) {
      const items = [...state];
      const value = isChecked(newItem);
      if (value !== -1) {
        items.splice(value, 1);
        setState(items);
      } else {
        items.push(newItem);
        setState(items);
      }
      getData(items);
    } else {
      setState([newItem]);
      getData([newItem]);
    }
  };

  const handleShowHint = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setHintId(event.currentTarget.id);
  };

  const handleHideHint = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setHintId(-1);
  };

  const isChecked = (data: DataType) => {
    const newItem = JSON.parse(JSON.stringify(data));
    if (newItem.children) {
      delete newItem.children;
    }

    if (state?.length) {
      const items = [...state];
      for (const index in items) {
        const value = DEEP_EQUAL(newItem, items[index]);
        if (value) {
          return parseInt(index);
        }
      }
    }
    return -1;
  };

  return (
    <div className={componentClassName}>
      <div className={questionLabelClassName}>
        {question}
        <div
          id={question}
          className={hintClassName}
          onMouseOver={handleShowHint}
          onMouseOut={handleHideHint}
        >
          {!!questionHint &&
            <span className={hintIconClassName}>
              {hintIcon ? hintIcon :
                <svg
                  id="information_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 290 290"
                  fill="currentColor"
                >
                  <g>
                    <path
                      d="M140.744,0C63.138,0,0,63.138,0,140.744s63.138,140.744,140.744,140.744s140.744-63.138,140.744-140.744
                              S218.351,0,140.744,0z M140.744,263.488C73.063,263.488,18,208.426,18,140.744S73.063,18,140.744,18
                              s122.744,55.063,122.744,122.744S208.425,263.488,140.744,263.488z"
                    />
                    <path
                      d="M163.374,181.765l-16.824,9.849v-71.791c0-3.143-1.64-6.058-4.325-7.69c-2.686-1.632-6.027-1.747-8.818-0.299
                              l-23.981,12.436c-4.413,2.288-6.135,7.72-3.847,12.132c2.289,4.413,7.72,6.136,12.133,3.847l10.838-5.62v72.684
                              c0,3.225,1.726,6.203,4.523,7.808c1.387,0.795,2.932,1.192,4.477,1.192c1.572,0,3.143-0.411,4.546-1.232l30.371-17.778
                              c4.29-2.512,5.732-8.024,3.221-12.314S167.663,179.255,163.374,181.765z"
                    />
                    <circle cx="137.549" cy="86.612" r="12.435" />
                  </g>
                </svg>}
            </span>}
          {hintId === question && (
            <span className={hintTextClassName}>{questionHint}</span>
          )}
        </div>
      </div>
      <div className={containerClassName}>
        {data?.map((item: DataType) => (
          <div key={item.id} className={itemClassName}>
            {pattern === "default" ? (
              <>
                <input
                  ref={ref}
                  id={item.id}
                  name={item?.name}
                  value={item.value}
                  type="checkbox"
                  className={inputClassName}
                  onChange={() => handleChange(item)}
                  checked={isChecked(item) === -1 ? false : true}
                  disabled={item?.disabled}
                />
                <div className="flex flex-col gap-y-1">
                  <div className="flex flex-row gap-x-2 items-center">
                    <label
                      className={clsx(
                        labelClassName,
                        item?.disabled ? "text-gray-400 cursor-not-allowed" : "cursor-pointer"
                      )}
                      htmlFor={item.id}
                    >
                      {item?.label}
                    </label>
                    {!!item?.hint && (
                      <div
                        id={item.id}
                        className={hintClassName}
                        onMouseOver={handleShowHint}
                        onMouseOut={handleHideHint}
                      >
                        <span
                          className={clsx(
                            hintIconClassName,
                            item?.disabled ? "text-gray-400" : "opacity-50"
                          )}
                        >
                          {hintIcon ? hintIcon :
                            <svg
                              id="information_icon"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 290 290"
                              fill="currentColor"
                            >
                              <g>
                                <path
                                  d="M140.744,0C63.138,0,0,63.138,0,140.744s63.138,140.744,140.744,140.744s140.744-63.138,140.744-140.744
                              S218.351,0,140.744,0z M140.744,263.488C73.063,263.488,18,208.426,18,140.744S73.063,18,140.744,18
                              s122.744,55.063,122.744,122.744S208.425,263.488,140.744,263.488z"
                                />
                                <path
                                  d="M163.374,181.765l-16.824,9.849v-71.791c0-3.143-1.64-6.058-4.325-7.69c-2.686-1.632-6.027-1.747-8.818-0.299
                              l-23.981,12.436c-4.413,2.288-6.135,7.72-3.847,12.132c2.289,4.413,7.72,6.136,12.133,3.847l10.838-5.62v72.684
                              c0,3.225,1.726,6.203,4.523,7.808c1.387,0.795,2.932,1.192,4.477,1.192c1.572,0,3.143-0.411,4.546-1.232l30.371-17.778
                              c4.29-2.512,5.732-8.024,3.221-12.314S167.663,179.255,163.374,181.765z"
                                />
                                <circle cx="137.549" cy="86.612" r="12.435" />
                              </g>
                            </svg>}
                        </span>
                        {hintId === item.id && (
                          <span className={hintTextClassName}>{item?.hint}</span>
                        )}
                      </div>
                    )}
                  </div>
                  <p className={descriptionClassName}>{item?.description}</p>
                </div>
              </>
            ) : (
              <VsButton
                btnSize={size}
                // classNames={clsx(
                //   isChecked(item) === -1
                //     ? "bg-white text-black hover:bg-blue-200 border-black"
                //     : "bg-blue-500 text-white border-blue-500 hover:bg-blue-200 hover:text-black hover:border-black",
                //   item.disabled
                //     ? "text-gray-400 !border-gray-400 cursor-not-allowed"
                //     : "cursor-pointer",
                //   buttonClassName
                // )}
                classNames={clsx(
                  isChecked(item) !== -1 ? BUTTON_BOX_COLORS['selected'][boxColor] : BUTTON_BOX_COLORS['notSelected'][boxColor], buttonClassName)}
                disabled={item?.disabled}
                onClick={() => handleChange(item)}
                btnBorderStyle={boxBorderStyle}
                btnType="outline"
                // btnColor={boxColor}
                children={item?.children ?? item?.label}
              />
            )}
          </div>
        ))}
      </div>
    </div >
  );
});

// {
//   item.children ? item.children : item.label ?
//     <label
//       className={clsx(
//         labelClassName,
//         item?.disabled ? "text-gray-400 cursor-not-allowed" : "cursor-pointer"
//       )}
//       htmlFor={item.id}
//     >
//       {item?.label}
//     </label> : "(No Label)"
// }
