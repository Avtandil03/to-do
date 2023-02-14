import { useState } from "react";

export default function MySwitch({onText = 'On', offText = 'Off', changed}) {
  const [enabled, setEnabled] = useState(false);

  return (
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
              changed();
            }}
            className="
              relative  w-10 h-5 rounded-full  flex items-center
              bg-transparent peer-checked:bg-sky-400 after:transition-all
              border border-gray-300 peer-checked:border-transparent
              after:content-[''] after:absolute after:left-[1px] peer-checked:after:translate-x-5
              after:w-3.5 hover:after:w-4 after:h-3.5 hover:after:h-4 
              after:bg-gray-300 peer-checked:after:bg-black after:rounded-full
              "
          ></div>
          <span className="ml-2 text-sm font-medium text-gray-900">
              { enabled ? onText : offText}
            </span>
        </label>
      </div>
  );
}