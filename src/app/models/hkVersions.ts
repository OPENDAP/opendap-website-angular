export class HKVersion {
    self: string;
    id: string;
    name: string;
    archived: boolean;
    released: boolean;
    startDate: string;
    releaseDate: string;
    userStartDate: string;
    userReleaseDate: string;
    projectId: number;
}

export class HKVersionResponse {
    statusCode: number;
    body: HKVersion[];
}
