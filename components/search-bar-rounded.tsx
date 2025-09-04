"use client"

import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from "use-debounce";

export default function SearchBarRounded() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
    }, 600)

    return (
        <div className="relative inline-block">
            <input
                type="text"
                aria-label="Search for a pokèmon"
                placeholder="Search for a pokèmon..."
                className="py-2 px-4 w-[400px] border"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            defaultValue={searchParams.get('query')?.toString()}
            />
            <Image
                src="/Search.svg"
                alt="Search icon"
                width={50}
                height={50}
                className="absolute dark:invert opacity-25 mt-[3px] right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
            />
        </div>
    )
}