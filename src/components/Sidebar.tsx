import { Lesson } from "./Lesson";
import {gql, useQuery }from '@apollo/client'
import { lexicographicSortSchema } from "graphql";

const GET_LESSONS_QUERY = gql`
 query MyQuery {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    availableAt
    id
    lessonType
    slug
    title
  }
} 

`
interface GetLessonsQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    }[]
}


export function Sidebar() {

    const {data} = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="block pb-6 mb-6 font-bold border-b border-gray-500 tect-2xl">
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