"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Icons } from "./ui/icons";
import { Input } from "./ui/input";

const slugSchema = z
  .string()
  .regex(/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/)
  .min(3);

export default function HomeForm() {
  const [slug, setSlug] = useState("");
  const [validSlug, setValidSlug] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      slugSchema.parse(slug);
      setValidSlug(true);
    } catch {
      setValidSlug(false);
    }
  }, [slug]);

  return (
    <div className="flex items-center gap-2">
      <Input
        className="w-[200px]"
        placeholder="example-stream"
        type="text"
        value={slug}
        onChange={(e) => {
          setSlug(e.target.value);
        }}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button disabled={!validSlug} variant="secondary">
            Join as host
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="flex items-center gap-2"
            onClick={() => router.push(`/setup?channel=${slug}`)}
          >
            <Icons.uploadCloud className="h-4 w-4" />
            Broadcast via LKC Ingress
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center gap-2"
            onClick={() => router.push(`/channel/${slug}/host`)}
          >
            <Icons.webcam className="h-4 w-4" />
            Broadcast from current device
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        disabled={!validSlug}
        variant="secondary"
        onClick={() => router.push(`/channel/${slug}`)}
      >
        Join as viewer
      </Button>
    </div>
  );
}
