import { cn } from "@/lib/utils";

const CircularPattern = ({
  diameter = 80,
  className,
  justify = "start",
}: {
  diameter?: number;
  className?: React.HTMLAttributes<HTMLDivElement> | string;
  justify?: "start" | "center" | "end";
}) => {
  return (
    <div className={cn("hidden lg:flex w-full h-full", `justify-${justify}`)}>
      <div className={cn("absolute z-10", `w-${diameter} h-${diameter}`)}>
        <div className={cn("relative w-96 h-96 overflow-hidden rounded-full", className)}>
          <svg
            className="opacity-35"
            id="patternIdCircle"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="b"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(1) rotate(180)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="hsla(47, 100%, 96%, 1)" />
                <path
                  d="M12.47 0H0v12.47h12.47Zm0 0v12.47l9.18 9.18V0ZM0 21.65v9.18h30.83l-9.18-9.18zm21.65 0-9.18-9.18H0v9.18zm0 0 9.18 9.18V0h-9.18ZM30.83 0v30.83L40 40V0ZM0 30.83V40h40l-9.17-9.17z"
                  strokeWidth="1"
                  stroke="hsla(39, 14%, 40%, 1)"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CircularPattern;
