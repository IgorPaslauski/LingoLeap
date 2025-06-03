
import { Award, TrendingUp, UserCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface RankingEntry {
  id: string;
  name: string;
  score: number;
  avatarUrl?: string;
  avatarFallback: string;
  rank: number;
}

const mockRankingData: RankingEntry[] = [
  {
    id: "1",
    name: "Ana Silva",
    score: 2850,
    avatarUrl: "https://placehold.co/40x40.png",
    avatarFallback: "AS",
    rank: 1,
  },
  {
    id: "2",
    name: "Carlos Oliveira",
    score: 2700,
    avatarUrl: "https://placehold.co/40x40.png",
    avatarFallback: "CO",
    rank: 2,
  },
  {
    id: "3",
    name: "Mariana Costa",
    score: 2650,
    avatarFallback: "MC",
    rank: 3,
  },
  {
    id: "4",
    name: "João Pereira",
    score: 2500,
    avatarUrl: "https://placehold.co/40x40.png",
    avatarFallback: "JP",
    rank: 4,
  },
  {
    id: "5",
    name: "Beatriz Santos",
    score: 2400,
    avatarUrl: "https://placehold.co/40x40.png",
    avatarFallback: "BS",
    rank: 5,
  },
  {
    id: "6",
    name: "Lucas Almeida",
    score: 2350,
    avatarFallback: "LA",
    rank: 6,
  },
  {
    id: "7",
    name: "Sofia Rodrigues",
    score: 2200,
    avatarUrl: "https://placehold.co/40x40.png",
    avatarFallback: "SR",
    rank: 7,
  },
  {
    id: "8",
    name: "Pedro Lima",
    score: 2100,
    avatarUrl: "https://placehold.co/40x40.png",
    avatarFallback: "PL",
    rank: 8,
  },
  {
    id: "9",
    name: "Laura Ferreira",
    score: 2050,
    avatarFallback: "LF",
    rank: 9,
  },
  {
    id: "10",
    name: "Guilherme Souza",
    score: 1900,
    avatarUrl: "https://placehold.co/40x40.png",
    avatarFallback: "GS",
    rank: 10,
  },
];

export default function RankingPage() {
  return (
    <div className="container mx-auto p-4 py-8 sm:p-6 md:p-8">
      <header className="mb-8 text-center">
        <Award className="mx-auto mb-2 h-12 w-12 text-primary" />
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Ranking de Jogadores
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Veja quem são os melhores no LingoLeap!
        </p>
      </header>

      <Card className="w-full max-w-3xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center font-headline text-2xl">
            <TrendingUp className="mr-2 h-6 w-6 text-accent" />
            Top 10 Melhores Pontuadores
          </CardTitle>
          <CardDescription>
            Acompanhe sua posição e desafie-se a subir no ranking.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] text-center">Posição</TableHead>
                <TableHead>Jogador</TableHead>
                <TableHead className="text-right">Pontuação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockRankingData.map((entry, index) => (
                <TableRow
                  key={entry.id}
                  className={
                    index < 3 ? "bg-primary/5 hover:bg-primary/10" : ""
                  }
                >
                  <TableCell className="text-center font-medium">
                    <div className="flex items-center justify-center">
                      {entry.rank === 1 && (
                        <Award className="h-5 w-5 text-yellow-500 mr-1" />
                      )}
                      {entry.rank === 2 && (
                        <Award className="h-5 w-5 text-slate-400 mr-1" />
                      )}
                      {entry.rank === 3 && (
                        <Award className="h-5 w-5 text-orange-400 mr-1" />
                      )}
                      {entry.rank}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-9 w-9" data-ai-hint="person user">
                        {entry.avatarUrl ? (
                          <AvatarImage
                            src={entry.avatarUrl}
                            alt={entry.name}
                          />
                        ) : (
                           <UserCircle2 className="h-full w-full text-muted-foreground" />
                        )}
                        <AvatarFallback>{entry.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{entry.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-semibold text-primary">
                    {entry.score.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
