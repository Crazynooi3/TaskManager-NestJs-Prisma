import {Controller, Get, Post, Body, Patch, Param, Delete} from "@nestjs/common";
import {MemberService} from "./member.service";
import {CreateMemberDto} from "./dto/create-member.dto";
import {UpdateMemberDto} from "./dto/update-member.dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {MemberListResponse, MemberResponse} from "./dto/response-Wrapper";

@Controller("member")
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    @Post()
    @ApiOperation({summary: "Create a new project"})
    @ApiResponse({status: 201, type: MemberResponse, description: "Member created successfully"})
    create(@Body() createMemberDto: CreateMemberDto) {
        return this.memberService.create(createMemberDto);
    }

    @Get()
    @ApiOperation({summary: "Get All member List"})
    @ApiResponse({status: 200, type: MemberListResponse})
    findAll() {
        return this.memberService.findAll();
    }

    @Get(":id")
    @ApiOperation({summary: "Get member with ID"})
    @ApiResponse({status: 200, type: MemberResponse})
    findOne(@Param("id") id: string) {
        return this.memberService.findOne(BigInt(id));
    }

    @Get()
    findByFirstName(@Body() updateMemberDto: UpdateMemberDto) {
        return;
    }

    @Patch(":id")
    @ApiOperation({summary: "Update member with ID + name and last name"})
    @ApiResponse({status: 200, type: MemberResponse})
    update(@Param("id") id: string, @Body() updateMemberDto: UpdateMemberDto) {
        return this.memberService.update(BigInt(id), updateMemberDto);
    }

    @Delete(":id")
    @ApiOperation({summary: "Delete member"})
    remove(@Param("id") id: string) {
        return this.memberService.remove(BigInt(id));
    }
}
