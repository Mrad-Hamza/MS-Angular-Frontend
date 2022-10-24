import { Event } from "./Event";

export class CampaignMarketing {
    _id !: number;
    type !: string;
    startDate !: Date;
    endDate !: string;
    canal !: string;
    events !: Event[];
    name?: String;
}
