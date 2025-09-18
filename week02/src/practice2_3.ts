// 현재 User 인터페이스는 모든 속성이 필수입니다
interface User {
  name: string;
  age: number;
  email: string;
}

// (1) 다음 변수 user1은 name만 가진 객체입니다
// user1이 오류 없이 동작하도록 타입을 완성해주세요
const user1: Partial<User> = {
  name: 'Alice',
};

// 다음 함수는 모든 필드를 필수로 채운 사용자 객체만 받습니다
// user2가 통과하도록 타입을 완성해주세요
const user2 = {
  name: 'Bob',
  age: 25,
  email: 'bob@example.com',
};

function register(user: Required<User>) {
  console.log('Registering', user);
}
register(user2);

const user3: Readonly<User>  = {
  name: 'Charlie',
  age: 40,
  email: 'charlie@example.com',
};

user3.age = 41;
