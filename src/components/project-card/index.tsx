import { motion} from "framer-motion";
import {ProjectTechnologiesMini} from "../project-technologies-mini";
import {Circle, MoveUpRight} from "lucide-react";
import cx from "classnames"

interface ProjectProps {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    status: string;
    imageUrl: string;
    techStack: string[];
    liveDemoUrl: string;
    githubUrl: string;
}

export function ProjectCard ({project}: {project: ProjectProps}) {
    const {heading, imageUrl, techStack, status, liveDemoUrl, description} = project;
    return (
        <motion.div
        initial={{opacity: 0, y: 75}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5, delay: 0.25}}
        className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-4 sm:p-8 space-y-8"
        >
            <div className="rounded-lg overflow-hidden bg-dark-300 aspect-video flex items-center justify-center">
                {
                    imageUrl ? (
                        <img
                            src={imageUrl}
                            width={1000}
                            height={1000}
                            alt={heading}
                            className="w-full h-auto hover:scale-110 transition-transform duration-700"
                        />
                    ) : (
                        <span className="text-sm text-muted-foreground">No image</span>
                    )
                }
            </div>
            <div>
                <div className="flex flex-row items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-semibold">{heading}</h3>
                    <p className="flex flex-row gap-1 items-center"><Circle className={cx(["size-3", status.toLowerCase() == "offline" ? "text-red-700" : "text-primary"])} fill="currentColor" />{status}</p>
                </div>
                <p>{description}</p>
                <div className="mt-4 flex flex-col sm:flex-row justify-between gap-5">
                    <ProjectTechnologiesMini techStack={techStack} />
                    {liveDemoUrl !== "" && (
                    <a href={liveDemoUrl} target="_blank" rel="noreferrer"
                    className="p-3 bg-primary hover:bg-primary/80 transition-colors duration-200 rounded-lg self-start sm:self-end"
                    >
                        <MoveUpRight className="size-5 sm:size-8 text-[#F3F4F3] dark:text-dark-200"/>
                    </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}