import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  UserCog,
  Save,
  Lock,
  Mail,
  User,
  MapPin,
  Map,
  CreditCard,
} from "lucide-react"; // Importando ícones relevantes

export default function ConfiguracaoPage() {
  return (
    <div className="container mx-auto p-4 py-8 sm:p-6 md:p-8">
      {/* Cabeçalho da Página, similar ao da RankingPage */}
      <header className="mb-8 text-center">
        <UserCog className="mx-auto mb-2 h-16 w-16 text-primary" />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Configurações da Conta
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Personalize seu perfil e gerencie suas informações.
        </p>
      </header>

      <Card className="w-full max-w-2xl mx-auto shadow-2xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary/5 p-6">
          <CardTitle className="flex items-center font-headline text-3xl text-primary">
            <User className="mr-3 h-8 w-8 text-accent" />{" "}
            {/* Ícone para o título principal do Card */}
            Dados do Usuário
          </CardTitle>
          <CardDescription className="text-md">
            Atualize suas informações pessoais e de contato.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome do Usuário</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="estado">Estado</Label>
              <Input
                id="estado"
                type="text"
                placeholder="Digite seu estado"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                id="cidade"
                type="text"
                placeholder="Digite sua cidade"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                type="text"
                placeholder="Digite seu CPF"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu email"
                required
              />
            </div>

            {/* Separador e nova seção para senha, mantendo o estilo */}
            <Separator className="my-6" />

            <CardTitle className="flex items-center font-headline text-2xl text-primary mb-4">
              <Lock className="mr-2 h-6 w-6 text-accent" />
              Segurança
            </CardTitle>
            <CardDescription className="text-md">
              Mantenha sua conta segura alterando sua senha regularmente.
            </CardDescription>
            <div className="space-y-2">
              <Label htmlFor="senha">Nova Senha</Label>
              <Input
                id="senha"
                type="password"
                placeholder="Digite sua nova senha"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmar-senha">Confirmar Senha</Label>
              <Input
                id="confirmar-senha"
                type="password"
                placeholder="Confirme sua nova senha"
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex items-center justify-end border-t p-4 bg-muted/20">
          <Button type="submit" className="flex items-center">
            <Save className="mr-2 h-4 w-4" />
            Salvar Alterações
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
