import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "../components/Logo";

import { useCreateSubscribeMutation } from "../graphql/generated";

import imgUrl from '../assets/code-mockup.png'

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscribeMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event')
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight]">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed]">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="block mb-6 text-2xl">Inscreva-se gratuitamente</strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col w-full gap-2"
          >
            <input
              type="text"
              placeholder="Seu nome completo"
              className="px-5 bg-gray-900 rounded h-14"
              onChange={event => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="px-5 bg-gray-900 rounded h-14"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="py-4 mt-4 text-sm font-bold uppercase transition-colors bg-green-500 rounded disabled:opacity-50 hover:bg-green-700"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img
        alt="Code Mockup"
        src={imgUrl}
        className="mt-8"
      />
    </div>
  );
}