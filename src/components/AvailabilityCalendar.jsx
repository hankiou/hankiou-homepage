import { useState } from "react";

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

  return (
    <div className="calendar-grid" role="row">
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
            tabIndex="0"
            onClick={() => onMonthClick?.(monthNum, year)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onMonthClick?.(monthNum, year);
              }
            }}
          >
            <span className="month-label">{MONTHS[monthNum - 1]}</span>
          </div>
        );
      })}
    </div>
  );
};

// Main Component
const AvailabilityCalendar = ({
  year = new Date().getFullYear(),
  periods = [],
  variant = "default",
  onMonthClick,
}) => {
  const [displayYear, setDisplayYear] = useState(year);

  // Filter periods to only show those for the current display year
  const yearPeriods = periods.filter((p) => p.year === displayYear);

  return (
    <div
      className={`calendar-wrapper ${
        variant === "blueprint" ? "calendar-wrapper--blueprint" : ""
      }`}
    >
      <div className="calendar-header">
        <span className="calendar-year">{displayYear}</span>
        <div className="calendar-nav">
          <button
            onClick={() => setDisplayYear((y) => y - 1)}
            aria-label="Previous year"
          >
            ←
          </button>
          <button
            onClick={() => setDisplayYear((y) => y + 1)}
            aria-label="Next year"
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

export default AvailabilityCalendar;
