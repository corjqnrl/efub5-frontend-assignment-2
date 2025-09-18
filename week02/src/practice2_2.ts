// 1. 함수의 첫 번째 매개변수 타입을 추론하는 타입 완성하기
type FirstArg<T> = T extends (arg: infer A, ...args: any[]) => any ? A : never;

// 2. 테스트용 함수 타입들
type Fn1 = (name: string) => void;
type Fn2 = (x: number, y: string) => boolean;
type Fn3 = () => void;

// 3. 결과 타입 예측해보기
type A = FirstArg<Fn1>   // string
type B = FirstArg<Fn2>;  // number
type C = FirstArg<Fn3>;  // never