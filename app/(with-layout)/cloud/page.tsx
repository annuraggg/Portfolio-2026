import CaseList from "@/components/case-study/CaseList";

const Work = () => {
  return (
    <div className="md:w-[90%] w-[90vw] md:py-10 md:p-10 animate__animated animate__fadeIn">
      <div className="text-center text-5xl font-poly drop-shadow-glow md:text-8xl">
        <h1>
          Cloud Infrastructure built for{" "}
          <span className=" md:text-8xl font-gloock italic drop-shadow-none bg-gradient-to-b from-[#ffffff6e] via-[#d8d9d8bc] to-[#101010] text-transparent bg-clip-text">
            reliability.
          </span>
        </h1>
      </div>

      <div className="mt-20"></div>

      <CaseList />
    </div>
  );
};

export default Work;
