import Link from "next/link";
import NextProjectCard from "./NextProjectCard";
import projectData from "@/data/Projects/projectData";
import OverText from "@/components/Unique/Buttons/OverText/OverText";

const ProjectNext = () => {
  return (
    <section
      id="projects"
      className="eachName grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-x-10  md:gap-x-6 xl:gap-y-8  py-32 "
    >
      <div className="px-4 py-8">
        <h2 className="text-sup font-bold text-2xl">All Creative Works</h2>
        <p className="text-gray-300 mb-6 text-xl">
          {"Here's"} some of my projects that I have worked on.
        </p>

        <Link href={"projects"}>
          <OverText className="mt-5" text="Explore_More" />
        </Link>
      </div>
      {/*  other dynamic grid colum */}
      {projectData.slice(0, 3).map((value) => {
        return (
          <>
            <NextProjectCard
              key={value.id}
              ProjectImage={value.ProjectImage}
              id={value.id}
              name={value.name}
              gitHubLink={value.gitHubLink}
              liveLink={value.liveLink}
              tag={value.tag}
              description={value.description}
              isTranslate={true}
            />
          </>
        );
      })}
    </section>
  );
};

export default ProjectNext;