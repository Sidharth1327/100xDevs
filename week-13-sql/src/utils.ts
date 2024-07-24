import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:0HV4iPcINfKB@ep-patient-snow-a1pnxuof.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}