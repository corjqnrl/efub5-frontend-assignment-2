// 1. 알림 핸들러 타입 정의
type NotificationHandler = 
  | { type: "email"; handler: () => { success: true; to: string } }
  | { type: "sms"; handler: () => { sent: true; number: string } }
  | { type: "push"; handler: () => { delivered: boolean } }
  | { type: "slack"; handler: () => { ok: boolean; channel: string } };

// 2. 이메일 알림만 추출
type EmailHandler = Extract<NotificationHandler, { type: "email" }>;

// 3. push 알림을 제외한 나머지 추출
type NonPushHandlers = Extract<NotificationHandler, { type: "push" }>;