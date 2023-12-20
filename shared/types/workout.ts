import { Activity } from "./activity";
import { Exercise } from "./exercise";

export interface Workout {
    _id: string;
    name: string;
    description: string;
    exercises: {
        exercise: Exercise;
        pauseBetweenSets: number;
        numberOfSets: number;
    }[];
    user: string;
}