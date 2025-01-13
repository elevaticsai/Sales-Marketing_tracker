import React from 'react';
import { PageLayout } from '../components/PageLayout';

const activities = [
  {
    title: "KPI Tracking",
    description: "Monitor and analyze key performance indicators",
    status: "in-progress" as const,
    assignee: "Alex Zhang"
  },
  {
    title: "Process Optimization",
    description: "Identify and implement process improvements",
    status: "completed" as const,
    assignee: "Emma Thompson"
  },
  {
    title: "Team Feedback Collection",
    description: "Gather and analyze feedback from sales and marketing teams",
    status: "in-progress" as const,
    assignee: "Ryan Cooper"
  }
];

const metrics = [
  { label: "Overall ROI", value: "285%" },
  { label: "CAC Reduction", value: "18%" },
  { label: "Process Efficiency", value: "92%" }
];

export function AnalyzeOptimize() {
  return (
    <PageLayout
      title="Analysis & Optimization"
      description="Continuously analyze performance and optimize processes for better results."
      activities={activities}
      metrics={metrics}
    />
  );
}