import {ApiProperty} from "@nestjs/swagger";
import {Prisma} from "@prisma/client";
import {IsNotEmpty, IsString, MaxLength} from "class-validator";

export class CreateMemberDto implements Prisma.MemberCreateInput {
    /** The first name of the member */
    @ApiProperty({example: "{{$randomFirstName}}"})
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    firstName: string;

    /** The last name of the member */
    @ApiProperty({example: "{{$randomLastName}}"})
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    lastName: string;
}
