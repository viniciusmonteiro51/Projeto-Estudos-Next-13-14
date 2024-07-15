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
                            <TableHead>Nome</TableHead>
                            <TableHead>E-mail</TableHead>
                            <TableHead>CPF</TableHead>
                            <TableHead>Metas</TableHead>
                            <TableHead>Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>CPF</TableCell>
                        <TableCell>Metas</TableCell>
                    </TableRow>
                </Table>
            </section>
        </>
    )
}