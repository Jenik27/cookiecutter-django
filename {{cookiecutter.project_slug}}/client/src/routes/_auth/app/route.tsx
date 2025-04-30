import { Outlet, createFileRoute } from "@tanstack/react-router";
const AppLayoutComponent = () => {
  return <Outlet />;
};
export const Route = createFileRoute("/_auth/app")({
  component: AppLayoutComponent,
});
