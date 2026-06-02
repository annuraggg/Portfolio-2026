import Signature from "./Signature";

const Background = () => (
  <div className="w-full md:w-[60%] mt-10 md:mt-0">
    <p className="text-lg">My Background</p>
    <p className="text-gray-500 mt-2">
      In July 2022, I completed my Diploma in IT from Vidyalankar Polytechnic.
      From a young age, I&apos;ve been captivated by the world of coding and
      have spent the past years honing my skills in web development.
    </p>

    <div className="mt-10">
      <p className="text-lg">Currently,</p>
      <p className="text-gray-500 mt-2">
        I am pursuing my Bachelors in Information Technology from A. P. Shah
        Institute of Technology.
      </p>
    </div>

    <p className="mt-10 mb-[-20px] text-lg">Thank you for being here!</p>
    <Signature />
  </div>
);

export default Background;
