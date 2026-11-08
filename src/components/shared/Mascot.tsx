import React from "react";
import ScreamFlowMark from "../icons/ScreamFlowMark";

interface MascotProps {
  /** Height in px. */
  size: number;
  /** Wave once on arrival, or high-five (re-key it to play again). */
  animation?: "wave" | "slap" | null;
}

// The design's 357×400 image box, kept so sizes and the wave's pivot match it.
const BOX_ASPECT = 357 / 400;

/** ScreamFlow's app tile, optionally animated. */
export const Mascot: React.FC<MascotProps> = ({ size, animation = null }) => (
  <span
    style={{ width: size * BOX_ASPECT, height: size }}
    className={`relative block origin-[50%_90%] rotate-[-8deg] select-none ${animation === "wave" ? "animate-wave" : animation === "slap" ? "animate-slap" : ""}`}
  >
    <span className="absolute inset-x-0 top-[10%] aspect-square rounded-[22%] bg-linear-to-br from-[#7c3aed] to-[#f43f5e] flex items-center justify-center shadow-md">
      <ScreamFlowMark width="72%" height="72%" className="text-white" />
    </span>
  </span>
);
