import { Endpoints } from "@octokit/types";

export type NotificationResponse = Endpoints["GET /notifications"]["response"]["data"];
export type StarredResponse = Endpoints["GET /user/starred"]["response"]["data"];
export type StarredByUsersResponse = Endpoints["GET /users/{username}/received_events"]["response"]["data"];