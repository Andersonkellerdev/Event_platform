import { DefaultUi, Player, Youtube } from "@vime/react";
import {gql, useQuery }from '@apollo/client';
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css'

const GET_LESSON_BY_SLUG_QUERY = gql `
    query GetLessonBySlug($slug : String) {
  lesson(where: {slug: $slug}) {
    description
    videoId
    title
    teacher {
      name
      bio
      avatarURL
    }
  }
}

`

interface GetLessonBySlugResponse {
    lesson: {
        //key: string;
        title: string;
        videoID: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
    }
}

interface VideoProps {
    lessonSlug: string;
}

export function Video(props : VideoProps) {
    const {data} = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
            variables: {
                slug: props.lessonSlug,
            }
    })

    if (!data){
        return (
            <div className="flex-1">
                <p>Carregando...</p>

            </div>
        )
    }
    return (
        <div className="flex-1">
            <div className="flex justify-center bg-black">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoID}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>
            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 leading-relaxed text-gray-200">
                           {data.lesson.description}
                             </p>
                             <div className="flex items-center gap-4 mt-6">
                                <img 
                                    className="w-16 h-16 border-2 border-blue-500 rounded-full"
                                    src={data.lesson.teacher.avatarURL}
                                    alt=""
                                    />
                             </div>
                             <div className="leading-relaxed">
                                <strong className="block text-2xl font-bold">{data.lesson.teacher.name}</strong>
                                <span className="block text-sm text-gray-200">{data.lesson.teacher.bio}</span>
                             </div>

                    </div>
                   

                <div className="flex flex-col gap-4">
                    <a href="" className="flex items-center justify-center gap-2 p-4 font-bold uppercase bg-green-500 rounded text-small hover:bg-green-700 transition-color">
                        <DiscordLogo size={24}/>
                        Comunidade do Discord
                    </a>
                    <a href="" className="flex items-center justify-center gap-2 p-4 font-bold text-blue-500 uppercase border-blue-500 rounded text-small hover:bg-blue-500 hover:text-gray-900 transition-color">
                        <Lightning size={24}/>
                        Acesse o desafio
                    </a>

                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-20">
                <a href="" className="flex items-stretch gap-6 overflow-hidden transition-colors bg-gray-700 rounded hover:bg-gray-600">
                    <div className="flex items-center h-full p-6 bg-green-700">
                        <FileArrowDown size={40} />
                    </div>
                    <div className="py-6 leading-relaxed">
                        <strong className="text-2xl">Material complementar</strong>
                        <p className="mt-2 text-sm text-gray-200">
                            Acesse o material complementar para acelerar o seu desenvolvimento
                        </p>
                    </div>
                    <div className="flex items-center h-full p-6">
                        <CaretRight size={24}/>
                        </div>
                </a>

                <a href="" className="flex items-stretch gap-6 overflow-hidden transition-colors bg-gray-700 rounded hover:bg-gray-600">
                    <div className="flex items-center h-full p-6 bg-green-700">
                        <FileArrowDown size={40} />
                    </div>
                    <div className="py-6 leading-relaxed">
                        <strong className="text-2xl">Wallpapers exclusivos</strong>
                        <p className="mt-2 text-sm text-gray-200">
                        Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                        </p>
                    </div>
                    <div className="flex items-center h-full p-6">
                        <CaretRight size={24}/>
                        </div>
                </a>
            </div>
        </div>
        </div>
    )
}