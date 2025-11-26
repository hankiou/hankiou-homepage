import { useCallback, useMemo, useRef, useState } from "react";

import PropTypes from "prop-types";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Helper: Check if month is in any period
const isMonthInPeriod = (month, periods) => {
  return periods.some((p) => month >= p.startMonth && month <= p.endMonth);
};

// Component: Render grid of month boxes
const MonthGrid = ({ startMonth, endMonth, year, periods, onMonthClick }) => {
  const monthsInRow = Array.from(
    { length: endMonth - startMonth + 1 },
    (_, i) => startMonth + i
  );
  const gridRef = useRef(null);

  const handleKeyNavigation = useCallback(
    (e, currentMonth) => {
      const allMonths = Array.from({ length: 12 }, (_, i) => i + 1);
      const currentIndex = allMonths.indexOf(currentMonth);
      let newIndex = currentIndex;

      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          newIndex = Math.min(currentIndex + 1, 11);
          break;
        case "ArrowLeft":
          e.preventDefault();
          newIndex = Math.max(currentIndex - 1, 0);
          break;
        case "ArrowDown":
          e.preventDefault();
          newIndex = Math.min(currentIndex + 4, 11);
          break;
        case "ArrowUp":
          e.preventDefault();
          newIndex = Math.max(currentIndex - 4, 0);
          break;
        case "Home":
          e.preventDefault();
          newIndex = 0;
          break;
        case "End":
          e.preventDefault();
          newIndex = 11;
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          onMonthClick?.(currentMonth, year);
          return;
        default:
          return;
      }
    },
    [onMonthClick, year]
  );

  return (
    <div className="calendar-grid" role="row" ref={gridRef}>
      {monthsInRow.map((monthNum) => {
        const isActive = isMonthInPeriod(monthNum, periods);

        const classes = ["calendar-month", isActive && "calendar-month--active"]
          .filter(Boolean)
          .join(" ");

        return (
          <div
            key={monthNum}
            className={classes}
            role="gridcell"
            onClick={() => onMonthClick?.(monthNum, year)}
            onKeyDown={(e) => handleKeyNavigation(e, monthNum)}
            aria-selected={isActive}
            aria-label={`${MONTHS[monthNum - 1]} ${year}${
              isActive ? " - Available" : ""
            }`}
          >
            <span className="month-label">{MONTHS[monthNum - 1]}</span>
          </div>
        );
      })}
    </div>
  );
};

MonthGrid.propTypes = {
  startMonth: PropTypes.number.isRequired,
  endMonth: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  periods: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number.isRequired,
      startMonth: PropTypes.number.isRequired,
      endMonth: PropTypes.number.isRequired,
      type: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  onMonthClick: PropTypes.func,
};

// Main Component
const AvailabilityCalendar = ({
  year = new Date().getFullYear(),
  periods = [],
  variant = "default",
  onMonthClick,
}) => {
  const [displayYear, setDisplayYear] = useState(year);

  // Filter periods to only show those for the current display year (memoized for performance)
  const yearPeriods = useMemo(
    () => periods.filter((p) => p.year === displayYear),
    [periods, displayYear]
  );

  return (
    <div
      className={`calendar-wrapper ${
        variant === "blueprint" ? "calendar-wrapper--blueprint" : ""
      }`}
      role="grid"
      aria-label={`Availability calendar for ${displayYear}`}
    >
      <div className="calendar-header">
        <span className="calendar-year" aria-live="polite">
          {displayYear}
        </span>
        <div className="calendar-nav">
          <button
            onClick={() => setDisplayYear((y) => y - 1)}
            aria-label={`Previous year (${displayYear - 1})`}
            type="button"
          >
            ←
          </button>
          <button
            onClick={() => setDisplayYear((y) => y + 1)}
            aria-label={`Next year (${displayYear + 1})`}
            type="button"
          >
            →
          </button>
        </div>
      </div>

      <div className="calendar-row-container">
        {/* Row 1: January - April */}
        <div className="calendar-row-block">
          <MonthGrid
            startMonth={1}
            endMonth={4}
            year={displayYear}
            periods={yearPeriods}
            onMonthClick={onMonthClick}
          />
        </div>

        {/* Row 2: May - August */}
        <div className="calendar-row-block">
          <MonthGrid
            startMonth={5}
            endMonth={8}
            year={displayYear}
            periods={yearPeriods}
            onMonthClick={onMonthClick}
          />
        </div>

        {/* Row 3: September - December */}
        <div className="calendar-row-block">
          <MonthGrid
            startMonth={9}
            endMonth={12}
            year={displayYear}
            periods={yearPeriods}
            onMonthClick={onMonthClick}
          />
        </div>
      </div>
    </div>
  );
};

AvailabilityCalendar.propTypes = {
  year: PropTypes.number,
  periods: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number.isRequired,
      label: PropTypes.string,
      startMonth: PropTypes.number.isRequired,
      endMonth: PropTypes.number.isRequired,
      type: PropTypes.string,
    })
  ),
  variant: PropTypes.oneOf(["default", "blueprint"]),
  onMonthClick: PropTypes.func,
};

export default AvailabilityCalendar;
