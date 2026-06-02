import type { CloudCaseStudyDeployment } from "@/types/cloud-case-study";

export default function DeploymentStrategy({
  deployment,
}: {
  deployment?: CloudCaseStudyDeployment;
}) {
  if (!deployment) return null;

  return (
    <div className="mt-20 w-[85vw] md:w-[70vw]">
      <h1 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
        Deployment Strategy
      </h1>

      <div
        className="
          rounded-lg
          border
          border-white/10
          bg-white/5
          p-6
        "
      >
        <p className="text-gray-500">{deployment.strategy}</p>

        {deployment.cicd && (
          <>
            <h2 className="text-xl font-semibold mt-8">CI/CD Pipeline</h2>

            <p className="text-gray-500 mt-3">{deployment.cicd}</p>
          </>
        )}
      </div>
    </div>
  );
}
