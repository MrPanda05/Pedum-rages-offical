import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { createElement } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
//import bootstrap from 'bootstrap'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pedum-rages</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div>
          <h1 className=''>Bem vindo</h1>
          <p>
            Bem-vindo ao Pedum rages. Você escolheu, ou foi escolhido, para ter acess ao uns dos melhores sites do universo.
            Eu pensei muito sobre Pedum rages que eu mesmo estabeleci como ADM, nesse site muito bem pensado pelos nossos colaboradores.
            Eu tenho orgulho de dizer que Pedum rages é o meu site. E se você está aqui para ficar, ou somente dar uma olhada, você é
            sempre bem-vindo! Lembre-se:&quot;Tilta não, jájá tem mais&quot;-Tejano, Paulofdfffff
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
