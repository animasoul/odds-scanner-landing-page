import Image from 'next/image';
import Link from 'next/link';

function RegistrationForm() {
  return (
    <div className="rounded-lg bg-sky-800 pl-10 text-white-300 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex w-full flex-col items-stretch max-md:ml-0 md:w-[44%] ">
          <div className="my-auto flex flex-col items-stretch max-md:mt-10">
            <div className="text-2xl font-bold leading-8">
              Se cadastre e receba cupons de desconto para viajar
            </div>
            <label
              className="mt-6 whitespace-nowrap text-base font-medium leading-6"
              htmlFor="name"
            >
              Nome
            </label>

            <input
              type="text"
              id="name"
              aria-label="Insira o seu nome aqui"
              className="bg-white mt-2 w-full whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-medium leading-5 text-gray-500"
              placeholder="Insira o seu nome aqui"
              required
              aria-required="true"
            />

            <label
              className="mt-6 whitespace-nowrap text-base font-medium leading-6"
              htmlFor="email"
            >
              E-mail
            </label>

            <input
              type="email"
              id="email"
              aria-label="Insira o seu email aqui"
              className="bg-white mt-2 w-full whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-medium leading-5 text-gray-500"
              placeholder="Insira o seu email aqui"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              aria-required="true"
            />

            <div className="mt-7 flex items-center justify-between gap-4">
              <div>
                <input
                  type="checkbox"
                  id="privacy-policy"
                  aria-label="Aceito as Políticas de Privacidade e Concordo com os Termos de uso"
                  className="fill-white my-auto flex aspect-square flex-col items-stretch"
                  required
                  aria-required="true"
                />
              </div>
              <label
                className="shrink grow basis-auto self-stretch text-sm font-medium leading-5"
                htmlFor="privacy-policy"
              >
                <span className="font-semibold">Aceito as </span>
                <Link href="#" className="underline">
                  Políticas de Privacidade
                </Link>
                <span className="font-semibold"> e Concordo com os </span>
                <Link href="#" className="underline">
                  Termos de uso
                </Link>
              </label>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center rounded-md bg-amber-400 px-5 py-2.5">
              <div className="flex items-stretch gap-2">
                <div className="text-base font-semibold leading-6 text-neutral-900">
                  Planejar Minha Viagem
                </div>
                <a
                  href="..."
                  className="my-auto aspect-square w-5 max-w-full shrink-0 items-center justify-center self-center overflow-hidden object-contain object-center"
                >
                  <Image
                    src="/assets/images/514bcd48-64dd-4201-b296-62f7098a08ed.svg"
                    alt="Planejar Minha Viagem"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 hidden w-[56%] flex-col items-stretch max-md:ml-0 max-md:w-full md:flex">
          <Image
            src="/assets/images/Featured-Image-3.jpg"
            className="aspect-[1.11] w-full grow overflow-hidden object-contain object-center max-md:mt-10 max-md:max-w-full"
            alt="Image"
            width={532}
            height={480}
          />
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
