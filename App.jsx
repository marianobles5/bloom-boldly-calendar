import React, { useState } from "react";
import days from "./data";

/* ============================================================
   HELPER — get week number from day index (0-indexed)
   ============================================================ */
function getWeek(index) {
  return Math.floor(index / 7) + 1;
}

/* ============================================================
   COMPONENT — DayCard
   ============================================================ */
function DayCard({ dayData, index, isCompleted, onSelect, onToggleComplete }) {
  function handleCheckClick(e) {
    e.stopPropagation();
    onToggleComplete(dayData.day);
  }

  return (
    <div
      className={"day-card" + (isCompleted ? " completed" : "")}
      onClick={() => onSelect(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(index); }}
      aria-label={"Open Day " + dayData.day + ": " + dayData.theme}
    >
      {/* Check / complete circle */}
      <div
        className={"card-check" + (isCompleted ? " checked" : "")}
        onClick={handleCheckClick}
        role="checkbox"
        aria-checked={isCompleted}
        aria-label={"Mark day " + dayData.day + " complete"}
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleCheckClick(e); }}
      >
        {isCompleted ? "✓" : ""}
      </div>

      <div className="day-number">Day {dayData.day}</div>
      <div className="day-theme">{dayData.theme}</div>
      <div className="day-idea">
        {dayData.idea.length > 52 ? dayData.idea.slice(0, 52) + "…" : dayData.idea}
      </div>
      <div className="card-tap-hint">Tap to view →</div>
    </div>
  );
}

/* ============================================================
   COMPONENT — DetailView
   ============================================================ */
function DetailView({ dayData, index, totalDays, isCompleted, onBack, onToggleComplete, onNavigate }) {
  const dayObj = dayData;
  const tags = dayObj.hashtags
    ? dayObj.hashtags.split(" ").filter((t) => t.trim().length > 0)
    : [];

  return (
    <div className="detail-wrapper">
      {/* Back button */}
      <button className="back-btn" onClick={onBack} aria-label="Back to calendar">
        ← Back to Calendar
      </button>

      <div className="detail-card">
        {/* Header */}
        <div className="detail-header">
          <div className="day-label">Day {dayObj.day} of {totalDays}</div>
          <h2>{dayObj.theme}</h2>
          <p className="detail-idea">{dayObj.idea}</p>

          <div className="detail-actions">
            <button
              className={"action-btn" + (isCompleted ? " mark-done" : "")}
              onClick={() => onToggleComplete(dayObj.day)}
            >
              {isCompleted ? "✓ Completed" : "Mark Complete"}
            </button>

            <button
              className="action-btn nav-btn"
              onClick={() => onNavigate(index - 1)}
              disabled={index === 0}
              aria-label="Previous day"
            >
              ← Prev
            </button>

            <button
              className="action-btn nav-btn"
              onClick={() => onNavigate(index + 1)}
              disabled={index === totalDays - 1}
              aria-label="Next day"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Body sections */}
        <div className="detail-body">

          {/* Hook */}
          <div className="section-block hook">
            <div className="section-label">🎣 Hook — First 3 Seconds</div>
            <div className="section-content">&ldquo;{dayObj.hook}&rdquo;</div>
          </div>

          {/* Visual concept */}
          <div className="section-block visual">
            <div className="section-label">🎬 Video / Image Concept</div>
            <div className="section-content">{dayObj.visual}</div>
          </div>

          {/* Caption */}
          <div className="section-block caption">
            <div className="section-label">✍️ Caption</div>
            <div className="section-content">{dayObj.caption}</div>
          </div>

          {/* CTA */}
          <div className="section-block cta">
            <div className="section-label">📣 Call to Action</div>
            <div className="section-content">{dayObj.cta}</div>
          </div>

          {/* Daily To-Do */}
          <div className="section-block todo">
            <div className="section-label">✅ Daily To-Do List</div>
            <div className="todo-list">
              {dayObj.todo.map(function(item, i) {
                return (
                  <div key={i} className="todo-item">
                    <div className="todo-num">{i + 1}</div>
                    <div className="todo-text">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hashtags */}
          <div className="section-block tags">
            <div className="section-label"># Hashtags</div>
            <div className="hashtag-chips">
              {tags.map(function(tag, i) {
                return (
                  <span key={i} className="hashtag-chip">{tag}</span>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom navigation */}
      <div className="detail-nav-bottom">
        <button
          className="action-btn nav-btn"
          onClick={() => onNavigate(index - 1)}
          disabled={index === 0}
        >
          ← Day {dayObj.day - 1}
        </button>

        <button
          className="action-btn nav-btn"
          onClick={() => onNavigate(index + 1)}
          disabled={index === totalDays - 1}
        >
          Day {dayObj.day + 1} →
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   COMPONENT — Progress Bar
   ============================================================ */
function ProgressBar({ completed, total }) {
  var pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  return (
    <div className="progress-section">
      <div className="progress-meta">
        <span className="label">Progress</span>
        <span>{completed} / {total} days complete</span>
      </div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: pct + "%" }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

/* ============================================================
   COMPONENT — Week Filter Tabs
   ============================================================ */
function FilterTabs({ activeFilter, onChange }) {
  var tabs = [
    { id: "all",   label: "All 30 Days" },
    { id: "week1", label: "Week 1" },
    { id: "week2", label: "Week 2" },
    { id: "week3", label: "Week 3" },
    { id: "week4", label: "Week 4" }
  ];

  return (
    <div className="filter-tabs" role="tablist" aria-label="Filter by week">
      {tabs.map(function(tab) {
        return (
          <button
            key={tab.id}
            className={"filter-btn" + (activeFilter === tab.id ? " active" : "")}
            onClick={() => onChange(tab.id)}
            role="tab"
            aria-selected={activeFilter === tab.id}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

/* ============================================================
   ROOT APP
   ============================================================ */
export default function App() {
  /* Which day index is open in detail view, null = grid view */
  var [selectedIndex, setSelectedIndex] = useState(null);

  /* Track completed days by day number */
  var [completed, setCompleted] = useState({});

  /* Active week filter */
  var [filter, setFilter] = useState("all");

  /* ---- Derived values ---- */
  var completedCount = Object.values(completed).filter(Boolean).length;

  /* Filter the days array based on week selection */
  var filteredDays = days.filter(function(d, i) {
    if (filter === "all") return true;
    var week = getWeek(i);
    if (filter === "week1") return week === 1;
    if (filter === "week2") return week === 2;
    if (filter === "week3") return week === 3;
    if (filter === "week4") return week === 4;
    return true;
  });

  /* ---- Handlers ---- */
  function handleSelectDay(filteredIndex) {
    /* We need the original index in the `days` array */
    var originalDay = filteredDays[filteredIndex];
    var originalIndex = days.findIndex(function(d) { return d.day === originalDay.day; });
    setSelectedIndex(originalIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleBack() {
    setSelectedIndex(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleToggleComplete(dayNumber) {
    setCompleted(function(prev) {
      var next = Object.assign({}, prev);
      next[dayNumber] = !next[dayNumber];
      return next;
    });
  }

  function handleNavigate(newIndex) {
    if (newIndex >= 0 && newIndex < days.length) {
      setSelectedIndex(newIndex);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  /* ---- Render ---- */
  return (
    <div className="page-wrapper">

      {/* ---- HEADER (always visible) ---- */}
      <header className="app-header">
        <p className="eyebrow">30-Day Viral Content Strategy</p>
        <h1>BLOOM BOLDLY</h1>
        <p className="subtitle">Your complete scroll-stopping content calendar 🌸</p>
        <ProgressBar completed={completedCount} total={days.length} />
      </header>

      {/* ---- GRID VIEW ---- */}
      {selectedIndex === null && (
        <main>
          <FilterTabs activeFilter={filter} onChange={setFilter} />

          <div className="day-grid">
            {filteredDays.map(function(dayObj, filteredIndex) {
              return (
                <DayCard
                  key={dayObj.day}
                  dayData={dayObj}
                  index={filteredIndex}
                  isCompleted={!!completed[dayObj.day]}
                  onSelect={handleSelectDay}
                  onToggleComplete={handleToggleComplete}
                />
              );
            })}
          </div>
        </main>
      )}

      {/* ---- DETAIL VIEW ---- */}
      {selectedIndex !== null && (
        <main>
          <DetailView
            dayData={days[selectedIndex]}
            index={selectedIndex}
            totalDays={days.length}
            isCompleted={!!completed[days[selectedIndex].day]}
            onBack={handleBack}
            onToggleComplete={handleToggleComplete}
            onNavigate={handleNavigate}
          />
        </main>
      )}

    </div>
  );
}
