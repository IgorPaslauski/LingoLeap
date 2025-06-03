
"use client";

import { useState, useEffect } from "react";
import { Award, TrendingUp, UserCircle2, School, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface RankingEntry {
  id: string;
  name: string;
  score: number;
  avatarUrl?: string;
  avatarFallback: string;
  rank: number;
  school: string;
  date: Date;
}

const ITEMS_PER_PAGE = 10;

const mockRankingData: RankingEntry[] = Array.from({ length: 30 }, (_, i) => {
  const names = ["Ana Silva", "Carlos Oliveira", "Mariana Costa", "João Pereira", "Beatriz Santos", "Lucas Almeida", "Sofia Rodrigues", "Pedro Lima", "Laura Ferreira", "Guilherme Souza", "Juliana Alves", "Rafael Martins", "Camila Ribeiro", "Bruno Gomes", "Fernanda Lima", "Diego Andrade", "Patricia Rocha", "Gustavo Nogueira", "Larissa Barbosa", "Vinicius Castro", "Manuela Dias", "Felipe Azevedo", "Valentina Pinto", "Ricardo Moreira", "Gabriela Correia", "Eduardo Santos", "Isabela Farias", "Leonardo Teixeira", "Clara Mendes", "Thiago Bastos"];
  const schools = ["Escola Estrela do Saber", "Colégio Monteiro Lobato", "Instituto Vanguarda", "Escola Nova Geração", "Colégio Ateneu", "Escola Aprender Mais"];
  
  return {
    id: `${i + 1}`,
    name: names[i % names.length],
    score: 3000 - i * 50 - Math.floor(Math.random() * 50),
    avatarUrl: Math.random() > 0.3 ? `https://placehold.co/40x40.png` : undefined,
    avatarFallback: names[i % names.length].split(" ").map(n => n[0]).join("").substring(0,2).toUpperCase(),
    rank: i + 1,
    school: schools[i % schools.length],
    date: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000 - Math.floor(Math.random() * 100000000)), // Random date in the last 30 days
  };
}).sort((a, b) => b.score - a.score).map((entry, index) => ({ ...entry, rank: index + 1 }));


export default function RankingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<RankingEntry[]>([]);

  const totalPages = Math.ceil(mockRankingData.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setPaginatedData(mockRankingData.slice(startIndex, endIndex));
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-slate-400";
    if (rank === 3) return "text-orange-400";
    return "text-muted-foreground";
  };

  return (
    <div className="container mx-auto p-4 py-8 sm:p-6 md:p-8">
      <header className="mb-8 text-center">
        <Award className="mx-auto mb-2 h-16 w-16 text-primary" />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Hall da Fama LingoLeap
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Confira os mestres da língua portuguesa e suas conquistas!
        </p>
      </header>

      <Card className="w-full max-w-5xl mx-auto shadow-2xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary/5 p-6">
          <CardTitle className="flex items-center font-headline text-3xl text-primary">
            <TrendingUp className="mr-3 h-8 w-8 text-accent" />
            Classificação Geral
          </CardTitle>
          <CardDescription className="text-md">
            Os melhores desempenhos em nossos desafios. Continue praticando para subir no ranking!
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead className="w-[80px] text-center font-semibold text-base">Pos.</TableHead>
                <TableHead className="font-semibold text-base">Jogador</TableHead>
                <TableHead className="text-right font-semibold text-base">Pontuação</TableHead>
                <TableHead className="font-semibold text-base hidden md:table-cell">Escola</TableHead>
                <TableHead className="text-center font-semibold text-base hidden sm:table-cell">Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((entry) => (
                <TableRow
                  key={entry.id}
                  className={`
                    border-b border-border/50
                    ${entry.rank <= 3 ? "bg-primary/[0.03] hover:bg-primary/10" : "hover:bg-muted/50"}
                  `}
                >
                  <TableCell className="text-center font-bold text-lg">
                    <div className={`flex items-center justify-center ${getRankColor(entry.rank)}`}>
                      {entry.rank <= 3 && (
                        <Award className={`mr-1.5 h-6 w-6 ${getRankColor(entry.rank)}`} />
                      )}
                       {entry.rank}º
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3 py-2">
                      <Avatar className="h-11 w-11 border-2 border-primary/20" data-ai-hint="person user">
                        {entry.avatarUrl ? (
                          <AvatarImage
                            src={entry.avatarUrl}
                            alt={entry.name}
                          />
                        ) : (
                           <UserCircle2 className="h-full w-full text-muted-foreground/70" />
                        )}
                        <AvatarFallback className="font-semibold bg-primary/10 text-primary">
                            {entry.avatarFallback}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="font-semibold text-md text-foreground">{entry.name}</span>
                         {entry.rank <=3 && (
                            <p className={`text-xs font-medium ${getRankColor(entry.rank)}`}>
                                {entry.rank === 1 ? "Lenda do Português" : entry.rank === 2 ? "Mestre das Palavras" : "Expert em Gramática"}
                            </p>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-bold text-xl text-primary">
                    {entry.score.toLocaleString()}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <School className="mr-2 h-4 w-4 text-primary/70" />
                      {entry.school}
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground hidden sm:table-cell">
                    <div className="flex items-center justify-center">
                       <CalendarDays className="mr-2 h-4 w-4 text-primary/70" />
                       {format(entry.date, "dd/MM/yy", { locale: ptBR })}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4 bg-muted/20">
          <span className="text-sm text-muted-foreground">
            Página {currentPage} de {totalPages}
          </span>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Próxima
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
