import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayoutShell } from "../components/layout/LayoutShell";
import { Skeleton } from "../components/ui/Skeleton";

const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const SocietiesPage = lazy(() => import("../pages/SocietiesPage"));
const EventsPage = lazy(() => import("../pages/EventsPage"));
const AiPage = lazy(() => import("../pages/AiPage"));

function RouteSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-40" />
      <div className="grid gap-4 md:grid-cols-4">
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <LayoutShell />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<RouteSkeleton />}>
            <DashboardPage />
          </Suspense>
        )
      },
      {
        path: "/societies",
        element: (
          <Suspense fallback={<RouteSkeleton />}>
            <SocietiesPage />
          </Suspense>
        )
      },
      {
        path: "/events",
        element: (
          <Suspense fallback={<RouteSkeleton />}>
            <EventsPage />
          </Suspense>
        )
      },
      {
        path: "/ai",
        element: (
          <Suspense fallback={<RouteSkeleton />}>
            <AiPage />
          </Suspense>
        )
      }
    ]
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
