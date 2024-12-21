"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const update = useCallback(
    (data: { name: string; value: string }[]) => {
      const params = new URLSearchParams(searchParams.toString());

      for (const { name, value } of data) {
        params.set(name, value);
      }

      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [router, pathname, searchParams]
  );

  const remove = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);

      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [router, pathname, searchParams]
  );

  return { update, remove, searchParams, pathname };
};
