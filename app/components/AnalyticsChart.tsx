import Chart from "chart.js/auto";
import { runReport } from "../functions/analytics";

export default async function AnalyticsChart() {
  const data = (await runReport()).body;

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
