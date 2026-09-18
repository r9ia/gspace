//all projects have the following info about them
export interface ExperienceInterface {
    company: string
    title: string
    date: string
    stack: string[]
    description: string
    cover?: string //represneting what will be passed into the src tag
}


export const EXPERIENCES: ExperienceInterface[] = [
    {
        company: "IEEE University of Toronto Branch",
        title: "Web Associate",
        date: "June 2026 - Present",
        stack: ["React", "Javascript", "Django"],
        description: "- redesigning MakeUoft website\n- implementing new features ",
        cover: "ieee-1.png",
    },
    {
        company: "Needlist.ORG",
        title: "Software Engineer Intern",
        date: "May 2026 - Present",
        stack: ["React", "Typescript", "Google Firebase"],
        description: "- Building end-to-end features for a Toronto-based non-profit organization.\n- Worked on developing new features and improving existing ones",
        cover: "needlist.png",
    },
]
