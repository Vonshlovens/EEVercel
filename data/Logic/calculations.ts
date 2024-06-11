import PerformanceClass from "@/data/types/Performance.ts";
import PointsData from '../../public/WorldAthletics.json';

const data = (PointsData as PerformanceClass[])
export function findPerformance(points: number, gender: string, category: string, event: string): PerformanceClass {
    var ID = UUID();
    try {
        let foundItem = data.filter((item: PerformanceClass) =>
        item.Points == points &&
        item.Gender == gender &&
        item.Category == category &&
        item.Event == event
        )[0];
        if (foundItem == undefined && points >= 1) {
            foundItem = findPerformance(points - 1, gender, category, event);
        }
        foundItem.ID = ID;
        return foundItem;
    } catch (error) {
        console.log("The was an error searching for the performance");
        var perf: PerformanceClass = { Gender: "", Points: 0, Event: "", Mark: 0, MarkTime: "", Category: "", ID :ID}
        return perf;
    }
}

//works for times will need to adjust it for other events which use distance and heights
export function findPoints(performance: number, gender: string, category: string, event: string): PerformanceClass {
    var ID = UUID();
    try {
        var perf: PerformanceClass = { Gender: "", Points: 0, Event: "", Mark: 0, MarkTime: "", Category: "", ID: ID }
        var foundItem = data.filter((item: PerformanceClass) =>
        item.Mark == performance &&
        item.Gender == gender &&
        item.Category == category &&
        item.Event == event
        )[0];
        if (foundItem == undefined && performance > 0.00) {
            performance = Number((performance - 0.01).toFixed(2));
            foundItem = findPoints(performance, gender, category, event);
        }
        if (foundItem == undefined) {
            return perf;
        }
        foundItem.ID = ID;
        return foundItem;
    } catch (error) {
        console.log("There was an error - Performance out of range")
        error = "There was an error - Performance out of range";
        var perf: PerformanceClass = { Gender: "", Points: 0, Event: "", Mark: 0, MarkTime: "", Category: "", ID: ID }
        return perf;
    }
}

export function UUID (): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
