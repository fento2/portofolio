import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Project 1",
    image: "/spiderman morales.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum aut, ab possimus itaque, quidem saepe accusantium similique dolore autem recusandae dolor illo laudantium? Minus sint quis possimus iure praesentium.",
  },
  {
    title: "Project 2",
    image: "/spiderman morales.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum aut, ab possimus itaque, quidem saepe accusantium similique dolore autem recusandae dolor illo laudantium? Minus sint quis possimus iure praesentium.",
  },
  {
    title: "Project 3",
    image: "/spiderman morales.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum aut, ab possimus itaque, quidem saepe accusantium similique dolore autem recusandae dolor illo laudantium? Minus sint quis possimus iure praesentium.",
  },
];

function ProjectsPage() {
  return (
    <section className="w-full px-4 md:px-20">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Projects
      </h1>
      <p className="text-[18px] text-center -mt-10 mb-12">What I've been working on recently.</p>

      <div className="w-full max-w-7xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => {
          const isHorizontal = index === 2;

          return (
            <Card
              key={index}
              className={`bg-gray-900 border-none text-white 
                ${isHorizontal ? "lg:col-span-2" : ""}
                `}
            >
              <CardContent
                className={`p-4 ${
                  isHorizontal ? "flex flex-col lg:flex-row gap-4 items-start " : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105
                    ${isHorizontal
                      ? "w-full lg:w-1/3 "
                      : "w-full"
                  }`}
                />
                <div
                  className={`${
                    isHorizontal ? "w-full lg:w-full" : "w-full"
                  } px-2`}
                >
                  <CardTitle className="text-xl font-semibold mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-white text-[16px]">
                    {project.description}
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsPage;
