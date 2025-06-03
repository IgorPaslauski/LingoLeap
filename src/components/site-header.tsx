import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookText, Home, Brain } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/home" className="flex items-center space-x-2 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
          <span className="font-headline text-xl font-bold text-primary">
            LingoLeap
          </span>
        </Link>
        <nav className="flex items-center space-x-1">
          <Button variant="ghost" asChild>
            <Link href="/home" className="flex items-center space-x-1">
              <Home className="h-4 w-4" />
              <span>Início</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link
              href="/home/selecao-topicos"
              className="flex items-center space-x-1"
            >
              <BookText className="h-4 w-4" />
              <span>Quiz</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link
              href="/home/tutor-gramatical"
              className="flex items-center space-x-1"
            >
              <Brain className="h-4 w-4" />
              <span>Tutor IA</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
