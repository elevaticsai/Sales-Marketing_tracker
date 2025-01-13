import React from 'react';
import { PageLayout } from '../components/PageLayout';

const activities = [
  {
    title: "Email Campaign Management",
    description: "Create and send personalized email campaigns",
    status: "in-progress" as const,
    assignee: "Lisa Park"
  },
  {
    title: "Content Distribution",
    description: "Share case studies, testimonials, and product demos",
    status: "completed" as const,
    assignee: "Tom Anderson"
  },
  {
    title: "Retargeting Campaigns",
    description: "Set up and monitor retargeting ads",
    status: "in-progress" as const,
    assignee: "Nina Patel"
  }
];

const metrics = [
  { label: "Email Open Rate", value: "28%" },
  { label: "Click-Through Rate", value: "3.5%" },
  { label: "Nurture to SQL Rate", value: "12%" }
];

export function NurtureLeads() {
  return (
    <PageLayout
      title="Lead Nurturing"
      description="Nurture leads through personalized content and engagement strategies."
      activities={activities}
      metrics={metrics}
    />
  );
}