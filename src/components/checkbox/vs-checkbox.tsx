import React, { ChangeEvent, useEffect, useState } from "react";
import clsx from "clsx";

import VsButton from "../button";

import {
  BOX_ALIGNMENT_STYLES,
  BOX_BORDER_STYLES,
  BOX_SIZES,
  CONTAINER_STYLES,
  DESCRIPTION_SIZES,
  LABEL_SIZES,
  QUESTION_SIZES,
  BOX_COLORS,
  BUTTON_BOX_COLORS,
} from "./utils";
import { CheckBoxProps, DataType } from "./types";
import { HintIcon } from "./icons";


export const VsCheckbox = React.forwardRef<HTMLInputElement, CheckBoxProps>((props, ref) => {
  const {
    containerStyle = "block",
    size = "md",
    boxBorderStyle = "default",
    boxColor = "default",
    alignment = "default",
    pattern = "default",

    componentClass = "",
    questionLabelClass = "",
    containerClass = "",
    itemClass = "",
    inputClass = "",
    buttonClass = "",
    labelClass = "",
    hintClass = "",
    hintIconClass = "",
    hintTextClass = "",
    descriptionClass = "",

    question = "",
    questionHint = "",
    hintIcon,
    data,
    prevState,

    onChange,
  } = props;

  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [hintId, setHintId] = useState<number | string>(-1);

  useEffect(() => {
    if (prevState) {
      const tempSelecetedItem: string[] = [];
      prevState.forEach(item => {
        tempSelecetedItem.push(item.id);
      })

      setSelectedItems(tempSelecetedItem);
    }
    return;
  }, [prevState]);

  const componentClassName = clsx("flex flex-col gap-2", componentClass);
  const questionLabelClassName = clsx("flex flex-row items-center text-current font-medium", question ? "gap-x-2 p-2" : "", QUESTION_SIZES[size], questionLabelClass);
  const containerClassName = clsx("flex-wrap", CONTAINER_STYLES[containerStyle], containerClass);
  const itemClassName = clsx("p-2", BOX_ALIGNMENT_STYLES[alignment], itemClass);
  const inputClassName = clsx(
    "appearance-none border-2 border-gray-200 disabled:opacity-80 cursor-pointer disabled:cursor-not-allowed focus:outline-none focus:ring-transparent focus:ring-offset-4 transition duration-300 bg-no-repeat bg-center bg-contain",
    BOX_SIZES[size],
    BOX_BORDER_STYLES[boxBorderStyle],
    BOX_COLORS[boxColor],
    inputClass
  );
  const buttonClassName = clsx("hover:bg-transparent focus:ring focus:ring-transparent focus:ring-offset-4", buttonClass);
  const labelClassName = clsx("inline-block text-current font-medium", LABEL_SIZES[size], labelClass);
  const hintClassName = clsx("flex flex-row relative", hintClass);
  const hintIconClassName = clsx("text-current", hintIconClass);
  const hintTextClassName = clsx(
    "absolute left-5 w-40 p-2 border border-gray-500 bg-gray-300 rounded-md font-normal text-current text-sm",
    hintTextClass
  );
  const descriptionClassName = clsx("text-gray-400", descriptionClass, DESCRIPTION_SIZES[size]);

  const handleChange = (event: ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.id;
    const tempSelecetedItems = [...selectedItems];

    if (tempSelecetedItems.includes(id)) {
      tempSelecetedItems.splice(tempSelecetedItems.indexOf(id), 1);
    } else {
      tempSelecetedItems.push(id);
    }
    setSelectedItems(tempSelecetedItems);

    const selectedData: DataType[] = [];
    data.forEach(item => {
      if (tempSelecetedItems.includes(item.id)) {
        selectedData.push(item);
      }
    })
    onChange(selectedData);
  }

  const handleShowHint = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setHintId(event.currentTarget.id);
  };

  const handleHideHint = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setHintId(-1);
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
          {!!questionHint?.length && (
            <span className={hintIconClassName}>{hintIcon ? hintIcon : <HintIcon />}</span>
          )}
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
                  onChange={handleChange}
                  checked={selectedItems.includes(item.id)}
                  disabled={item?.disabled}
                />
                <div className={clsx("flex flex-col", item?.description?.length ? "gap-y-1" : "gap-y-0")}>
                  <div className={clsx("flex flex-row items-center", item?.hint?.length ? "gap-x-2" : "gap-x-0")}>
                    <label
                      className={clsx(
                        labelClassName,
                        item?.disabled ? "text-gray-400 cursor-not-allowed" : "cursor-pointer"
                      )}
                      htmlFor={item.id}
                    >
                      {item?.label}
                    </label>
                    {!!item?.hint?.length && (
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
                            <HintIcon />}
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
                id={item.id}
                btnSize={size}
                classNames={clsx(
                  selectedItems.includes(item.id) ? BUTTON_BOX_COLORS['selected'][boxColor] : BUTTON_BOX_COLORS['notSelected'][boxColor], buttonClassName)}
                disabled={item?.disabled}
                onClick={handleChange}
                btnBorderStyle={boxBorderStyle}
                btnType="outline"
                children={item?.children ?? item?.label}
              />
            )}
          </div>
        ))}
      </div>
    </div >
  );
});
