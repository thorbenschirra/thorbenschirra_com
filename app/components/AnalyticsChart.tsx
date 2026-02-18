"use client";

import Chart from "chart.js/auto";
import { useState, useEffect } from "react";
import { totalUsers } from "../functions/analytics";

export default function AnalyticsChart() {
  const [days, setDays] = useState<number>(7);
  const [analyticsData, setAnalyticsData] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    totalUsers(days)
      .then((response) => setAnalyticsData(response.body))
      .catch((error) => setError(`An error occured: ${error}`));
  }, [days]);
  console.log("analytics data", analyticsData);

  /* const chart = new Chart(ctx, {
    type: 'line',
    data: data,
  options: {
    onClick: (e) => {
      const canvasPosition = getRelativePosition(e, chart);

      // Substitute the appropriate scale IDs
      const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
      const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
    }
  }) */
  return <div className=""></div>;
}
