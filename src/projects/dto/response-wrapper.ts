import {ApiProperty} from "@nestjs/swagger";
import {ProjectEntity} from "../entities/project.entity";

export class ProjectResponse {
    @ApiProperty({example: "ok"})
    status: string;

    @ApiProperty({type: ProjectEntity})
    data: ProjectEntity;
}

export class ProjectListResponse {
    @ApiProperty({example: "ok"})
    status: string;

    @ApiProperty({type: [ProjectEntity]})
    data: ProjectEntity[];
}
