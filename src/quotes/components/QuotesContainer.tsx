import { Children, type CSSProperties, type ReactNode } from "react";
import { useButtonUp } from "../../hooks";
import { ArrowUp } from "../../icons/icons";

interface Props {
  children: ReactNode[] | ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const QuotesContainer = ({ children, style, className }: Props) => {
  const { showButton, scrollUp } = useButtonUp();

  return (
    <div className={className} style={style}>
      {Children.toArray(children)?.map((child, index) => (
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

      {showButton && (
        <button className="btn-up" onClick={scrollUp}>
          <ArrowUp />
        </button>
      )}
    </div>
  );
};
