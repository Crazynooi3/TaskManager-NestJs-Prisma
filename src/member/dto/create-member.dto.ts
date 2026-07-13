import {IsNotEmpty, IsString, MaxLength} from "class-validator";

export class CreateMemberDto {
    /** The first name of the member */
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    first_name: string;

    /** The last name of the member */
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    last_name: string;
}
