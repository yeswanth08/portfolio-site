import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return [];
};

export default function NotFoundCatchAll() {;
    return notFound();;
};
