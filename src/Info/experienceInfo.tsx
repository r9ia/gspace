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
        description: "- Currently redesigning MakeUofT hackathon site + hardware signout system used by 260+ hackers\n- Shipped new features in Figma → React/Django pipeline to keep up with chapter events",
        cover: "ieee-1.png",
    },
    {
        company: "Needlist.ORG",
        title: "Software Engineer Intern",
        date: "May 2026 - Present",
        stack: ["React", "Typescript", "Google Firebase"],
        description: "- Built end-to-end features for a Toronto-based non-profit, from DB architecture to UI\n- Designed saved-carts flow linking store checkout to a charity's live wishlist\n- Currently mentoring incoming software engineering interns",
        cover: "needlist.png",
    },
]
