import {ApiProperty} from "@nestjs/swagger";
import {ProjectEntity} from "./projects/entities/project.entity";

export class ProjectResponse {
    @ApiProperty({example: "ok"})
    status: string;

    @ApiProperty({type: ProjectEntity})
    data: ProjectEntity;
}
