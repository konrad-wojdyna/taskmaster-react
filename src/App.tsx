import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useAppDispatch } from "./store/hooks";
import { fetchTasks } from "./features/tasks/taskSlice";

import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import StatsPage from "./pages/StatsPage";
import NotFoundPage from "./pages/NotFoundPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="main-h-screen bg-slate-50">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="inline-flex items-center px-1 pt-1 text-gray-900 font-medium hover:text-blue-600"
                >
                  Home
                </Link>
                <Link
                  to="/tasks"
                  className="inline-flex items-center px-1 pt-1 text-gray-900 font-medium hover:text-blue-600"
                >
                  Tasks
                </Link>
                <Link
                  to="/stats"
                  className="inline-flex items-center px-1 pt-1 text-gray-900 font-medium hover:text-blue-600"
                >
                  Statistics
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/:id" element={<TaskDetailsPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
