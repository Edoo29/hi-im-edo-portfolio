import { dancing_script } from "../font";

export default function Projects() {
  return (
    <div id="skills" className="hidden md:block mt-[700px] h-[200px]">
      <p
        className={`${dancing_script.className} text-white text-center text-5xl`}
      >
        Projects
      </p>
      <p className="text-white text-center text-xl mt-10">No projects yet.</p>
    </div>
  );
}
