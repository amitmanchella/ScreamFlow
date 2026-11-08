// Five rounded bars of a voice waveform: (center x, height) on a 64×64 grid.
const BARS: [number, number][] = [
  [14, 14],
  [23, 30],
  [32, 44],
  [41, 26],
  [50, 16],
];
const BAR_WIDTH = 6.5;

/** ScreamFlow's waveform mark, drawn in the current text color. */
const ScreamFlowMark = ({
  width = 24,
  height = 24,
  className,
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 64 64"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {BARS.map(([x, h]) => (
      <rect
        key={x}
        x={x - BAR_WIDTH / 2}
        y={32 - h / 2}
        width={BAR_WIDTH}
        height={h}
        rx={BAR_WIDTH / 2}
      />
    ))}
  </svg>
);

export default ScreamFlowMark;
