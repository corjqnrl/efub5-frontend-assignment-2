"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//제네릭을 이용해 매개변수 타입을 나타내어 불필요한 타일 좁히기를 없애주세요
function goToSchool(user) {
    if (user.profile.type !== 'student') {
        console.log('잘 못 오셨습니다');
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
