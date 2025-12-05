"use client";

import React from "react";

const SectionDivider = () => {
  return (
    <div className="relative w-full z-10" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      {/* Main horizontal groove line */}
      <div className="relative w-full flex items-center overflow-visible">
        {/* Left section - fades well before reaching dot */}
        <div className="flex-1 relative">
          <div
            className="w-full"
            style={{
              height: "2px",
              background:
                "linear-gradient(to right, transparent 0%, rgba(205, 205, 222, 0.2) 10%, #CDCDDE 30%, #CDCDDE 70%, rgba(205, 205, 222, 0.2) 90%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-0 left-[10%] w-[80%]"
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(205, 205, 222, 0.2) 0%, #CDCDDE 25%, #CDCDDE 75%, rgba(205, 205, 222, 0.2) 100%)",
              boxShadow:
                "0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
              filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
            }}
          />
        </div>

        {/* First node with vertical lines (top and bottom) */}
        <div className="relative flex flex-col items-center overflow-visible">
          {/* Top vertical groove - fades well before dot */}
          <div
            className="absolute bottom-full"
            style={{
              width: "2px",
              height: "120px",
              background:
                "linear-gradient(to top, transparent 0%, rgba(205, 205, 222, 0.2) 15%, #CDCDDE 35%, #CDCDDE 65%, rgba(205, 205, 222, 0.2) 85%, transparent 100%)",
            }}
          >
            <div
              className="absolute left-0 top-[15%] h-[70%]"
              style={{
                width: "1px",
                background:
                  "linear-gradient(to top, rgba(205, 205, 222, 0.2) 0%, #CDCDDE 30%, #CDCDDE 70%, rgba(205, 205, 222, 0.2) 100%)",
                boxShadow:
                  "1px 0 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
                filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
              }}
            />
          </div>
          {/* Bottom vertical groove - fades well before dot */}
          <div
            className="absolute top-full"
            style={{
              width: "2px",
              height: "120px",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(205, 205, 222, 0.2) 15%, #CDCDDE 35%, #CDCDDE 65%, rgba(205, 205, 222, 0.2) 85%, transparent 100%)",
            }}
          >
            <div
              className="absolute left-0 top-[15%] h-[70%]"
              style={{
                width: "1px",
                background:
                  "linear-gradient(to bottom, rgba(205, 205, 222, 0.2) 0%, #CDCDDE 30%, #CDCDDE 70%, rgba(205, 205, 222, 0.2) 100%)",
                boxShadow:
                  "1px 0 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
                filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
              }}
            />
          </div>
          <div
            className="w-3 h-3 rounded-full z-10"
            style={{
              background: "#CDCDDE",
              boxShadow:
                "0 0 8px rgba(255, 255, 255, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.4)",
            }}
          />
        </div>

        {/* Middle section 1 - fades well before both dots */}
        <div className="flex-1 relative">
          <div
            className="w-full"
            style={{
              height: "2px",
              background:
                "linear-gradient(to right, transparent 0%, rgba(205, 205, 222, 0.2) 15%, #CDCDDE 35%, #CDCDDE 65%, rgba(205, 205, 222, 0.2) 85%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-0 left-[15%] w-[70%]"
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(205, 205, 222, 0.2) 0%, #CDCDDE 30%, #CDCDDE 70%, rgba(205, 205, 222, 0.2) 100%)",
              boxShadow:
                "0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
              filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
            }}
          />
        </div>

        {/* Second node (center) with vertical lines */}
        <div className="relative flex flex-col items-center overflow-visible">
          {/* Top vertical groove */}
          <div
            className="absolute bottom-full"
            style={{
              width: "2px",
              height: "120px",
              background:
                "linear-gradient(to top, transparent 0%, rgba(205, 205, 222, 0.2) 15%, #CDCDDE 35%, #CDCDDE 65%, rgba(205, 205, 222, 0.2) 85%, transparent 100%)",
            }}
          >
            <div
              className="absolute left-0 top-[15%] h-[70%]"
              style={{
                width: "1px",
                background:
                  "linear-gradient(to top, rgba(205, 205, 222, 0.2) 0%, #CDCDDE 30%, #CDCDDE 70%, rgba(205, 205, 222, 0.2) 100%)",
                boxShadow:
                  "1px 0 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
                filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
              }}
            />
          </div>
          {/* Bottom vertical groove */}
          <div
            className="absolute top-full"
            style={{
              width: "2px",
              height: "120px",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(205, 205, 222, 0.2) 15%, #CDCDDE 35%, #CDCDDE 65%, rgba(205, 205, 222, 0.2) 85%, transparent 100%)",
            }}
          >
            <div
              className="absolute left-0 top-[15%] h-[70%]"
              style={{
                width: "1px",
                background:
                  "linear-gradient(to bottom, rgba(205, 205, 222, 0.2) 0%, #CDCDDE 30%, #CDCDDE 70%, rgba(205, 205, 222, 0.2) 100%)",
                boxShadow:
                  "1px 0 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
                filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
              }}
            />
          </div>
          <div
            className="w-3 h-3 rounded-full z-10"
            style={{
              background: "#CDCDDE",
              boxShadow:
                "0 0 8px rgba(255, 255, 255, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.4)",
            }}
          />
        </div>

        {/* Middle section 2 - fades well before both dots */}
        <div className="flex-1 relative">
          <div
            className="w-full"
            style={{
              height: "2px",
              background:
                "linear-gradient(to right, transparent 0%, rgba(205, 205, 222, 0.2) 15%, #CDCDDE 35%, #CDCDDE 65%, rgba(205, 205, 222, 0.2) 85%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-0 left-[15%] w-[70%]"
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(205, 205, 222, 0.2) 0%, #CDCDDE 30%, #CDCDDE 70%, rgba(205, 205, 222, 0.2) 100%)",
              boxShadow:
                "0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
              filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
            }}
          />
        </div>

        {/* Third node with vertical lines */}
        <div className="relative flex flex-col items-center overflow-visible">
          {/* Top vertical groove */}
          <div
            className="absolute bottom-full"
            style={{
              width: "2px",
              height: "120px",
              background:
                "linear-gradient(to top, transparent 0%, rgba(205, 205, 222, 0.2) 15%, #CDCDDE 35%, #CDCDDE 65%, rgba(205, 205, 222, 0.2) 85%, transparent 100%)",
            }}
          >
            <div
              className="absolute left-0 top-[15%] h-[70%]"
              style={{
                width: "1px",
                background:
                  "linear-gradient(to top, rgba(205, 205, 222, 0.2) 0%, #CDCDDE 30%, #CDCDDE 70%, rgba(205, 205, 222, 0.2) 100%)",
                boxShadow:
                  "1px 0 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
                filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
              }}
            />
          </div>
          {/* Bottom vertical groove */}
          <div
            className="absolute top-full"
            style={{
              width: "2px",
              height: "120px",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(205, 205, 222, 0.2) 15%, #CDCDDE 35%, #CDCDDE 65%, rgba(205, 205, 222, 0.2) 85%, transparent 100%)",
            }}
          >
            <div
              className="absolute left-0 top-[15%] h-[70%]"
              style={{
                width: "1px",
                background:
                  "linear-gradient(to bottom, rgba(205, 205, 222, 0.2) 0%, #CDCDDE 30%, #CDCDDE 70%, rgba(205, 205, 222, 0.2) 100%)",
                boxShadow:
                  "1px 0 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
                filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
              }}
            />
          </div>
          <div
            className="w-3 h-3 rounded-full z-10"
            style={{
              background: "#CDCDDE",
              boxShadow:
                "0 0 8px rgba(255, 255, 255, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.4)",
            }}
          />
        </div>

        {/* Right section - fades well before reaching dot */}
        <div className="flex-1 relative">
          <div
            className="w-full"
            style={{
              height: "2px",
              background:
                "linear-gradient(to right, transparent 0%, rgba(205, 205, 222, 0.2) 10%, #CDCDDE 30%, #CDCDDE 70%, rgba(205, 205, 222, 0.2) 90%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-0 left-[10%] w-[80%]"
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(205, 205, 222, 0.2) 0%, #CDCDDE 25%, #CDCDDE 75%, rgba(205, 205, 222, 0.2) 100%)",
              boxShadow:
                "0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)",
              filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
