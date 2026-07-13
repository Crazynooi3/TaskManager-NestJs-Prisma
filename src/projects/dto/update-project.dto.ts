import {PartialType} from "@nestjs/mapped-types";
import {CreateProjectDto} from "./create-project.dto";
import {$Enums, ProjectStatus} from "@prisma/client";
import {IsEnum, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    name?: string | undefined;
    @IsEnum(ProjectStatus)
    status?: $Enums.ProjectStatus | undefined;
}
