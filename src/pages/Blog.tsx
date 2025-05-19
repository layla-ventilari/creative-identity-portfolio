import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ArrowRight, Clock, FileText } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Dados de exemplo para os posts do blog
const blogPosts = [{
  id: 1,
  title: "Como criar um site de design impactante",
  excerpt: "Descubra as melhores práticas e tendências para criar sites que não apenas impressionam visualmente, mas também convertem.",
  date: "10 Jan 2023",
  readTime: "5 min de leitura",
  author: "Ana Silva",
  slug: "como-criar-site-design-impactante",
  category: "Design"
}, {
  id: 2,
  title: "Tendências de UI/UX para 2023",
  excerpt: "Explore as tendências de design de interface e experiência do usuário que estão definindo o mundo digital este ano.",
  date: "22 Fev 2023",
  readTime: "8 min de leitura",
  author: "Pedro Almeida",
  slug: "tendencias-ui-ux-2023",
  category: "UI/UX"
}, {
  id: 3,
  title: "A importância do branding consistente",
  excerpt: "Entenda por que manter um branding consistente é crucial para construir reconhecimento de marca e confiança do cliente.",
  date: "15 Mar 2023",
  readTime: "6 min de leitura",
  author: "Carla Mendes",
  slug: "importancia-branding-consistente",
  category: "Branding"
}, {
  id: 4,
  title: "Otimizando seu site para conversão",
  excerpt: "Dicas práticas para transformar visitantes em clientes através de um design estratégico e focado em conversão.",
  date: "05 Abr 2023",
  readTime: "7 min de leitura",
  author: "Marcos Santos",
  slug: "otimizando-site-para-conversao",
  category: "Marketing"
}, {
  id: 5,
  title: "Como escolher a paleta de cores perfeita",
  excerpt: "Um guia completo para selecionar cores que transmitam a personalidade da sua marca e conectem com seu público-alvo.",
  date: "18 Mai 2023",
  readTime: "4 min de leitura",
  author: "Júlia Costa",
  slug: "como-escolher-paleta-cores-perfeita",
  category: "Design"
}, {
  id: 6,
  title: "Tipografia no design: guia essencial",
  excerpt: "Aprenda como a escolha das fontes certas pode transformar completamente a percepção do seu projeto de design.",
  date: "30 Jun 2023",
  readTime: "5 min de leitura",
  author: "Rafael Oliveira",
  slug: "tipografia-design-guia-essencial",
  category: "Design"
}];
const BlogPage: React.FC = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 mb-20">
        <section className="section bg-slate-50">
          <div className="container mx-auto">
            <h1 className="section-heading text-center mb-12">Nosso Blog</h1>
            <p className="section-subheading text-center">INSIGHTS & NOVIDADES</p>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
              Compartilhamos as últimas tendências, insights e melhores práticas do mundo do design e marketing digital.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="text-sm text-accent1 font-medium mb-1">{post.category}</div>
                    <CardTitle className="text-xl leading-tight hover:text-accent1 transition-colors duration-300">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t pt-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <a href={`/blog/${post.slug}`} className="flex items-center text-accent1 hover:underline">
                      Ler artigo
                      <ArrowRight size={14} className="ml-1" />
                    </a>
                  </CardFooter>
                </Card>)}
            </div>

            <Pagination className="mt-16">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default BlogPage;