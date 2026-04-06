import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

const Layout = lazy(() => import('./components/layout/Layout'))
const HomePage = lazy(() => import('./pages/Home'))
const InsightsPage = lazy(() => import('./pages/Insights'))
const InsightDetailPage = lazy(() => import('./pages/Insights/Detail'))
const InspirationsPage = lazy(() => import('./pages/Inspirations'))
const ToolboxPage = lazy(() => import('./pages/Toolbox'))

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-warm-bg text-warm-text">
          页面加载中...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="insights/:id" element={<InsightDetailPage />} />
          <Route path="inspirations" element={<InspirationsPage />} />
          <Route path="toolbox" element={<ToolboxPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
