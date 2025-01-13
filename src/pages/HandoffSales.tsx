import React from 'react';
import { PageLayout } from '../components/PageLayout';

const activities = [
  {
    title: "Lead Assignment",
    description: "Assign qualified leads to appropriate sales reps",
    status: "in-progress" as const,
    assignee: "Robert Johnson"
  },
  {
    title: "Context Documentation",
    description: "Document lead engagement history and pain points",
    status: "completed" as const,
    assignee: "Maria Garcia"
  },
  {
    title: "Sales Team Coordination",
    description: "Coordinate with sales team for smooth handoffs",
    status: "in-progress" as const,
    assignee: "Steve Williams"
  }
];

const metrics = [
  { label: "Leads Handed Off", value: "84" },
  { label: "Avg. Response Time", value: "1.8 hrs" },
  { label: "Sales Team Satisfaction", value: "92%" }
];

export function HandoffSales() {
  return (
    <PageLayout
      title="Sales Handoff Process"
      description="Ensure smooth transition of qualified leads to the sales team."
      activities={activities}
      metrics={metrics}
    />
  );
}