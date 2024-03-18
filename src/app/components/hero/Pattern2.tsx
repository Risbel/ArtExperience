import React from "react";

const Pattern2 = () => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="absolute z-0 w-96 h-96 rotate-45  -translate-y-44">
        <div className="relative w-full h-full overflow-hidden">
          <svg className="opacity-35" id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="80"
                height="80"
                patternTransform="scale(2) rotate(45)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="hsla(60, 100%, 100%, 1)" />
                <path
                  d="M50 50H30v10H20m30-10v10h10V50h10V30H60V20H50v10H30V20H20v10H10v20h10v10m60 20H50V70h10V60h10v10h10M20 60v10h10v10M0 70h10V60h10M50 0v10h10v10h10V10h10M0 10h10v10h10V10h10V0M0 40V0h40m40 40H0v40h40V0h40v80H40"
                  strokeLinecap="square"
                  strokeWidth="0.5"
                  stroke="hsla(47, 24%, 55%, 1)"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="800%" height="800%" transform="translate(-158,0)" fill="url(#a)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Pattern2;
