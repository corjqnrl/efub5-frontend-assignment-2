// 1. 권한 키 정의 
type Permission = 'read' | 'write' | 'delete';

// 2. 사용자 역할 정의 
type Role = 'guest' | 'user' | 'admin';

// 3. Role 별 권한 설정
type RolePermissions = Record<Role, Permission[]>;

const permissions: RolePermissions = {
  guest: ['read'],
  user: ['read', 'write'],
  admin: ['read', 'write', 'delete'],
};

// 4. 유저 타입
interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  password: string;
  createdAt: string;
}

// 5. 클라이언트에 보여줄 유저 정보 정의
// (비밀번호, 생성일자는 제외하고 공개할 필드만 추출)
type PublicUser = Pick<User, "id" | "name" | "email" | "role">;

// 6. 관리자 전용 유저 정보 타입(email, password 제외)
type AdminViewUser = Omit<User, "email" | "password">;
