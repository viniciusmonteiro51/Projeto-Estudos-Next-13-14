"use client"
import { useRouter } from "next/router";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function DataTableUsuarios({dados, searchParams}) {


    return (
        <>
            <section className="mt-4">
                <p>Total de usuários: {dados?.resultados >= 0 ? dados?.resultados : "Sean"}</p>
                <Table className="mt-2">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Descrição</TableHead>
                            <TableHead>Data</TableHead>
                            <TableHead>Valor</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableRow>
                        <TableCell>Dinheiro com destino</TableCell>
                        <TableCell>20/12/2024</TableCell>
                        <TableCell>R$100.000.000,00</TableCell>
                    </TableRow>
                </Table>
            </section>
        </>
    )
}