import { readdir } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

async function getImagesByFolder(dir: string): Promise<Record<string, string[]>> {
  const entries = await readdir(dir, { withFileTypes: true });
  const result: Record<string, string[]> = {};

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const folderPath = path.join(dir, entry.name);
      const files = await readdir(folderPath, { withFileTypes: true });
      const imageFiles = files
        .filter(f => f.isFile())
        .map(f => `/images/${entry.name}/${f.name}`);
      result[entry.name] = imageFiles;
    }
  }

  return result;
}

export async function GET() {
  const dir = path.join(process.cwd(), "public/images");
  const imagesByFolder = await getImagesByFolder(dir);
  return NextResponse.json({ images: imagesByFolder });
}
