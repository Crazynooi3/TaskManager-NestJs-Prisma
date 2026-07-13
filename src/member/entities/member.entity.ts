import {ApiProperty} from "@nestjs/swagger";

export class MemberEntity {
    @ApiProperty({example: "1"})
    id: bigint;

    @ApiProperty({example: "My first name"})
    first_name: string;

    @ApiProperty({example: "My first name"})
    last_name: string;
}
