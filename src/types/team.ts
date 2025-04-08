import { StaticImageData } from "next/image";

interface ITeamMemberLink {
    url: string;
    color: string;
    icon: "instagram" | "linkedin" | "github"
}

export interface ITeamMember {
    image: StaticImageData;
    name: string;
    jobTitle: string;
    bio: string;
    links: ITeamMemberLink[];
}

