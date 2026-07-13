// entities/project.entity.ts
import {ApiProperty} from "@nestjs/swagger";
import {ProjectStatus} from "@prisma/client";

export class ProjectEntity {
    @ApiProperty({example: "1"})
    id: bigint;

    @ApiProperty({example: "My Project"})
    name: string;

    @ApiProperty({enum: ProjectStatus, example: ProjectStatus.Active})
    status: ProjectStatus;
}
