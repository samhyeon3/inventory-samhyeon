import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

// Neon 데이터베이스 연결 설정
// 이 sql 객체를 사용하여 데이터베이스 쿼리를 실행할 수 있습니다.
export const sql = neon(process.env.DATABASE_URL);
