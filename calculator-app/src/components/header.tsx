import { useState } from "react";

export default function Header(): JSX.Element {
  const [stage, setStage] = useState<string>("2px");

  const switchTcheme = () => {
    switch (stage) {
      case "2px":
        setStage("23px");
        break;
      case "23px":
        setStage("47px");
        break;
      case "47px":
        setStage("2px");
        break;
    }
  };

  return (
    <header className="flex justify-between items-center w-full select-none">
      <span className="text-header-text">calc</span>
      <div className="text-header-text text-[12px] flex items-center">
        <span>THEME</span>
        <div
          data-before="1 2 3"
          className="relative ml-3 bg-toggle-bg rounded-lg w-9 cursor-pointer p-[2px]
          before:content-[attr(data-before)] before:absolute before:top-[-18px] before:tracking-[7px] before:w-full before:text-center before:text-[12px] before:left-[2.5px]"
          onClick={switchTcheme}
        >
          <span
            className="bg-red-bg rounded-[100%] w-2 h-2 flex m-[3px] absolute transition-all"
            style={{left: stage}}
          ></span>
          <span className="rounded-[100%] w-2 h-2 flex m-[3px]"></span>
        </div>
      </div>
    </header>
  );
}
