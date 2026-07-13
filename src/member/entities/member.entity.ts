import {ApiProperty} from "@nestjs/swagger";

export class MemberEntity {
    @ApiProperty({example: "1"})
    id: bigint;

    @ApiProperty({example: "John"})
    firstName: string;

    @ApiProperty({example: "Doe"})
    lastName: string;
}
