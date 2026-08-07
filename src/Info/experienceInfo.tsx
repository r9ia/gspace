//all projects have the following info about them
export interface ExperienceInterface {
    company?: string
    title: string
    date: string
    description: string
    cover?: string //represneting what will be passed into the src tag
   
}


export const EXPERIENCES: ExperienceInterface[] = [
    {
        company:"IEEE University of Toronto Branch",
        title: "Web Associate",
        date: "Jan 2, 3037",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        cover: "/379.png",
    },
    {
        company: "Needlist.ORG",
        title: "Software Engineer Intern",
        date: "Jan 2, 3037",
        description: "this website, built with react + mui",
        cover: "/379.png",
    },
]
