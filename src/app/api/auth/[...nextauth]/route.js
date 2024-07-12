import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                senha: { label: 'Senha', type: 'password' }
            },
            async authorize(credentials, req) {
                const response = await fetch('http://localhost:3100/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        senha: credentials?.senha
                    })
                })
                const usuario = await response.json();

                if (usuario && response.ok) {
                    return usuario;
                }

                return null;
            },
        })
    ],
    pages: {
        signIn: '/'
    },
    callbacks: {
        async jwt({ token, user }) {
            // Adiciona o usuário ao token JWT
            if (user) {
                token.user = user;
                console.log(token.user)
            }
            return token;
        },
        async session({ session, token }) {
            // Adiciona os dados do usuário à sessão
            if (token) {
                session.user = token.user;
                console.log(session.user)
            }
            return session;
        }
    }
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
