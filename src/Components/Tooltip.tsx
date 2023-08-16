import { ReactNode, CSSProperties } from "react";
import "./Tooltip.css";

interface TooltipProps {
  children: ReactNode;
  tooltipText: string;
  position?: "top" | "bottom" | "left" | "right";
  bg?: string;
  textColor?: string;
  delay?: number;
  arrow?: boolean;
}

type TooltipStyles = CSSProperties & {
  "--tooltip-bg"?: string;
  "--tooltip-text-color"?: string;
  "--tooltip-delay"?: string;
};

export function Tooltip({
  children,
  tooltipText,
  position,
  bg,
  textColor,
  delay,
  arrow,
}: TooltipProps): JSX.Element {
  const tooltipStyles: TooltipStyles = {
    "--tooltip-bg": bg,
    "--tooltip-text-color": textColor,
    "--tooltip-delay": `${delay}ms`,
  };

  return (
    <div
      className="tooltip-wrapper"
      data-tooltipText={tooltipText}
      aria-label={tooltipText}
    >
      {children}
      <span
        className={`tooltip-text ${arrow ? "tooltip-arrow" : ""}`}
        data-tooltipPosition={position}
        style={tooltipStyles}
      >
        {tooltipText}
      </span>
    </div>
  );
}

Tooltip.defaultProps = {
  position: "bottom",
  bg: "black",
  textColor: "white",
  delay: 0,
  arrow: false,
};
