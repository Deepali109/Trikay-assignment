import React, { PureComponent } from "react";
import { FaDisplay } from "react-icons/fa6";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Concept Videos", value: 1, color: "blue" }, // blue
  { name: "MCQs", value: 26, color: "#22c55e" }, // green
  { name: "TBSS", value: 0, color: "#a855f7" }, // purple
  { name: "Practice Tests / Flashcards", value: 2, color: "#f59e0b" }, // yellow
  { name: "Mini / Simulated Exams", value: 1, color: "#f97316" }, // orange
  { name: "Others", value: 202, color: "#31a7cb" }, // blue
];

class StudyTimePieChart extends PureComponent {
  state = {
    activeIndex: -1, // Initialize with no active index
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  onPieLeave = () => {
    this.setState({
      activeIndex: -1, // Reset to no active index
    });
  };

  render() {
    const { activeIndex } = this.state;
    const activeSegment = activeIndex >= 0 ? data[activeIndex] : null;

    // Calculate total time
    const totalTime = data.reduce((acc, item) => acc + item.value, 0);

    return (
      <ResponsiveContainer
        width="100%"
        height={200}
        style={{ marginLeft: "-10px" }}
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="80%"
            innerRadius={80}
            outerRadius={100}
            startAngle={180}
            endAngle={0}
            dataKey="value"
            cornerRadius={4} // Rounds the edges of each segment slightly
            padAngle={1} // Adds a small gap between segments
            onMouseEnter={this.onPieEnter}
            onMouseLeave={this.onPieLeave}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color} // Always use the color specified in the data
                stroke="#fff"
                strokeWidth={index === activeIndex ? 2 : 1} // Thicker stroke on hover
              />
            ))}
          </Pie>
          {/* Display Total Time in the center */}
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            fill="#333"
            style={{ fontSize: "12px", fontWeight: "bold", color: "#757676" }}
          >
            Total Time
          </text>
          <text
            x="50%"
            y="70%"
            textAnchor="middle"
            fill="#333"
            style={{ fontSize: "14px", fontWeight: "bold" }}
          >
            {totalTime} min
          </text>
          {activeSegment && (
            <text
              x="50%"
              y="82%"
              textAnchor="middle"
              fill={activeSegment.color}
              style={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {activeSegment.name}
            </text>
          )}
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default StudyTimePieChart;
