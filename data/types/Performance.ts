export default class PerformanceClass {
    Points: number | null;
    Gender: string | null;
    Event: string | null;
    Category: string | null;
    Mark: number | null;
    MarkTime: string | null;
    ID:string | null;

    constructor(
        points: number | null,
        gender: string | null,
        event: string | null,
        category: string | null,
        mark: number | null,
        markTime: string | null,
        ID : string | null
    ) {
        this.Points = points;
        this.Gender = gender;
        this.Event = event;
        this.Category = category;
        this.Mark = mark;
        this.MarkTime = markTime;
        this.ID = ID
    }
}
