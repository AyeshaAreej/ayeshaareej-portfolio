import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "./Stats.css";

// Edit the numbers here.
const stats = [
  { value: 3, suffix: "+", label: "years professional experience" },
  { value: 8, suffix: "", label: "companies worked with" },
  { value: 11, suffix: "", label: "systems shipped" },
  { value: 100, suffix: "%", label: "client satisfaction" },
];

const CountUp = ({ value, suffix }) => {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { setN(value); return; }
    let frame;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / 1200, 1);
        setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => { obs.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <span ref={ref}>{n}{suffix}</span>;
};

const Stats = () => (
  <Container fluid className="home-about-section" id="stats">
    <Container>
      <div className="stats-card">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-number"><CountUp value={s.value} suffix={s.suffix} /></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </Container>
  </Container>
);

export default Stats;
