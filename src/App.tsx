import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Target, Menu, X } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { Dashboard } from './components/Dashboard';
import { TargetAudience } from './pages/TargetAudience';
import { LeadGeneration } from './pages/LeadGeneration';
import { CaptureLeads } from './pages/CaptureLeads';
import { QualifyLeads } from './pages/QualifyLeads';
import { NurtureLeads } from './pages/NurtureLeads';
import { HandoffSales } from './pages/HandoffSales';
import { SalesOutreach } from './pages/SalesOutreach';
import { AnalyzeOptimize } from './pages/AnalyzeOptimize';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { AuthProvider } from './contexts/AuthContext';
import { AuthGuard } from './components/AuthGuard';
import { useAuth } from './contexts/AuthContext';

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2.5 text-base font-medium rounded-lg transition-colors duration-150 ${
        isActive
          ? 'bg-indigo-100 text-indigo-700'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      {children}
    </Link>
  );
}

function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Close sidebar when route changes on mobile
  React.useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header */}
      <header className="sticky top-0 z-30 lg:hidden">
        <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Menu className="h-6 w-6" />
          </button>
          <Link to="/" className="flex items-center space-x-2">
            <Target className="h-7 w-7 text-indigo-600" />
            <span className="text-lg font-bold text-gray-900">SalesFlow</span>
          </Link>
          <div className="w-6" />
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)] lg:h-screen">
        {/* Backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-0 lg:top-0 left-0 z-30 w-72 h-full bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:transform-none ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          {/* Sidebar header - Desktop */}
          <div className="h-16 hidden lg:flex items-center justify-between px-6 border-b border-gray-200">
            <Link to="/" className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">SalesFlow</span>
            </Link>
          </div>

          {/* Mobile sidebar header */}
          <div className="h-16 flex lg:hidden items-center justify-between px-4 border-b border-gray-200">
            <span className="text-lg font-semibold text-gray-900">Navigation</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-3 py-4 overflow-y-auto">
            <div className="space-y-1">
              <NavLink to="/target-audience">Target Audience</NavLink>
              <NavLink to="/lead-generation">Lead Generation</NavLink>
              <NavLink to="/capture-leads">Capture Leads</NavLink>
              <NavLink to="/qualify-leads">Qualify Leads</NavLink>
              <NavLink to="/nurture-leads">Nurture Leads</NavLink>
              <NavLink to="/handoff-sales">Handoff to Sales</NavLink>
              <NavLink to="/sales-outreach">Sales Outreach</NavLink>
              <NavLink to="/analyze-optimize">Analyze & Optimize</NavLink>
            </div>

            {/* User section */}
            {user && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-gray-900">{user.name || user.email}</p>
                  <button
                    onClick={logout}
                    className="mt-2 w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/*"
          element={
            <AuthGuard>
              <AppLayout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/target-audience" element={<TargetAudience />} />
                  <Route path="/lead-generation" element={<LeadGeneration />} />
                  <Route path="/capture-leads" element={<CaptureLeads />} />
                  <Route path="/qualify-leads" element={<QualifyLeads />} />
                  <Route path="/nurture-leads" element={<NurtureLeads />} />
                  <Route path="/handoff-sales" element={<HandoffSales />} />
                  <Route path="/sales-outreach" element={<SalesOutreach />} />
                  <Route path="/analyze-optimize" element={<AnalyzeOptimize />} />
                </Routes>
              </AppLayout>
            </AuthGuard>
          }
        />
      </Routes>
      <Toaster position="top-right" />
    </AuthProvider>
  );
}

export default App;