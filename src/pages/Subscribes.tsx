
import { useState, FormEvent } from "react";
import { Icon } from "../components/Icon";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";
import imgUrl from '../../src/assests/cold-mockup.png'




export function Subscribles () {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, {loading}] = useCreateSubscriberMutation()

    async function handleSubscribes(event: FormEvent){
            event?.preventDefault()
            console.log(name, email)

           await createSubscriber({
                variables: {
                    name,
                    email,
                }
            })
            navigate  ('/event' )
        }
    return (
       <div className="flex flex-col min-h-screen bg-no-repeat bg-cover bg-blur itens-center">
            <div className="w-full max-w-[1100px] flex itens-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Icon/>
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                    Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, <strong className="text-blue-500">com React JS</strong>
                    </h1>
                    <p className="mt-4 leading-relaxed text-gray-200">
                    Em apenas uma semana você vai dominar 
                    na prática uma das tecnologias mais utilizadas 
                    e com alta demanda para acessar as melhores 
                    oportunidades do mercado.
                    </p>

                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="block mb-6 text-2xl">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscribes} className="flex flex-col w-full gap-2">
                        <input className="px-5 bg-gray-900 rounded h-14 " 
                        type="text"
                        placeholder="Seu nome completo"
                        onChange={event => setName(event.target.value)}
                        />
                        <input className="px-5 bg-gray-900 rounded h-14 "
                        type="email"
                        placeholder="Digite seu email"
                        onChange={event => setEmail(event.target.value)}
                        />    
                        <button
                            type="submit"
                            disabled={loading}
                            className="py-4 mt-4 text-sm font-bold uppercase bg-green-500 rounded disabled:opacity-50 hover:bg-green-700 transition-color">

                                Garantir minha vaga

                        </button>
                    </form>
                </div>
            </div>
            
            <img src={imgUrl} className="mt-10" alt=""/>
       </div>
    )
}
