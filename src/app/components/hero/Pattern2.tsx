import React from "react";

const Pattern2 = () => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="absolute z-0 w-[400px] h-[400px] rotate-45 -translate-y-44">
        <div className="relative w-full h-full overflow-hidden">
          <svg className="opacity-25" id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="c"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(1) rotate(180)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="hsla(60 4.8% 95.9%)" />
                <path
                  d="M12.47 0H0v12.47h12.47Zm0 0v12.47l9.18 9.18V0ZM0 21.65v9.18h30.83l-9.18-9.18zm21.65 0-9.18-9.18H0v9.18zm0 0 9.18 9.18V0h-9.18ZM30.83 0v30.83L40 40V0ZM0 30.83V40h40l-9.17-9.17z"
                  strokeWidth="1"
                  stroke="hsla(39, 14%, 40%, 1)"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#c)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Pattern2;
