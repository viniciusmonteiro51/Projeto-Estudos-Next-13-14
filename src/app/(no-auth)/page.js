"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

// Definir o esquema de validação usando Zod
const formSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  senha: z.string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
    .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula" })
    .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "A senha deve conter pelo menos um caractere especial (!@#$%^&*(),.?\":{}|<>)" }),
});

// Definir a função de submissão do formulário
const onSubmit = (data) => {
  console.log("Form data:", data);
};

export default function Home() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  return (
    <div className="flex h-screen w-screen flex-col md:flex-row">

      <div className="relative w-full h-1/2 md:h-full md:w-1/2">
        <Image src="/ocean.jpg" layout="fill" objectFit="cover" alt="Homepage Image" />
      </div>

      <div className="w-full h-1/2 flex items-center justify-center bg-sky-800 md:w-1/2 md:h-full">

        <div className="w-4/5 bg-[#fefefe] shadow-md border rounded-md p-8 md:w-2/5">

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="border-black"
                        placeholder="exemplo@dominio.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="senha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        className="border-black"
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-center">
                <Button disabled={form.formState.isSubmitting} className={"mt-4, w-2/4 bg-sky-700"} type="submit">
                  {form.formState.isSubmitting && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                  {form.formState.isSubmitting ? "Aguarde" : "Entrar"}
                </Button>
              </div>

            </form>
          </Form>

        </div>

      </div>
    </div>
  );

}
