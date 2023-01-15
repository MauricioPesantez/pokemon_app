import { IDropdownOption } from "@/types";
import { getBg } from "@/utils/general";
import Image from "next/image";
import { useEffect, useState } from "react";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

interface ISelectProps {
  placeHolder: string;
  options: IDropdownOption[];
  value?: string;
  onChange: (type: string) => void;
}

export default function Select({ placeHolder, options, onChange, value }: ISelectProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [seletedValue, setSelectedValue] = useState<
    IDropdownOption | undefined
  >();

  useEffect(() => {
    const typeSelected = value ? getBg(value) : undefined;
    if (typeSelected && value) {
      setSelectedValue({label: value, value, icon: typeSelected.icon});
    }
  }, [])

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e: any) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (seletedValue) {
      return <div style={{
        display: "flex",
      }}>
        <Image src={seletedValue.icon} alt={seletedValue.label} width={20} style={{marginRight: 5}} />
        {seletedValue.label}
      </div>
    }
    return placeHolder;
  };

  const onItemClick = (option: IDropdownOption) => {
    setSelectedValue(option);
    onChange(option.value)
  };

  const isSelected = (option: IDropdownOption) => {
    if (!seletedValue) {
      return false;
    }
    return seletedValue.value === option.value;
  };

  return (
    <div className="dropdown_container">
      <div onClick={handleInputClick} className="dropdown_input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown_menu">
          {options.map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown_item ${isSelected(option) && "selected"}`}
            >
              {option.icon && (
                <Image src={option.icon} alt={option.label} width={20} style={{marginRight: 5}} />
              )}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
