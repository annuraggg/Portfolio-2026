const GlowEffect = ({ projectLoading }: { projectLoading?: boolean }) => {
  return (
    <div className={`flex items-center justify-center ${projectLoading ? "h-[116vh]" : "h-[100vh]"}  md:h-[160vh] mt-[-30vw] absolute w-full -z-50 overflow-hidden`}>
      <div className="bg-[#ffffff0a] rounded-full w-[1000px] h-full blur-3xl"></div>
    </div>
  );
};

export default GlowEffect;
