import React from 'react';
import { Link } from 'react-router-dom';

interface Activity {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  assignee?: string;
}

interface Metric {
  label: string;
  value: string | number;
}

interface PageLayoutProps {
  title: string;
  description: string;
  activities: Activity[];
  metrics: Metric[];
}

export function PageLayout({ title, description, activities, metrics }: PageLayoutProps) {
  return (
    <div className="min-h-full bg-gray-50 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{title}</h1>
            <p className="text-gray-600 text-base sm:text-lg mb-8">{description}</p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-100"
                >
                  <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.label}</h3>
                  <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                </div>
              ))}
            </div>

            {/* Activities */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Activities & Tasks</h2>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-white border rounded-lg p-4 sm:p-5 hover:border-gray-300 transition-colors duration-150"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {activity.title}
                        </h3>
                        <p className="text-gray-600">{activity.description}</p>
                      </div>
                      <div className="flex flex-row sm:flex-col items-start sm:items-end gap-3 sm:gap-2">
                        {activity.assignee && (
                          <span className="text-sm text-gray-500 order-1 sm:order-none">
                            {activity.assignee}
                          </span>
                        )}
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            activity.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : activity.status === 'in-progress'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}