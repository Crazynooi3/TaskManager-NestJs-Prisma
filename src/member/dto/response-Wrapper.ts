import {ApiProperty} from "@nestjs/swagger";
import {MemberEntity} from "../entities/member.entity";

export class MemberResponse {
    @ApiProperty({example: "ok"})
    status: string;

    @ApiProperty({type: MemberEntity})
    data: MemberEntity;
}

export class MemberListResponse {
    @ApiProperty({example: "ok"})
    status: string;

    @ApiProperty({type: [MemberEntity]})
    data: MemberEntity[];
}
