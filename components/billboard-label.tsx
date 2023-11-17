import { Dosis } from 'next/font/google'

const font = Dosis({
  weight: '400',
  subsets: ['latin'],
})

export default function BillboardLabel({ text }: { text: string }) {
  return (
    <div className={`${font.className} font-bold uppercase text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs billboard-text`}>
      {text}
    </div >
  );
}
