import Image from 'next/image';

type IComparisonCardProps = {
  offerNumber?: number;
  melhorOferta?: boolean;
  nomeAgencia?: string;
  imageAgencia?: string;
  notaAgencia?: string;
  notaAgenciaBold?: string;
  rating?: string;
};

export const ComparisonCard = (props: IComparisonCardProps) => (
  <article className="relative flex flex-col items-start self-stretch rounded-t-3xl border border-solid border-[color:var(--neutral-200,#E6E9ED)] hover:border-[#5ac6dd]">
    <section className="bg-white flex w-full flex-col rounded-lg p-3 pb-5">
      <div
        aria-label="Number of offers"
        className="absolute left-[-0.375rem]  top-[-0.375rem] z-10 flex h-6 w-6 shrink-0 justify-center rounded-full border border-[#e6e9ed] bg-white-300 p-0.5 pb-2 pt-px text-center text-sm leading-5 text-gray-500"
      >
        {props.offerNumber && <>{props.offerNumber}</>}
      </div>
      <div className="flex justify-between gap-5 max-md:flex-wrap max-md:justify-center">
        <div className=" flex items-center gap-4 self-center">
          <Image
            loading="lazy"
            src={props.imageAgencia?.toString() ?? ''}
            className="my-auto aspect-square w-16 shrink-0 items-center justify-center overflow-hidden rounded-full object-contain object-center"
            alt="Offer image"
            width={64}
            height={64}
          />
          <div className="flex basis-2 flex-col justify-center py-px">
            {props.melhorOferta && (
              <div className="h-5 whitespace-nowrap rounded-sm bg-sky-800 bg-opacity-10 px-1.5 py-0.5 text-xs font-bold uppercase leading-4 text-sky-800">
                Melhor OferTA
              </div>
            )}

            <div className="mt-1.5 whitespace-nowrap text-base font-semibold leading-5 text-neutral-900">
              {props.nomeAgencia && <>{props.nomeAgencia}</>}
            </div>
            <div className="mt-1 flex justify-between gap-2">
              <Image
                loading="lazy"
                src="/assets/images/rating-icon.svg"
                className="aspect-square w-5 shrink-0 items-center justify-center overflow-hidden object-contain object-center"
                alt="Rating"
                width={20}
                height={20}
              />
              <div className="grow whitespace-nowrap text-center text-sm font-semibold leading-5 text-gray-500">
                {props.rating && <>{props.rating}</>}
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex items-center gap-4 
         max-md:flex-wrap"
        >
          <Image
            loading="lazy"
            src="/assets/images/ba1f4ecc-224f-4492-8653-5a583baa721d.svg"
            className="my-auto hidden aspect-square w-12 
             shrink-0 overflow-hidden object-contain object-center md:block"
            alt="Payment options"
            width={48}
            height={48}
          />
          <div className="flex grow basis-0 flex-col justify-center text-center md:text-left">
            <div className="mb-3 rounded border border-white-200 p-3 text-lg font-semibold leading-6 text-neutral-900 md:mb-0 md:border-none md:p-0">
              {props.notaAgencia && <>{props.notaAgencia}</>}
              {props.notaAgenciaBold && (
                <span className="font-bold">{props.notaAgenciaBold}</span>
              )}
            </div>
            <div className="hidden w-[110px] justify-center gap-2 rounded border border-dashed border-[color:var(--neutral-200,#E6E9ED)] py-2 pl-2.5 pr-2 md:flex">
              <Image
                loading="lazy"
                src="/assets/images/d25d0c78-075a-442c-8c9d-d50dae5c08b8.svg"
                className="aspect-square w-4 shrink-0 items-center justify-center overflow-hidden object-contain object-center"
                alt="Promo code"
                width={16}
                height={16}
              />
              <div className="grow whitespace-nowrap text-xs font-semibold leading-4 text-sky-800">
                VOYAJER2023
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="my-auto text-xs leading-4 text-gray-500">
                Métodos de Pagamento:
              </div>
              <Image
                loading="lazy"
                src="/assets/images/payments-icon.svg"
                className="aspect-[4.25] w-[85px] shrink-0 items-center overflow-hidden object-contain object-center"
                alt="Payment methods"
                width={85}
                height={20}
              />
            </div>
          </div>
        </div>
        <button className="my-auto flex w-full justify-center gap-2 self-center rounded-md bg-amber-400 px-7 py-2.5 hover:bg-[#ffcc23]/[.80] max-md:px-5 md:w-auto">
          <a
            href="..."
            className="text-base font-semibold leading-6 text-neutral-900"
          >
            Planejar Minha Viagem
          </a>
          <Image
            loading="lazy"
            src="/assets/images/514bcd48-64dd-4201-b296-62f7098a08ed.svg"
            className="my-auto aspect-square w-5 shrink-0 items-center justify-center self-center overflow-hidden object-contain object-center"
            alt="Arrow icon"
            width={20}
            height={20}
          />
        </button>
      </div>
    </section>
    <section className="w-full  rounded-none bg-gray-200 px-4 py-3.5 text-xs leading-4 text-neutral-900 ">
      Cumpra as restrições e regulamentações locais do país, pois variam de
      estado para estado e de país para país.
    </section>
  </article>
);
