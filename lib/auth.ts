import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const CLIENT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "change-this-secret-in-vercel-env"
);
const ADMIN_SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || "change-this-admin-secret-in-vercel-env"
);

export async function signClientToken(email: string) {
  return new SignJWT({ email, role: "client" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(CLIENT_SECRET);
}

export async function signAdminToken() {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("12h")
    .sign(ADMIN_SECRET);
}

export async function verifyClientToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, CLIENT_SECRET);
    return payload as { email: string; role: string };
  } catch {
    return null;
  }
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, ADMIN_SECRET);
    return payload as { role: string };
  } catch {
    return null;
  }
}

export async function getClientSession() {
  const token = cookies().get("client_session")?.value;
  if (!token) return null;
  return verifyClientToken(token);
}

export async function getAdminSession() {
  const token = cookies().get("admin_session")?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}
