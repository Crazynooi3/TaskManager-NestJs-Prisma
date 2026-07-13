import {PrismaService} from "@/prisma.service";
import {Injectable} from "@nestjs/common";
import {CreateMemberDto} from "./dto/create-member.dto";
import {UpdateMemberDto} from "./dto/update-member.dto";

@Injectable()
export class MemberService {
    constructor(private prisma: PrismaService) {}

    create(createMemberDto: CreateMemberDto) {
        return this.prisma.member.create({data: createMemberDto});
    }

    findAll() {
        return this.prisma.member.findMany();
    }

    findOne(id: bigint) {
        return this.prisma.member.findUnique({where: {id}});
    }

    findByFirstName(firstName: string) {
        return this.prisma.member.findMany({where: {firstName}});
    }

    update(id: bigint, updateMemberDto: UpdateMemberDto) {
        return this.prisma.member.update({where: {id}, data: updateMemberDto});
    }

    remove(id: bigint) {
        return this.prisma.member.delete({where: {id}});
    }
}
