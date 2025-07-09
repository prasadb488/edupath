import React, { useState, useRef, useEffect } from "react";

type Props = {
  name: string;
  label: string;
  options: string[];
  placeholder?: string;
};

const AutoCompleteDropdown: React.FC<Props> = ({
  name,
  label,
  options,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [customValue, setCustomValue] = useState(""); // for 'Other' option
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = options.filter((opt) =>
      opt.toLowerCase().includes(value.toLowerCase())
    );
    if (!filtered.includes("Other")) {
      filtered.push("Other");
    }
    setFilteredOptions(filtered);
    setShowDropdown(true);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setInputValue(value);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <label className="text-[#0e121b] text-base font-medium leading-normal pb-2">
        {label} <span className="text-[#506695] text-xs font-normal">*</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={inputValue}
        onChange={handleInputChange}
        onClick={() => setShowDropdown(true)}
      />
      {showDropdown && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 shadow max-h-60 overflow-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {selected && selected !== "Other" && (
        <input type="hidden" name={name} value={selected} />
      )}

      {/* Custom input for 'Other' option */}
      {selected === "Other" && (
        <div className="mt-2">
          <label className="block text-sm text-gray-600 mb-1">
            Enter Custom {label}{" "}
            <span className="text-[#506695] text-xs font-normal">*</span>
          </label>
          <input
            type="text"
            name={name}
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder={`Enter your ${label.toLowerCase()}`}
          />
        </div>
      )}
    </div>
  );
};

export default AutoCompleteDropdown;
