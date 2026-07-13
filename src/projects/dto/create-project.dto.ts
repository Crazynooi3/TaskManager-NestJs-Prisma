import {ProjectStatus} from "@prisma/client";
import {IsString, IsEnum, IsOptional, IsNotEmpty, MaxLength} from "class-validator";

export class CreateProjectDto {
    /** The name of the project */
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    name: string;

    /** Current status of the project */
    @IsEnum(ProjectStatus)
    @IsOptional()
    status?: ProjectStatus;
}
