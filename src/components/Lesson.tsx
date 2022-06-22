
import { isPast, format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from "phosphor-react";

interface LessonProps {
    title: string;
    slug: string
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt,"EEEE' • 'd' de 'MMMM' • 'k'h'mm",{
        locale: ptBR,
    })

    return (
        <a href="#">
            <span className="text-gray-300">
               {availableDateFormatted}
            </span>
            <div className="p-4 mt-2 border border-gray-500 rounded">
                <header className="flex items-center justify-between">
                    
                <strong className="block text-gray-200 mp-5">
                   {props.title}

                   </strong>
                   
                    {isLessonAvailable ? (
                        <span className="flex items-center text-sm font-medium text-blue-500">
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
                    <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold ">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                        </span>

                   

                </header>


            </div>
        </a>
    )
}