import { CloudCaseStudy } from "@/data/case";

export default function CaseStudyDetails({ study }: { study: CloudCaseStudy }) {
  return (
    <div className="flex md:flex-row flex-col text-center md:text-start mt-20 w-[85vw] md:w-[70vw]">
      <div className="md:w-[40%]">
        <div>
          <b>System</b>
          <p className="text-gray-500">{study.system}</p>
        </div>

        <div className="mt-5">
          <b>Timeline</b>
          <p className="text-gray-500">{study.timeline}</p>
        </div>

        <div className="mt-5">
          <b>Infrastructure</b>

          <div className="mt-2 flex flex-wrap gap-2">
            {study.stack.infrastructure.map((item) => (
              <span
                key={item}
                className="text-xs px-2 py-1 border border-zinc-800 rounded-full text-gray-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {study.repositories && (
          <div className="mt-5">
            <b>Resources</b>

            {study.repositories.map((repo) => (
              <p
                key={repo.url}
                className="text-gray-500 hover:text-blue-500 duration-200 transition-all cursor-pointer"
                onClick={() => window.open(repo.url, "_blank")}
              >
                {repo.title}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="md:w-[60%] mt-10 md:mt-0">
        <b>Overview</b>

        <p className="mt-5 text-gray-500">{study.overview}</p>

        <div className="mt-8">
          <b>Architecture</b>

          <p className="mt-3 text-gray-500">{study.architecture.description}</p>
        </div>
      </div>
    </div>
  );
}
