
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Dados de exemplo para os posts do blog (mesmos do Blog.tsx)
const blogPosts = [
  {
    id: 1,
    title: "Como criar um site de design impactante",
    excerpt: "Descubra as melhores práticas e tendências para criar sites que não apenas impressionam visualmente, mas também convertem.",
    content: `<p>No mundo digital atual, ter um site visualmente atraente não é mais um diferencial, mas uma necessidade. Um design impactante não apenas chama a atenção dos visitantes, mas também comunica a essência da sua marca e guia os usuários para as ações desejadas.</p>
    
    <h2>Comece com uma estratégia clara</h2>
    <p>Antes de mergulhar no design, defina claramente seus objetivos. O que você quer que os visitantes façam? Quem é seu público-alvo? Quais são suas necessidades e preferências? Um site eficaz começa com uma compreensão profunda de quem você está tentando alcançar.</p>
    
    <h2>Simplicidade é a chave</h2>
    <p>Sites eficazes mantêm o design simples e intuitivo. Evite sobrecarregar os usuários com informações demais ou elementos visuais complexos. Use espaço em branco estrategicamente para criar respiro e direcionar o foco para o que realmente importa.</p>
    
    <h2>Hierarquia visual eficiente</h2>
    <p>Organize os elementos da página de modo que guie os olhos do usuário naturalmente através do conteúdo, do mais importante para o menos importante. Isso pode ser alcançado através do tamanho, cor, contraste e posicionamento dos elementos.</p>
    
    <h2>Tipografia com propósito</h2>
    <p>Escolha fontes que reflitam a personalidade da sua marca e sejam fáceis de ler em diferentes dispositivos. Limite-se a 2-3 fontes para manter a consistência e evitar confusão visual.</p>
    
    <h2>Cores que comunicam</h2>
    <p>Selecione uma paleta de cores que represente os valores da sua marca e crie o estado emocional desejado nos visitantes. Lembre-se de que diferentes cores evocam diferentes sentimentos e associações.</p>
    
    <h2>Imagens de alta qualidade</h2>
    <p>Invista em fotografia profissional ou gráficos de alta qualidade que complementem seu conteúdo e reforcem sua mensagem. Evite imagens genéricas de banco de imagens que parecem artificiais.</p>
    
    <h2>Responsividade é fundamental</h2>
    <p>Certifique-se de que seu site funcione perfeitamente em todos os dispositivos, desde desktops até smartphones. Um design responsivo não é negociável no cenário digital atual.</p>
    
    <h2>Velocidade de carregamento</h2>
    <p>Mesmo o design mais bonito será inútil se o site demorar para carregar. Otimize imagens, minimize o código e escolha um hospedagem confiável para garantir uma experiência rápida e fluida.</p>
    
    <h2>Consistência em todas as páginas</h2>
    <p>Mantenha elementos como navegação, rodapé, esquema de cores e estilo de design consistentes em todo o site para criar uma experiência coesa e profissional.</p>
    
    <h2>Clareza na navegação</h2>
    <p>Torne fácil para os usuários encontrarem o que estão procurando com uma estrutura de navegação clara e intuitiva. Menu hamburger, breadcrumbs e barras de pesquisa bem posicionadas podem melhorar significativamente a usabilidade.</p>`,
    date: "10 Jan 2023",
    readTime: "5 min de leitura",
    author: "Ana Silva",
    slug: "como-criar-site-design-impactante",
    category: "Design"
  },
  {
    id: 2,
    title: "Tendências de UI/UX para 2023",
    excerpt: "Explore as tendências de design de interface e experiência do usuário que estão definindo o mundo digital este ano.",
    content: `<p>O campo de UI/UX está constantemente evoluindo, com novas tendências emergindo a cada ano. Em 2023, vemos uma convergência de funcionalidade, estética e acessibilidade que está redefinindo como interagimos com interfaces digitais.</p>
    
    <h2>Design Minimalista Avançado</h2>
    <p>O minimalismo continua forte, mas com uma abordagem mais sofisticada. Em vez de simplesmente eliminar elementos, designers estão criando interfaces que parecem simples na superfície, mas oferecem funcionalidades avançadas quando necessário, através de animações contextuais e navegação inteligente.</p>
    
    <h2>Modo Escuro como Padrão</h2>
    <p>O que começou como uma opção alternativa agora está se tornando o modo padrão em muitas interfaces. Além de reduzir a fadiga ocular e economizar bateria em dispositivos móveis, o modo escuro oferece oportunidades criativas para hierarquia visual e destaques de cor.</p>
    
    <h2>Interfaces 3D e Imersivas</h2>
    <p>Com o avanço do WebGL e outras tecnologias, interfaces tridimensionais estão se tornando mais comuns, oferecendo experiências imersivas diretamente no navegador, sem necessidade de aplicativos especiais ou hardware adicional.</p>
    
    <h2>Microinterações Significativas</h2>
    <p>Pequenas animações e feedbacks visuais que respondem às ações do usuário estão sendo usados não apenas como decoração, mas como parte integral da comunicação da interface, fornecendo confirmação, orientação e até mesmo personalidade para o produto digital.</p>
    
    <h2>Tipografia Expressiva</h2>
    <p>Fontes grandes, ousadas e personalizadas estão substituindo os designs tipográficos seguros e genéricos. A tipografia está sendo tratada como um elemento central do design, não apenas como um veículo para o conteúdo.</p>
    
    <h2>Paletas de Cores Neo-brutais</h2>
    <p>Combinações de cores vibrantes, contrastantes e até discordantes estão ganhando popularidade, desafiando as convenções tradicionais de harmonia de cores em favor de maior impacto visual e memorabilidade.</p>
    
    <h2>Acessibilidade Integrada ao Design</h2>
    <p>A acessibilidade não é mais um item de lista de verificação adicionado no final do processo. Em 2023, vemos mais designers incorporando princípios de design inclusivo desde o início, considerando diversos usuários com diferentes habilidades e necessidades.</p>
    
    <h2>Design Ético e Consciente</h2>
    <p>Há uma crescente consciência sobre como o design de interfaces pode influenciar o comportamento dos usuários. Designers estão optando por padrões que respeitam a atenção, privacidade e bem-estar dos usuários, evitando técnicas manipulativas.</p>
    
    <h2>Personalização Algorítmica</h2>
    <p>Interfaces que se adaptam automaticamente às preferências, comportamento e contexto do usuário estão se tornando mais sofisticadas, oferecendo experiências verdadeiramente personalizadas sem sobrecarregar os usuários com opções de configuração.</p>`,
    date: "22 Fev 2023",
    readTime: "8 min de leitura",
    author: "Pedro Almeida",
    slug: "tendencias-ui-ux-2023",
    category: "UI/UX"
  },
  // ... outros posts com conteúdo completo
  {
    id: 3,
    title: "A importância do branding consistente",
    excerpt: "Entenda por que manter um branding consistente é crucial para construir reconhecimento de marca e confiança do cliente.",
    content: "<p>Conteúdo detalhado sobre branding consistente...</p>",
    date: "15 Mar 2023",
    readTime: "6 min de leitura",
    author: "Carla Mendes",
    slug: "importancia-branding-consistente",
    category: "Branding"
  },
  {
    id: 4,
    title: "Otimizando seu site para conversão",
    excerpt: "Dicas práticas para transformar visitantes em clientes através de um design estratégico e focado em conversão.",
    content: "<p>Conteúdo detalhado sobre otimização para conversão...</p>",
    date: "05 Abr 2023",
    readTime: "7 min de leitura",
    author: "Marcos Santos",
    slug: "otimizando-site-para-conversao",
    category: "Marketing"
  },
  {
    id: 5,
    title: "Como escolher a paleta de cores perfeita",
    excerpt: "Um guia completo para selecionar cores que transmitam a personalidade da sua marca e conectem com seu público-alvo.",
    content: "<p>Conteúdo detalhado sobre paletas de cores...</p>",
    date: "18 Mai 2023",
    readTime: "4 min de leitura",
    author: "Júlia Costa",
    slug: "como-escolher-paleta-cores-perfeita",
    category: "Design"
  },
  {
    id: 6,
    title: "Tipografia no design: guia essencial",
    excerpt: "Aprenda como a escolha das fontes certas pode transformar completamente a percepção do seu projeto de design.",
    content: "<p>Conteúdo detalhado sobre tipografia...</p>",
    date: "30 Jun 2023",
    readTime: "5 min de leitura",
    author: "Rafael Oliveira",
    slug: "tipografia-design-guia-essencial",
    category: "Design"
  }
];

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 mb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
              <p className="mb-8">O artigo que você está procurando não existe ou foi removido.</p>
              <Link to="/blog" className="btn btn-primary px-6 py-2">
                <ArrowLeft size={18} className="mr-2" /> Voltar para o Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 mb-20">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho do Post */}
          <div className="max-w-3xl mx-auto mb-10">
            <Link to="/blog" className="inline-flex items-center text-accent1 hover:underline mb-6">
              <ArrowLeft size={18} className="mr-2" /> Voltar para todos os artigos
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-8">
              <div className="flex items-center mr-6 mb-2">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center mb-2">
                <User size={16} className="mr-2" />
                <span>Por {post.author}</span>
              </div>
            </div>
            
            <div className="bg-accent1/10 px-4 py-2 rounded-md inline-block text-accent2 text-sm font-medium">
              {post.category}
            </div>
          </div>
          
          {/* Conteúdo do Post */}
          <div 
            className="max-w-3xl mx-auto prose prose-lg prose-headings:font-display prose-headings:font-bold prose-a:text-accent1 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Compartilhar e Navegação entre Posts */}
          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Compartilhar este artigo</h3>
                <div className="flex gap-4">
                  {/* Ícones de compartilhamento */}
                  <a href="#" className="text-gray-500 hover:text-accent1 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-accent1 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-accent1 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
              
              <Link 
                to="/blog"
                className="bg-accent2 text-white px-6 py-3 rounded-md hover:bg-accent2/90 transition-colors"
              >
                Mais artigos
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
