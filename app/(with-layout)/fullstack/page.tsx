import ProjectList from "@/components/project/ProjectList";

const Work = () => {
  return (
    <div className="md:w-[90%] w-[90vw] md:py-10 md:p-10 animate__animated animate__fadeIn">
      <div className="text-center text-5xl font-poly drop-shadow-glow md:text-8xl">
        <h1>
          I craft digital experiences that people{" "}
          <span className=" md:text-8xl font-gloock italic drop-shadow-none bg-gradient-to-b from-[#ffffff6e] via-[#d8d9d8bc] to-[#101010] text-transparent bg-clip-text">
            love.
          </span>
        </h1>
      </div>
      <div className="text-center font-poly drop-shadow-glow mt-10">
        <p className="text-gray-500 text-sm">Based in Mumbai.</p>
      </div>

      <div className="mt-20"></div>

      <ProjectList />
    </div>
  );
};

export default Work;
