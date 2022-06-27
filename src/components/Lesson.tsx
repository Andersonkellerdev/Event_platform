
import { isPast, format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import classNames from 'classnames'

interface LessonProps {
    title: string;
    slug: string
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

    const {slug} = useParams<{slug:string}>()

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt,"EEEE' • 'd' de 'MMMM' • 'k'h'mm",{
        locale: ptBR,
    })

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
               {availableDateFormatted}
            </span>

            <div
             className={`p-4 mt-2 border border-gray-500 rounded group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500':''}`}>
                
             <header className="flex items-center justify-between">
                    
                <strong className="block text-gray-200 mp-5">
                   {props.title}

                   </strong>
                   
                    {isLessonAvailable ? (
                        <span className={classNames('flex items-center text-sm font-medium', {
                            'text-white': isActiveLesson,
                            'text-blue-500': !isActiveLesson,
                         } )}>
                        <CheckCircle size={20}/>
                        Conteúdo liberado
                        </span>
                    ) : (
                        <span className="flex items-center text-sm font-medium text-orange-500">
                        <Lock size={20}/>
                        Em Breve
                        </span>
                    )
                    
                }
                    <span className={classNames('text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold', {
                      'border-white': isActiveLesson,
                       'border-green-300': !isActiveLesson, 
                    })}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                        </span>

                </header>

                        <strong className={classNames('mt-5 block', {
                            'text-white': isActiveLesson,
                            'text-gray-200': !isActiveLesson,
                        })}>
                            {props.title}
                        </strong>

            </div>
        </Link>
        )
    
}