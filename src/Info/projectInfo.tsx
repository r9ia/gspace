//all projects have the following info about them
export interface ProjectInterface {
    title: string
    date: string
    tags: string
    description: string
    cover?: string //represneting what will be passed into the src tag
    links?: ProjectLink[] //array of links to access more info
}

export interface ProjectLink {
    label: string
    url: string
}

export const PROJECTS: ProjectInterface[] = [
   
    {
        title: "Reparo",
        date: "March 2026",
        tags: "Computer Vision, Swift, Agentic AI, Gemini API,  SerpAPI",
        description: "Hack Canada Winner - 1st Place Reactiv Track ($5000 prize) + Most Technically Complex Agentic AI Hack Finalist. Computer vision powered repair assistant that identifies broken components from an image, generates a repair plan, and automatically finds the parts needed to complete the repair. I implemented SerpAPI which assists with finding item listings of parts, tuned towards the user's needs.  ",
        cover: "covers/reparo.png",
        links: [
            {
                label: "GitHub",
                url: "https://github.com/Karan-Gupta07/RepairBOT"
            },
            {
                label: "Devpost",
                url: "https://devpost.com/software/reparo"
            }
        ]
    },
    {
        title: "VOXIO",
        date: "Jan 2025",
        tags: "Javascript, HTML, CSS",
        description: "One of the first websites I've ever worked on: a showcase site for VOXIO, a computer vision hack that assists the Deaf community with communication by detecting sign language. Made for DeltaHacks 2025.",
        cover: "covers/voxio.png",
        links: [
            {
                label: "GitHub",
                url: "https://github.com/r9ia/voxio"
            },
            {
                label: "Website",
                url: "https://r9ia.github.io/voxio/"
            }
        ]
    }
]

export function getProjectByTitle(title?: string): ProjectInterface | undefined {
    if (!title) return undefined
    return PROJECTS.find(
        p => p.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
    )
}