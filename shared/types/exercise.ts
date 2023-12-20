
export enum ActivityType {
    REPS = "reps",
    TIME = "time"
}

export interface Exercise {
    name: string;
    description: string;
    type: ActivityType;
    duration: number;
}