interface Performance {
    Points:number | null;
    Gender:string | null;
    Event:string | null;
    Category:string | null;
    Mark:number | null;
    MarkTime: string | null;
}

interface Event {
    Event:string;
}

interface Gender {
    Value:number;
    Name:string;
}

interface Category {
    Value:number;
    Name:string;
}
