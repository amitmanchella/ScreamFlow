import ScreamFlowMark from "./ScreamFlowMark";

// A product name, not translated.
const APP_NAME = "ScreamFlow";

/** The mark beside the product name. `width` is the whole wordmark's. */
const ScreamFlowWordmark = ({
  width = 120,
  className = "",
  showMark = true,
}: {
  width?: number;
  className?: string;
  /** Off where the app tile already sits beside it. */
  showMark?: boolean;
}) => (
  <span
    style={{ width, fontSize: width * 0.15 }}
    className={`flex items-center justify-center gap-[0.3em] font-bold tracking-tight text-text ${className}`}
  >
    {showMark && (
      <ScreamFlowMark
        width="1.4em"
        height="1.4em"
        className="text-logo-primary shrink-0"
      />
    )}
    {APP_NAME}
  </span>
);

export default ScreamFlowWordmark;
