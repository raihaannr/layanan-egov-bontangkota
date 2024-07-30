import { PrismaClient, Pemesanan, User } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

type CacheValue<T> = {
  value: T;
  expires: number;
};

const cache = new Map<string, CacheValue<any>>();

const setCache = <T>(key: string, value: T, ttl = 60000): void => {
  const expires = Date.now() + ttl;
  cache.set(key, { value, expires });
};

const getCache = <T>(key: string): T | null => {
  const cached = cache.get(key);
  if (cached && cached.expires > Date.now()) {
    return cached.value;
  }
  cache.delete(key);
  return null;
};

export const getPemesanan = async (): Promise<Pemesanan[]> => {
  const cacheKey = 'getPemesanan';
  const cached = getCache<Pemesanan[]>(cacheKey);
  if (cached) return cached;

  try {
    const result = await prisma.pemesanan.findMany({
      orderBy: { createdAt: "desc" },
    });
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getPemesananById = async (id: string): Promise<Pemesanan | null> => {
  const cacheKey = `getPemesananById_${id}`;
  const cached = getCache<Pemesanan>(cacheKey);
  if (cached) return cached;

  try {
    const result = await prisma.pemesanan.findUnique({
      where: { id },
      include: { user: true },
    });
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getUsers = async (): Promise<User[]> => {
  const cacheKey = 'getUsers';
  const cached = getCache<User[]>(cacheKey);
  if (cached) return cached;

  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
    setCache(cacheKey, users);
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getUsersById = async (id: string): Promise<User | null> => {
  const cacheKey = `getUsersById_${id}`;
  const cached = getCache<User>(cacheKey);
  if (cached) return cached;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    setCache(cacheKey, user);
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

export const updateUserRole = async (id: string, role: string): Promise<User> => {
  const cacheKey = `getUsersById_${id}`;
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { role },
    });
    cache.delete(cacheKey); // Invalidate cache
    return updatedUser;
  } catch (error) {
    throw new Error("Failed to update user role");
  }
};

export const updateUser = async (id: string, data: { name: string; email: string }): Promise<User> => {
  const cacheKey = `getUsersById_${id}`;
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data,
    });
    cache.delete(cacheKey); // Invalidate cache
    return updatedUser;
  } catch (error) {
    throw new Error("Failed to update user");
  }
};

export const getUserCount = async (): Promise<number> => {
  const cacheKey = 'getUserCount';
  const cached = getCache<number>(cacheKey);
  if (cached) return cached;

  try {
    const count = await prisma.user.count();
    setCache(cacheKey, count);
    revalidatePath("/dashboard-admin");
    return count;
  } catch (error) {
    throw new Error("Failed to fetch user count");
  }
};

export const getDiajukanPemesananCount = async (): Promise<number> => {
  const cacheKey = 'getDiajukanPemesananCount';
  const cached = getCache<number>(cacheKey);
  if (cached) return cached;

  try {
    const count = await prisma.pemesanan.count({
      where: { status: "Diajukan" },
    });
    setCache(cacheKey, count);
    return count;
  } catch (error) {
    throw new Error("Failed to fetch pending pemesanan count");
  }
};
