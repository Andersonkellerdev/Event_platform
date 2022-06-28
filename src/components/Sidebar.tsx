import { Lesson } from "./Lesson";
import {gql, useQuery }from '@apollo/client'
import { lexicographicSortSchema } from "graphql";
import { CodegenExtension } from "@graphql-codegen/cli";
import { useGetLessonsQuery } from "../graphql/generated";



export function Sidebar() {

    const {data} = useGetLessonsQuery()
    return (
        <aside className="w-[438px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="block pb-6 mb-6 text-2xl font-bold border-b border-gray-500">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}

                />
                    )
                })}
                
            </div>
        </aside>
    )
}