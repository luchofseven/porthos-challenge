import { Children, type CSSProperties, type ReactNode } from "react";

interface Props {
  children: ReactNode[];
  className?: string;
  style?: CSSProperties;
}

export const QuotesContainer = ({ children, style, className }: Props) => {
  return (
    <div className={className} style={style}>
      {Children.toArray(children).map((child, index) => (
        <div
          key={index}
          style={{
            opacity: 0,
            animation: `fadeIn 0.5s ease-out forwards`,
            animationDelay: `${index * 50}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
