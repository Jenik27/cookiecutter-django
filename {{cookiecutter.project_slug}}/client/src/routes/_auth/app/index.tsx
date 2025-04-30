import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/app")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3 className="text-center">Welcome Home!</h3>
    </div>
  );
}
