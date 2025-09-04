import React from 'react'
interface TypeBadgeProps {
    name?: string;
    id?: number;
}


export default function TypeBadge({ name }: TypeBadgeProps) {
    return (
        <span className={`badge badge-${name}`}>
            {name}
        </span>
    )
}

export function TypeId({ name, id }: TypeBadgeProps) {
    return (
        <span className={`id id-${name}`}>
            {`#${id}`}
        </span>
    )
}

export function TypeBorder({ name }: TypeBadgeProps) {
    return "className={`border border-${name}`"
}