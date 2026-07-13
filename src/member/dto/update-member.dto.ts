import {PartialType} from "@nestjs/swagger";
import {CreateMemberDto} from "./create-member.dto";
import {IsNotEmpty, IsString, MaxLength} from "class-validator";

export class UpdateMemberDto extends PartialType(CreateMemberDto) {
    /** The first name of the member */
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    first_name?: string | undefined;

    /** The first name of the member */
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    last_name?: string | undefined;
}
