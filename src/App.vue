<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';
import AuroraBackground from './components/ui/AuroraBackground.vue';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button'; 

// 1. IMPORTAÇÃO DAS IMAGENS LOCAIS (ASSETS)
import caioImage from './assets/CaioCorreia.jpg'; 
import michaelImage from './assets/MichaelCastro.png';
import allysonImage from './assets/AllysonAlves.png';

// 💡 DADOS DE PERFIL E TEXTO SOBRE MIM
const myName = 'Gabriel Lamas';
const myTitle = 'FullStack Developer | Vue.js e C#/.NET';
// ⚠️ TROQUE caioImage PELA SUA FOTO DE PERFIL
const myImage = caioImage; 

const aboutMeText = `
Olá! Sou Gabriel Lamas, um Desenvolvedor FullStack apaixonado por construir soluções eficientes e escaláveis. Minha jornada tem se concentrado na criação de interfaces dinâmicas usando Vue.js e na construção de APIs robustas com C# e o ecossistema .NET.
Desde o início da minha carreira, busco sempre aprimorar minhas habilidades em arquitetura de software e boas práticas de codificação. Acredito que a comunicação transparente e a dedicação contínua são a chave para o sucesso de qualquer projeto de tecnologia.
No meu tempo livre, adoro mergulhar em novas tecnologias e contribuir para a comunidade de desenvolvedores. Vamos construir algo incrível juntos!
`;

// 💡 LÓGICA DE SCROLL PARA ESCONDER O NAVBAR
const isNavVisible = ref(true);
const auroraRef = ref(null); 

const handleScroll = () => {
  if (auroraRef.value) {
    const auroraHeight = (auroraRef.value as HTMLElement).offsetHeight;
    
    // Lógica Corrigida: Garante que reaparece no topo.
    isNavVisible.value = window.scrollY === 0 || window.scrollY < auroraHeight * 0.8;
  } else {
    isNavVisible.value = window.scrollY === 0;
  }
};

onMounted(() => {
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const testimonials = [
  {
    id: 1,
    name: 'Caio Correia',
    title: 'Scrum Master',
    company: 'Target Work',
    image: caioImage,
    message: 'No meu tempo supervisionando o Gabriel, ele se mostrou uma pessoa capaz de assumir desenvolvimentos e projetos complexos para serem desenvolvidos, mesmo com o pouco tempo de experiência que ele tinha na área. Além disso, ele é extremamente comunicativo, o que tornava mais fácil transmitir as tarefas para ele de modo que ele entendesse exatamente o que estava sendo pedido.',
  },
  {
    id: 2,
    name: 'Michael Castro',
    title: 'Gestor',
    company: 'GlobalTera',
    image: michaelImage,
    message: 'Gabriel foi realmente um destaque no nosso time de suporte, entrou como JR mas chegou assumindo diversas responsabilidades. Sua dedicação incansável e habilidades excepcionais foram fundamentais para a eficiência da equipe. Além disso, sua atitude positiva e disposição para assumir responsabilidades adicionais fizeram dele um colega valioso. Sem dúvida, eu o recomendaria como uma adição incrível a qualquer time. Sua visão de trabalho em equipe e encorajamento nos profissionais mais novos ou com menos experiência sempre foi um diferencial, carismático e com uma comunicação indispensável. Tive o prazer e a honra de trabalhar com esse jovem que apesar da idade tem uma cabeça pensante incrível. .',
  },
  {
    id: 3,
    name: 'Allyson Alves',
    title: 'Desenvolvedor FullStack',
    company: 'Target Work',
    image: allysonImage,
    message: 'Gabriel é um excelente desenvolvedor .NET C# com quem tive a oportunidade de trabalhar. Sua habilidade técnica é impressionante, e sua abordagem prática para resolver desafios torna-o um membro valioso da equipe. O que diferencia Gabriel não é apenas seu conhecimento técnico, mas sua postura proativa em busca constante de aprendizado e crescimento profissional. Sua dedicação em expandir seu conhecimento contribui de forma notável para o sucesso do projetos, adicionando um toque inspirador ao ambiente de trabalho.',
  },
];
</script>

<template>
  <nav 
    :class="{ 
      'transform translate-y-0 opacity-100': isNavVisible, 
      'transform -translate-y-full opacity-0': !isNavVisible 
    }"
    class="fixed top-0 left-0 w-full z-[100] bg-transparent border-b-0 transition-all duration-300 ease-in-out"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-16">
        
        <div class="flex items-center space-x-2 sm:space-x-4">
            
            <div class="hidden sm:flex sm:space-x-4">
              <a href="#sobre-mim">
                <Button variant="ghost" class="text-white hover:text-indigo-400">
                  Sobre mim
                </Button>
              </a>
              <a href="#habilidades">
                <Button variant="ghost" class="text-white hover:text-indigo-400">
                  Habilidades
                </Button>
              </a>
              <a href="#formacao">
                <Button variant="ghost" class="text-white hover:text-indigo-400">
                  Formação
                </Button>
              </a>
              <a href="#experiencia">
                <Button variant="ghost" class="text-white hover:text-indigo-400">
                  Experiência
                </Button>
              </a>
              <a href="#recomendacoes">
                <Button variant="ghost" class="text-white hover:text-indigo-400">
                  Recomendações
                </Button>
              </a>
            </div>
            
            <div class="hidden sm:flex">
              <a href="#contato">
                <Button variant="secondary">
                  Currículo & Contato
                </Button>
              </a>
            </div>
        </div>
        
      </div>
    </div>
  </nav>
  
  <div class="min-h-screen"> 
    
    <AuroraBackground ref="auroraRef">
      <h1 class="text-4xl md:text-7xl font-bold text-center text-white relative z-20">
        Gabriel Lamas 
      </h1>
      <p class="font-extralight text-base md:text-4xl text-neutral-200 py-4 relative z-20">
        FullStack Developer.
      </p>
    </AuroraBackground>
    
    <section id="sobre-mim" class="py-16 md:py-24 **bg-slate-900** text-card-foreground">
      <div class="max-w-4xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-start **md:space-x-16**">
          
          <div class="flex-shrink-0 mb-8 md:mb-0 mx-auto md:mx-0">
            <Avatar class="h-32 w-32 md:h-48 md:w-48">
              <AvatarImage :src="myImage" :alt="myName" />
              <AvatarFallback>{{ myName.charAt(0) }}</AvatarFallback>
            </Avatar>
          </div>

          <div class="flex-grow">
            <h3 class="text-4xl font-extrabold mb-1 text-foreground">
              {{ myName }}
            </h3>
            <p class="text-xl font-medium mb-6 text-muted-foreground">
              {{ myTitle }}
            </p>

            <p class="text-lg leading-relaxed whitespace-pre-line text-card-foreground">
                {{ aboutMeText }}
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section id="recomendacoes" class="p-8 md:p-16 **bg-background**">
      <h2 class="text-4xl font-bold mb-10 text-center text-foreground">
        Recomendações
      </h2>
      <Carousel
        :opts="{ align: 'center', loop: true }"
        class="w-full max-w-4xl mx-auto"
      >
        <CarouselContent class="-ml-4 items-stretch">
          <CarouselItem v-for="testimonial in testimonials" :key="testimonial.id" class="basis-4/5 pl-4 h-full">
            <Card class="h-full shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent class="flex flex-col p-6 h-full">
                <div class="flex items-center space-x-4 mb-4">
                  <Avatar class="h-16 w-16 md:h-20 md:w-20">
                    <AvatarImage :src="testimonial.image" :alt="testimonial.name" />
                    <AvatarFallback>{{ testimonial.name.charAt(0) }}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p class="text-xl font-semibold text-foreground">
                      {{ testimonial.name }}
                    </p>
                    <p class="text-sm text-muted-foreground">
                      {{ testimonial.title }} <span class="font-bold">- {{ testimonial.company }}</span>
                    </p>
                  </div>
                </div>

                <p class="text-card-foreground italic flex-grow text-base md:text-lg">
                  "{{ testimonial.message }}"
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>

    <section id="habilidades" class="h-screen bg-muted/20"></section>
    <section id="formacao" class="h-screen bg-muted/40"></section>
    <section id="experiencia" class="h-screen bg-muted/60"></section>
    <section id="contato" class="h-screen bg-primary/20"></section>
  </div>
</template>